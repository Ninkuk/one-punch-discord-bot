module.exports = {
    name: 'skips',
    description: 'Enter your daily skips',
    format: '[# of skips]',
    execute(message, args, client) {
        const Discord = require('discord.js');
        message.delete();

        const messageEmbed = new Discord.MessageEmbed()
            .setColor("F44336")
            .setTitle(`${message.author.username} Achievement`)
            .addFields(
                {
                    name: 'skips',
                    value: args[0]
                }
            )
            .setThumbnail("https://mfiles.alphacoders.com/593/593024.png")
            .setTimestamp()

        const channel = client.channels.cache.get('719502252297158687');
        channel.send(messageEmbed);
    },
};