const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === 'k' || !message.author.bot) {
        message.channel.messages.fetch({limit: 2}).then(message1 => {
            let author = message1.last().author;
            message.channel.send(`${author} your messages have been ignored by ${message.author}`);
        });
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    console.log(args);
    const command = args.shift().toLowerCase();
    console.log(command);

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

// login to Discord with your app's token
client.login(token);