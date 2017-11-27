exports.run = async(bot, message, args, level) => {
    message.channel.send(`The bot is currently on ` + bot.config.version + '!');
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'version',
    description: 'Displays the bot\'s current version!',
    usage: 'version'
};
