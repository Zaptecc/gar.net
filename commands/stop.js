exports.run = async(bot, message, args, permLevel, servers, play) => {

    var server = servers[message.guild.id]

    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect

    console.log;

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'stop',
    description: 'Stop music playback and leave the voice channel!',
    usage: 'stop'
};