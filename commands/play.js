exports.run = async(bot, message, args, permLevel) => {
const YTDL = require('ytdl-core')

    function play(connection, message) {
        var server = servers[message.guild.id]
    
        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}))
    
        server.queue.shift()
    
        server.dispatcher.on("end", function() {
            if (server.queue[0]) play(connection, message)
            else connection.disconnect()
        })
    }
    

var servers = {};

    if(!message.member.voiceChannel) {
        message.channel.send('Please join a voice channel before attempting to play a song!')
        return
    }

    if(!args[0]) {
        message.channel.send('Please specify a YouTube link!')
        return
    }

    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }

    var server = servers[message.guild.id]

    server.queue.push(args[0])

    message.channel.send('Successfully added to the queue!')

    if(!message.channel.voiceConnection) {
        message.member.voiceChannel.join().then(function(connection) {
            play(connection, message)
        })
    }

    console.log;

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'play',
    description: 'Just a test idk how this works yet.',
    usage: 'play'
};