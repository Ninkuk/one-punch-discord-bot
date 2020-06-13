module.exports = {
    name: 'menu',
    description: 'List all the commands.',
    format: '',
    execute(message, args, client) {
        const Discord = require('discord.js');

        const {commands} = message.client;
        const name = commands.map(command => command.name);
        const menuEmbedd = new Discord.MessageEmbed()
            .setTitle('Saitama Bot Menu')

        let spacerCounter = 0;
        while (name.length > 0) {
            let x = commands.get(name.pop());
            menuEmbedd.addField(x.description, `\`!${x.name} ${x.format}\``, true);
            if (spacerCounter % 2 === 0) menuEmbedd.addField('\u200B', '\u200B', true);
            spacerCounter++;
        }

        message.channel.send(menuEmbedd);
    },
};