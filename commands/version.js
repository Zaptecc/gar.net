exports.run = async(bot, message, args, level) => {
    msg.channel.send('beta v0.0000002');
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'version',
    description: 'Simple test to see if I am responding!',
    usage: 'version'
};
