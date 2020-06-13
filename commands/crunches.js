module.exports = {
    name: 'crunches',
    description: 'eh',
    execute(message, args, client) {
        const Discord = require('discord.js');
        // const client = new Discord.Client();
        message.delete();

        const messageEmbed = new Discord.MessageEmbed()
            .setColor("F44336")
            .setTitle("Ninad's Achievement")
            .addFields(
                {
                    name: 'Crunches',
                    value: args[0]
                }
            )
            .setThumbnail("https://mfiles.alphacoders.com/593/593024.png")
            .setTimestamp()

        const channel = client.channels.cache.get('721214435678748722');
        channel.send(messageEmbed);
    },
};