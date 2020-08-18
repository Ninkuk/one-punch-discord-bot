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
        let filecontents = '';
        fs.readFile("./commands/create_template.txt", 'utf8', function (err, data) {
            filecontents = `${data}`;
            filecontents = filecontents.replace(/NAME/g, name)
            console.log(filecontents)
            fs.writeFile(`./commands/${name}.js`, filecontents, 'utf8', function (err) {
                if (err) {
                    message.channel.send(err);
                    return;
                }

                const newCommand = require(`./${name}.js`);
                message.client.commands.set(newCommand.name, newCommand);
                message.channel.send(`Command \`${name}\` was added!`);

                // const obj = {};
                // const obj2 = {};
                // obj2.date = "200";
                // obj2.pushups = 20;
                // obj2.situps = 20;
                // obj.ninad = [obj2];
                // const jsonString = JSON.stringify(obj);
                //
                // fs.writeFile(`./commands/${name}.json`, jsonString, 'utf8', function (err) {
                //     if (err) message.channel.send(err);
                // });
            });
        });
    },
};