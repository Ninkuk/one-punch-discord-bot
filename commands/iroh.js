module.exports = {
    name: 'inspireme',
    description: 'Yoyo',
    execute(message, args) {
        const fs = require('fs');
        const Discord = require('discord.js');
        fs.readFile("./commands/iroh-quotes.txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }

            let lines = data.split('\n');
            let randomLine = lines[Math.floor(Math.random() * lines.length)];

            const messageEmbed = new Discord.MessageEmbed()
                .setColor("00bfa5")
                .setTitle("Iroh's Inspirations")
                .setURL("https://github.com/Ninkuk/one-punch-discord-bot/blob/master/commands/iroh-quotes.txt")
                .setDescription(randomLine)
                .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4cc89754-ed86-4129-ae2c-53306e5302ca/d2maqkj-8cd7f9e3-29ee-4988-8691-5e0b4dada22d.jpg/v1/fill/w_900,h_900,q_75,strp/iroh_the_dragon_of_the_west_by_gilbert86ii.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi80Y2M4OTc1NC1lZDg2LTQxMjktYWUyYy01MzMwNmU1MzAyY2EvZDJtYXFrai04Y2Q3ZjllMy0yOWVlLTQ5ODgtODY5MS01ZTBiNGRhZGEyMmQuanBnIiwid2lkdGgiOiI8PTkwMCIsImhlaWdodCI6Ijw9OTAwIn1dXX0.Er8L_Ca0XB3ePDXDWNMKsMy_1V_n6LSGTSjX3swmiSM")

            message.channel.send(messageEmbed);
        });

    },
};