module.exports = {
    name: 'random-game',
    description: 'Helps us chose a random game without squabbling.',
    format: '[optional category]',
    execute(message, args, client) {
        const fs = require('fs')
        const Discord = require('discord.js');
        const users = require('../data/games_list.json');
        const data = JSON.parse(fs.readFileSync('data/games_list.json').toString());

        let gamesList = [];
        if (args.length > 0) {
            gamesList = data[args[0]];
        } else {
            for (const category in data) {
                for (let i = 0; i < data[category].length; i++) {
                    gamesList.push(data[category][i]);
                }
            }
        }

        let selectedGame = gamesList[Math.floor(Math.random() * gamesList.length)]
        const messageEmbed = new Discord.MessageEmbed()
            .setColor("03A9F4")
            .setTitle("Random Game")
            .addFields(
                {
                    name: 'The game you will be playing today is...',
                    value: selectedGame
                }
            )
            .setThumbnail("https://mfiles.alphacoders.com/593/593024.png")
            .setTimestamp()

        message.channel.send(messageEmbed);
    }
};