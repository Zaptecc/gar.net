module.exports = (bot, message) => {
    
    if (message.channel.type === "dm" && message.author.id == bot.user.id) {
    console.log("[DM] " + bot.user.username + " -> " + message.channel.recipient.username + " | " + message.content)
    } else if (message.channel.type === "dm" && message.author.id != bot.user.id){
    console.log("[DM] " + message.channel.recipient.username + " -> " + bot.user.username + " | " + message.content)
    }
    
    if (message.author.bot) return;

    if (message.content.includes('❤')) {
		message.channel.send('❤❤❤')
    }
    if (/\bs+h+i+t+\b/gi.test(message.content)) {
		message.react('💩')
        console.log('Somebody Said a bad word')
    }
    if (/\ba+y+y+\b/gi.test(message.content)) {
		message.react('🇱')
		setTimeout(function(){message.react('🇲')}, 1000)
		setTimeout(function(){message.react('🇦')}, 2000)
        setTimeout(function(){message.react('🇴')}, 3000)
        console.log('ayyliens')
    }
    if (/\ba+s+s+\b/gi.test(message.content)) {
        message.react('🍑')
        console.log('somebody sAid A bAd word')
    }
    if (/\bd+i+c+k+\b/gi.test(message.content)) {
        message.react('🍆')
        console.log('someboDy saiD a baD worD')
    }
    if (/\bw+e+t+\b/gi.test(message.content)) {
        message.react('💦')
        console.log('somebody said a bad Word')
    }
    if (/\bh+e+l+l+\b/gi.test(message.content)) {
        message.react('🔥')
        console.log('somboHdy saiHd a baHd word')
    }
    if (/\bh+e+i+l+\b/gi.test(message.content)) {
        message.react('🇩🇪')
        console.log('its hailing')
    }
    if (message.content.includes('fingerguns')) {
        const finger_guns = bot.emojis.get('310267478846603266')
        message.channel.send(`${finger_guns}`)
        console.log('finger guns')
    }
    if (message.isMentioned(bot.user)) {
        if (message.content.includes('prefix')) {
            message.reply(`my prefix for this server is \`` + bot.config.prefix + '\`')
            console.log('somebody requested the prefix')
        } else if (/\bh+i+\b/gi.test(message.content)) {
            message.channel.send('hey there')
        }
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