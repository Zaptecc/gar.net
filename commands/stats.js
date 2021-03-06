const Discord = require('discord.js')
const osu = require('os-utils')
const os = require('os')


exports.run = async(bot, message, args, permLevel) => {
    
    const garnett_emoji = bot.emojis.cache.get('424768866431008785')
    var vals = {},
    date = new Date(bot.uptime);

    vals.memory = Math.round((os.totalmem() - os.freemem()) / 1000000),
    vals.totalmem = Math.round(os.totalmem() / 1000000),
    vals.strDate = date.getUTCDate() - 1 + "d " + date.getUTCHours() + "h " + date.getUTCMinutes() + "m " + date.getUTCSeconds() + "s",
    vals.owner = bot.users.cache.get(require('../config.json').owner),

    vals.shardid = 1
    vals.shardcount = 1
    vals.guilds = bot.guilds.cache.size
    vals.channels = bot.channels.cache.size
    vals.users = bot.users.cache.size

    osu.cpuUsage(function(v){
        vals.cpu = v.toFixed(2)
        sendStats(vals)
    })

//
//    if(bot.shard) {
//        vals.shardid = bot.shard.id
//        vals.shardcount = bot.shard.count
//        bot.shard.fetchClientValues('guilds.size').then(g => {
//            vals.guilds = g.reduce((prev, val) => prev + val, 0)
//            bot.shard.fetchClientValues('channels.size').then(c => {
//                vals.channels = c.reduce((prev, val) => prev + val, 0)
//                bot.shard.fetchClientValues('users.size').then(u => {
//                    vals.users = u.reduce((prev, val) => prev + val, 0)
//                    osu.cpuUsage(function(v){
//                        vals.cpu = v.toFixed(2)
//                        sendStats(vals);
//                    });
//                }).catch(console.error);
//            }).catch(console.error);
//        }).catch(console.error);
//    } else {
//        vals.shardid = 1
//        vals.shardcount = 1
//        vals.guilds = bot.guilds.length
//        vals.channels = bot.channels.length
//        vals.users = bot.users.length
//        sendStats(vals)
//    }

    function sendStats(vals) {

        var osname = os.type()
        if (osname === "Darwin") {
            var osname = "MacOS"
        }
        var stats = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + ' Stats', bot.user.avatarURL)
        .setFooter('This command was heavily based off RoBot v5. Check it out here: http://v.ht/kl4c')
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor)
        .addField(`${garnett_emoji}` + ' Owner', vals.owner.username + '#' + vals.owner.discriminator + '\n(' + vals.owner.id + ')', true)
        .addField(':book: Library', 'discord.js (v' + require('discord.js').version + ')', true)
      //.addField(':diamond_shape_with_a_dot_inside: Shard', vals.shardid + 1 + '/' + vals.shardcount, true)
      //.addField(':diamond_shape_with_a_dot_inside: Shard', `¯\\\\_(ツ)\\_/¯`, true)
        .addField(':family_mmgb: Servers', vals.guilds, true)
        .addField(':keyboard: Channels', vals.channels, true)
        .addField(':boy: Users', vals.users, true)
        .addField(':clock4: Uptime', vals.strDate, true)
        .addField(':floppy_disk: RAM Usage', vals.memory + "MB / " + vals.totalmem + " MB", true)
        .addField(':desktop: CPU Usage', vals.cpu * 100 + "%", true)
        .addField(':map: Host', os.hostname() + ' (' + osname + ')', true)

        message.channel.send({embed:stats});
    }
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['status'],
    permLevel: 0
};

exports.help = {
    name: 'stats',
    description: 'Displays current status of gar.net\'s hosting server!',
    usage: 'stats'
};
