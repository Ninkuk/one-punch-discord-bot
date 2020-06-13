module.exports = {
    name: 'inspireme',
    description: 'Inspirational Quotes',
    format: '',
    execute(message, args, client) {
        const fs = require('fs');
        const Discord = require('discord.js');
        fs.readFile("./commands/iroh-quotes.txt", 'utf8', function (err, data) {
            if (err) message.channel.send(err);

            let lines = data.split('\n');
            let randomLine = lines[Math.floor(Math.random() * lines.length)];

            const messageEmbed = new Discord.MessageEmbed()
                .setColor("00bfa5")
                .setTitle("Iroh's Inspirations")
                .setURL("https://github.com/Ninkuk/one-punch-discord-bot/blob/master/commands/iroh-quotes.txt")
                .setDescription(randomLine)
                .setThumbnail("https://raw.githubusercontent.com/Ninkuk/one-punch-discord-bot/master/images/iroh-thumbnail.jpeg")

            message.channel.send(messageEmbed);
        });

    },
};