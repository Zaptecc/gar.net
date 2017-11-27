exports.run = async(bot, message, args, permLevel) => {

    message.channel.send({ files: [`./resources/dab.jpg`] })

    console.log

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'dab',
    description: 'Responds to your cringeiness with something equally cringey.',
    usage: 'dab'
};