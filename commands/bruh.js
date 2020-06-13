module.exports = {
    name: 'bruh',
    description: 'Reacts with BRUH emojis',
    format: '',
    execute(message, args, client) {
        message.channel.send(":b:");
        message.channel.send(":regional_indicator_r:");
        message.channel.send(":regional_indicator_u:");
        message.channel.send(":regional_indicator_h:");
    },
};