module.exports = async (bot, message) => {
    const Discord = require('discord.js');
    if (message.content.toLowerCase().includes('garnett')||message.content.toLowerCase().includes('110525419609919488')||message.content.toLowerCase().includes('garnet')) {
		//if (message.author.id == '207601549160087553' || message.author.id == '259430296636751873') return;
		if (message.guild.members.get('110525419609919488')) {
			mentionedEmbed = new Discord.RichEmbed()
			.setTitle(message.guild.name + ' - ' + message.channel.name)
			.setAuthor(message.author.username, message.author.avatarURL)
			.setDescription(message.content)
			bot.users.get('110525419609919488').send({embed: mentionedEmbed});
		}
    }

    if (message.channel.type === "dm" && message.author.id == bot.user.id) {
    console.log("[DM] " + bot.user.username + " -> " + message.channel.recipient.username + " | " + message.content)
    } else if (message.channel.type === "dm" && message.author.id != bot.user.id){
    console.log("[DM] " + message.channel.recipient.username + " -> " + bot.user.username + " | " + message.content)
    }
    
    if (message.author.bot || message.author.id == '180124505044287488' || message.author.id == '255425576418934784' || message.author.id == '157638851224010752') return;

    if (message.content.includes('❤')) {
		message.react('❤')
    }
    if (/\bs+h+i+t+\b/gi.test(message.content)) {
		message.react('💩')
        console.log('Somebody Said a bad word')
    }
    if (/\bs+h+i+t+e+\b/gi.test(message.content)) {
		message.react('💩')
        console.log('Somebody Said a bad word')
    }
    if (/\bs+h+i+e+t+\b/gi.test(message.content)) {
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
    if (message.content.includes('lemayo') || message.content.includes('lmayo') || message.content.includes('lemayonnaise')) {
        message.channel.send({ files: [`./resources/lemayo.png`] })
    }
    if (message.content.includes('fingerguns')) {
        const finger_guns = bot.emojis.get('310267478846603266')
        message.react(finger_guns)
        message.channel.send(`${finger_guns}`)
        console.log('finger guns')
    }
    if (message.content.includes('🤦')) {
        message.channel.send({ files: [`./resources/facepalm.png`] })
    }
    if (message.isMentioned(bot.user)) {
        if (message.content.includes('prefix')) {
            message.reply(`my prefix for this server is \`` + bot.config.prefix + '\`')
            console.log('somebody requested the prefix')
        } else if (/\bh+i+\b/gi.test(message.content) || /\bh+e+y+\b/gi.test(message.content)) {
            message.channel.send('hey there')
            console.log('h e y')
        } else if (message.content.includes('token')) {
            message.channel.send('bad')
        }
    }

    if (message.content.indexOf(bot.config.prefix) !== 0) return;
        const args = message.content.split(/\s+/g);
        const command = args.shift().slice(bot.config.prefix.length).toLowerCase();
        const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));
    
        let perms = bot.permLevel(message);
        
        if (command == 'play' || command == 'mhelp' || command == 'stop' || command == 'volume' || command == 'skip' || command == 'pause' || command == 'resume' || command == 'np') {
            return
        } 

        if (cmd && perms >= cmd.conf.permLevel) {
            bot.log("log", `${message.guild.name}/#${message.channel.name}: ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`, "CMD");
            cmd.run(bot, message, args, perms);
        } else if(cmd && perms < cmd.conf.permLevel) {
            message.channel.send('You do not have permission to run this command!');
            bot.log("log", `${message.guild.name}/#${message.channel.name}: ${message.author.username} (${message.author.id}) attempted to run command ${cmd.help.name}, but does not have sufficient permissions`, "CMD");
        } else {
            message.channel.send('This command does not exist!');
        }
};