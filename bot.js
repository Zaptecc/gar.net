const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

bot.login(config.token);

//Logs to the console when the bot turns on and has set a game
bot.on('ready', () => {
	bot.user.setGame('beta v0.0000001', 'https://twitch.tv/lightningdude38', 1);
	console.log(`Ready! Currently located in ${bot.guilds.size} servers!`);
});

//Logs to the console when the bot joins a server
bot.on('guildCreate', guild => {
	console.log(`Joined server: ${guild.name} (id: ${guild.id}). This server currently has ${guild.memberCount} members!`);
});

//Logs to the console when the bot leaves a server
bot.on('guildDelete', guild => {
	console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

//Commands
bot.on('message', (msg) => {

	//NON-COMMANDS

	if (msg.content.includes('❤')) {
		msg.channel.send(':heart::heart::heart:')
	} else if (msg.content.includes('shit')) {
		msg.react('💩')
	} else if (msg.content.includes('ayy')) {
		msg.react('🇱')
		setTimeout(function(){msg.react('🇲')}, 500)
		setTimeout(function(){msg.react('🅰')}, 1000)
		setTimeout(function(){msg.react('🇴')}, 1500)
	}

	//Exit and stop if no prefix is found or if another bot says it
	if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

	if (msg.content.includes('version')) {
		msg.channel.send('the bot is still in what i like to describe as "mega-beta"');
	} else if (msg.content.startsWith(config.prefix + 'help')) {
		msg.channel.send('uhhhhhhhhh...');
	} else if (msg.content.startsWith(config.prefix + 'ping')) {
		msg.channel.send(`Pong! Ping = \`${Math.round(bot.ping)}\` ms`)
	}

	//Bot author only commands
	if (msg.author.id !== config.ownerID) return;

	if (msg.content.startsWith(config.prefix + "bee")) {
		msg.channel.send("According to all known laws of aviation, there is no known way a bee should be able to fly. Its wings are to small too get its fat little body off the ground. The bee, of course, flies anyways because bees don't care what humans think is impossible.")
		msg.channel.send("Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little.")
		msg.channel.send("Barry! Breakfast is ready!")
		msg.channel.send("Coming! Hang on a second. Hello?")
	}
});