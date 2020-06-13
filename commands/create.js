module.exports = {
    name: 'create',
    description: 'Create a new exercise',
    format: '[name]',
    execute(message, args, client) {
        const fs = require('fs');
        const Discord = require('discord.js');
        if (args <= 1) {
            message.channel.send("Please specify the name of the exercise!");
            return;
        }

        let name = args[0].toLowerCase();

        let filecontents =
            `module.exports = {
            name: '${name}',
            description: 'Enter your daily ${name}',
                format: '[# of ${name}]',
                    execute(message, args, client) {
                        const Discord = require('discord.js');
                        message.delete();
                
                        const messageEmbed = new Discord.MessageEmbed()
                            .setColor("F44336")
                            .setTitle(\`\${message.author.username} Achievement\`)
                            .addFields(
                                {
                                    name: '${name}',
                                    value: args[0]
                                }
                            )
                            .setThumbnail("https://mfiles.alphacoders.com/593/593024.png")
                            .setTimestamp()
                
                        const channel = client.channels.cache.get('719502252297158687');
                        channel.send(messageEmbed);
                    },
                };`;

        fs.writeFile(`./commands/${name}.js`, filecontents, 'utf8', function (err) {
            if (err) message.channel.send(err);

            const newCommand = require(`./${name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`Command \`${name}\` was added!`);
        });
    },
};