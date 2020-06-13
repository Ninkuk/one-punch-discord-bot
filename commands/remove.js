module.exports = {
    name: 'remove',
    description: 'Remove an exercise',
    format: '[name]',
    execute(message, args, client) {
        const fs = require('fs');
        const Discord = require('discord.js');
        if (args <= 1) {
            message.channel.send("Please specify the name of the exercise!");
            return;
        }

        let name = args[0];

        fs.unlink(`./commands/${name}.js`, function (err) {
            if (err) message.channel.send(err);

            message.channel.send(`Command \`${name}\` was removed!`);
        });
    },
};