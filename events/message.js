module.exports = async (bot, message) => {
    const Discord = require('discord.js');

    if (message.channel.type === "dm" && message.author.id == bot.user.id) {
    console.log("[DM] " + bot.user.username + " -> " + message.channel.recipient.username + " | " + message.content)
    } else if (message.channel.type === "dm" && message.author.id != bot.user.id){
    console.log("[DM] " + message.channel.recipient.username + " -> " + bot.user.username + " | " + message.content)
    }
    
    if (message.author.bot) return;

    if (message.content.includes('❤')) {
		message.react('❤')
    }
    if (/\bs+h+i+t+\b/gi.test(message.content)) {
		message.react('💩')
    }
    if (/\bs+h+i+t+e+\b/gi.test(message.content)) {
		message.react('💩')
    }
    if (/\bs+h+i+e+t+\b/gi.test(message.content)) {
		message.react('💩')
    }
    if (/\ba+y+y+\b/gi.test(message.content)) {
		message.react('🇱')
		    .then(() => message.react('🇲'))
		    .then(() => message.react('🇦'))
            .then(() => message.react('🇴'))
            .catch(() => console.error('the ayyliens crashed'));
    }
    if (/\ba+s+s+\b/gi.test(message.content)) {
        message.react('🍑')
    }
    if (/\bt+h+i+c+c+\b/gi.test(message.content)) {
        message.react('🍑')
    }
    if (/\bd+i+c+k+\b/gi.test(message.content)) {
        message.react('🍆')
    }
    if (/\bw+e+t+\b/gi.test(message.content)) {
        message.react('💦')
    }
    if (/\bh+e+l+l+\b/gi.test(message.content)) {
        message.react('🔥')
    }
    if (/\bh+e+i+l+\b/gi.test(message.content)) {
        message.react('🇩🇪')
    }
    if (message.content.includes('lemayo') || message.content.includes('lmayo') || message.content.includes('lemayonnaise')) {
        message.channel.send({ files: [`./resources/lemayo.png`] })
    }
    if (message.content.includes('fingerguns')) {
        const finger_guns = bot.emojis.get('310267478846603266')
        message.react(finger_guns)
        message.channel.send(`${finger_guns}`)
    }
    if (message.content.includes('🤦')) {
        message.channel.send({ files: [`./resources/facepalm.png`] })
    }
    if (message.mentions.has(bot.user)) {
        if (message.content.includes('prefix')) {
            message.reply(`my prefix for this server is \`` + bot.config.prefix + '\`')
        } else if (/\bh+i+\b/gi.test(message.content) || /\bh+e+y+\b/gi.test(message.content)) {
            message.channel.send('hey there')
        } else if (message.content.includes('token')) {
            message.channel.send('haha good one')
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
        } else if(cmd && perms < cmd.conf.permLevel) {
            message.channel.send('You do not have permission to run this command!');
            bot.log("log", `${message.guild.name}/#${message.channel.name}: ${message.author.username} (${message.author.id}) attempted to run command ${cmd.help.name}, but does not have sufficient permissions`, "CMD");
        } else {
            message.channel.send('This command does not exist!');
        }
};