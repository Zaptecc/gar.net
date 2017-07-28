exports.run = async(bot, message, args, level) => {
  msg.channel.send(`Pong! Your current latency is \`${Math.round(bot.ping)}\` ms!`)
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
