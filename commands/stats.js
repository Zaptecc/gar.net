const os = require('os'), Discord = require('discord.js'), osu = require('os-utils')
exports.run = (bot, message, args) => {
        function stats(bot, msg) {
		
		var vals = {},
		date = new Date(bot.uptime);

		vals.memory = Math.round((os.totalmem() - os.freemem()) / 1000000),
		vals.totalmem = Math.round(os.totalmem() / 1000000),
		vals.strDate = date.getUTCDate() - 1 + "d " + date.getUTCHours() + "h " + date.getUTCMinutes() + "m " + date.getUTCSeconds() + "s",
		vals.owner = bot.users.get(require('../config.json').owner),
		vals.cpu, vals.shardid, vals.shardcount, vals.guilds, vals.channels, vals.users;

		if(bot.shard) {
			vals.shardid = bot.shard.id
			vals.shardcount = bot.shard.count
			bot.shard.fetchClientValues('guilds.size').then(g => {
				vals.guilds = g.reduce((prev, val) => prev + val, 0)
				bot.shard.fetchClientValues('channels.size').then(c => {
					vals.channels = c.reduce((prev, val) => prev + val, 0)
					bot.shard.fetchClientValues('users.size').then(u => {
						vals.users = u.reduce((prev, val) => prev + val, 0)
						osu.cpuUsage(function(v){
							vals.cpu = v.toFixed(2)
							sendStats(vals);
						});
					}).catch(console.error);
				}).catch(console.error);
			}).catch(console.error);
		} else {
			vals.shardid = 1
			vals.shardcount = 1
			vals.guilds = bot.guilds.length
			vals.channels = bot.channels.length
			vals.users = bot.users.length
			sendStats(vals)
		}
		
		function sendStats(vals) {
			var stats = new Discord.RichEmbed()
			.setAuthor(bot.user.username + ' Stats', bot.user.avatarURL)
			.setFooter('Powered by ' + bot.user.username, bot.user.avatarURL)
			.setTimestamp()
			.setColor(msg.guild.me.displayHexColor)
			.addField(':man_with_gua_pi_mao: Owner', vals.owner.username + '#' + vals.owner.discriminator + '\n(' + vals.owner.id + ')', true)
			.addField(':book: Library', 'discord.js (v' + require('discord.js').version + ')', true)
			.addField(':diamond_shape_with_a_dot_inside: Shard', vals.shardid+1 + '/' + vals.shardcount, true)
			.addField(':speaking_head: Servers', vals.guilds, true)
			.addField(':keyboard: Channels', vals.channels, true)
			.addField(':man: Users Served', vals.users, true)
			.addField(':clock1: Uptime', vals.strDate, true)
			.addField(':floppy_disk: RAM Usage', vals.memory + "MB / " + vals.totalmem + " MB", true)
			.addField(':desktop: CPU Usage', vals.cpu * 100 + "%", true)
			.addField(':map: Host', os.hostname() + ' (' + os.type() + ')', true)

			msg.channel.send({embed:stats});
		}
	}
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['status'],
    permLevel: 0
};

exports.help = {
    name: 'stats',
    description: 'Displays current status of gar.net\'s server!',
    usage: 'stats'
};
