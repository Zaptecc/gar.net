exports.run = async(bot, message, args, permLevel, servers, play) => {

    var server = servers[message.guild.id]

    if(server.dispatcher) server.dispatcher.end()

    console.log

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'skip',
    description: 'Skip/vote to skip the current song in the voice channel!',
    usage: 'skip'
};