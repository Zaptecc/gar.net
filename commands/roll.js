exports.run = async(bot, message, args, permLevel) => {

    message.channel.send({ files: [`./resources/dab.jpg`] })
    message.channel.send('coming soon enjoy dab')

    console.log

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['die'],
    permLevel: 0
};

exports.help = {
    name: 'roll',
    description: 'Rolls a die randomly with the number of side that you specify!',
    usage: 'roll [number of sides]'
};