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

        let name = args[0].toLowerCase();
        let requiredCommands = ['remove', 'create', 'bruh', 'inspireme', 'name', 'menu'];
        for (let i = 0; i < requiredCommands.length; i++) {
            if (name === requiredCommands[i]) {
                message.channel.send("Keep your filthy hands away from my commands!!");
                return;
            }
        }

        fs.unlink(`./commands/${name}.js`, function (err) {
            if (err) {
                message.channel.send("Sorry, there was an error removing this command.");
            } else {
                message.channel.send(`Command \`${name}\` was removed!`);
            }
        });
    },
};