module.exports = (bot, message) => {
    if (message.author.bot) return;

    if (message.content.includes('❤')) {
		message.channel.send('❤❤❤')
	} else if (/\bs+h+i+t+\b/gi.test(message.content)) {
		message.react('💩')
        console.log('Somebody Said a bad word')
	} else if (/\ba+y+y+\b/gi.test(message.content)) {
		message.react('🇱')
		setTimeout(function(){message.react('🇲')}, 1000)
		setTimeout(function(){message.react('🇦')}, 2000)
        setTimeout(function(){message.react('🇴')}, 3000)
        console.log('ayyliens')
	} else if (/\ba+s+s+\b/gi.test(message.content)) {
        message.react('🍑')
        console.log('somebody sAid A bAd word')
    } else if (/\bd+i+c+k+\b/gi.test(message.content)) {
        message.react('🍆')
        console.log('someboDy saiD a baD worD')
    } else if (/\bw+e+t+\b/gi.test(message.content)) {
        message.react('💦')
        console.log('somebody said a bad Word')
    } else if (/\bh+e+l+l+\b/gi.test(message.content)) {
        message.react('🔥')
        console.log('somboHdy saiHd a baHd word')
    }

    if (message.content.indexOf(bot.config.prefix) !== 0) return;
        const args = message.content.split(/\s+/g);
        const command = args.shift().slice(bot.config.prefix.length).toLowerCase();
        const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));
    
        let perms = bot.permLevel(message);
        
        if (cmd && perms >= cmd.conf.permLevel) {
            bot.log("log", `${message.guild.name}/#${message.channel.name}: ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`, "CMD");
            cmd.run(bot, message, args, perms);
        }
};