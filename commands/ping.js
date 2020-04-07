exports.run = async(bot, message, args, level) => {
  message.channel.send(`🏓 Pong! The bot's current latency is \`${Math.round(bot.ws.ping)}\` ms!`)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ping',
    description: 'Determine bot latency',
    usage: 'ping'
};
