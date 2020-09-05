const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// login to Discord with your app's token
client.login(token).then(() => {
    client.once('ready', () => {
        const messageEmbed = new Discord.MessageEmbed()
            .setColor("FFC627")
            .setTitle("ASU Health Check Reminder")
            .setURL("https://www.asu.edu/healthcheck/")
            .setDescription('Please submit your daily health check today!\nClick the link above to get to asu.edu/healthcheck')
            .setThumbnail("https://brandguide.asu.edu/sites/default/files/styles/downloadable_images/public/asu_sunburst_rgb_maroongold_150ppi_0.png?itok=oZA6h1Z6")
            .setTimestamp()

        const channel = client.channels.cache.get('720151848136474627')
        // const channel = client.channels.cache.get('695910739655000108');
        channel.send('@everyone')
        channel.send(messageEmbed).then(() => {
            client.destroy();
        });
    });
});