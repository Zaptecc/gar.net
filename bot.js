const discord = require("discord.js");
const { promisify } = require('util');
const readdir = promisify(require("fs").readdir);
const bot = new discord.Client();
bot.config = require("./config.json");
require("./modules/functions.js")(bot);

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

(async function() {

    const commandFiles = await readdir('./commands/');
    bot.login("log", `Loading ${commandFiles.length} commands!`);
    commandFiles.forEach(f => {
        try {
            let commandFile = require(`./commands/${f}`);
            bot.log("log", `Loading the ${commandFile.help.name} command!`);
            bot.commands.set(commandFile.help.name, commandFile);
            commandFile.conf.aliases.forEach(alias => {
                bot.aliases.set(alias, commandFile.help.name);
            });    
        } catch (e) {
            bot.log(`Unable to load command ${f}: ${e}`);
        }
    });

    const eventFiles = await readdir('./events/');
    bot.login("log", `Loading ${eventFiles.length} events!`);
    eventFiles.forEach(file => {
        const eventName = file.split(".")[0];
        const event = require(`./events/${file}`);
        bot.on(eventName, event.bind(null, bot));
        delete require.cache[require.resolve(`./events/${file}`)];
    });

    bot.login(bot.config.token);

}());

bot.on('message', (msg) => {

	//NON-COMMANDS

	if (msg.content.includes('❤')) {
		msg.channel.send('❤❤❤')
	} else if (/\bs+h+i+t+\b/gi.test(msg.content)) {
		msg.react('💩')
        console.log('Somebody Said a bad word')
	} else if (/\ba+y+y+\b/gi.test(msg.content)) {
		msg.react('🇱')
		setTimeout(function(){msg.react('🇲')}, 1000)
		setTimeout(function(){msg.react('🇦')}, 2000)
        setTimeout(function(){msg.react('🇴')}, 3000)
        console.log('ayyliens')
	} else if (/\ba+s+s+\b/gi.test(msg.content)) {
        msg.react('🍑')
        console.log('somebody sAid A bAd word')
    } else if (/\bd+i+c+k+\b/gi.test(msg.content)) {
        msg.react('🍆')
        console.log('someboDy saiD a baD worD')
    } else if (/\bw+e+t+\b/gi.test(msg.content)) {
        msg.react('💦')
        console.log('somebody said a bad Word')
    } else if (/\bh+e+l+l+\b/gi.test(msg.content)) {
        msg.react('🔥')
        console.log('somboHdy saiHd a baHd word')
    }
});