exports.run = async(bot, message, args, level) => {
    message.channel.send('beta v0.0000003?');
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
