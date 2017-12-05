exports.run = async(bot, message, args, permLevel) => {

    message.reply(' my GitHub repository is located at https://github.com/lightningdude38/gar.net')

    console.log

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['gh', 'git'],
    permLevel: 0
};

exports.help = {
    name: 'github',
    description: 'Sends a message containing the GitHub repository for gar.net!',
    usage: 'github'
};