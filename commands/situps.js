module.exports = {
    name: 'situps',
    description: 'Enter your daily situps',
    format: '[# of situps]',
    execute(message, args, client) {
        const fs = require('fs')
        const Discord = require('discord.js');
        const users = require('../data/users.json');
        message.delete();

        let exercise_data = {
            "exercise": 'situps',
            "date": new Date().toJSON(),
            "value": args[0]
        }

        const user = users[message.author.id]
        const data = JSON.parse(fs.readFileSync('workout_data.json').toString());
        data[user].push(exercise_data)
        fs.writeFileSync('workout_data.json', JSON.stringify(data))

        const messageEmbed = new Discord.MessageEmbed()
            .setColor("F44336")
            .setTitle(message.author.username + "'s Achievement")
            .addFields(
                {
                    name: 'situps',
                    value: args[0]
                }
            )
            .setThumbnail("https://mfiles.alphacoders.com/593/593024.png")
            .setTimestamp()

        const channel = client.channels.cache.get('719502252297158687');
        channel.send(messageEmbed);
    },
};