const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

bot.login(config.token);

//Logs to the console when the bot turns on and has set a game
bot.on('ready', () => {
	bot.user.setGame('beta v0.01?', 'https://twitch.tv/lightningdude38', 1);
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

//Sends a welcome message to new server members
bot.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find('name', 'member-log');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`Welcome to the server, ${member}`);
  });

//Commands
bot.on('message', (msg) => {

	if (msg.author.bot) return;

	//NON-COMMANDS

	if (msg.content.includes('❤')) {
		msg.channel.send('❤❤❤')
	} else if (/\bs+h+i+t+\b/gi.test(msg.content)) {
		msg.react('💩')
	} else if (/\ba+y+y+\b/gi.test(msg.content)) {
		msg.react('🇱')
		setTimeout(function(){msg.react('🇲')}, 500)
		setTimeout(function(){msg.react('🅰')}, 1000)
		setTimeout(function(){msg.react('🇴')}, 1500)
	} else if (/\bl+i+t+\b/gi.test(msg.content)) {
		msg.react('🔥')
		msg.channel.send('https://www.youtube.com/watch?v=jFRt6u-WMHo')
	} else if (/\bh+o+t+\b/gi.test(msg.content)) {
		msg.react('🔥')
	} else if (/\bn+u+t+\b/gi.test(msg.content)) {
		msg.react('🍆')
		msg.react('💦')
	} else if (/\bj+f+c+\b/gi.test(msg.content)) {
		msg.channel.send('IT\'S JASON BOURNE')
	} else if (msg.content.includes('jesus christ')) {
		msg.channel.send('IT\'S JASON BOURNE')
	} else if (msg.content.includes('Jesus christ')) {
		msg.channel.send('IT\'S JASON BOURNE')
	} else if (msg.content.includes('Jesus Christ')) {
		msg.channel.send('IT\'S JASON BOURNE')
	}

	//Exit and stop if no prefix is found or if another bot says it
	if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

	if (msg.content.includes('version')) {
		msg.channel.send('beta v0.01 i think?');
	} else if (msg.content.startsWith(config.prefix + 'help')) {
		msg.channel.send('coming soon try ,testhelp for now');
	} else if (msg.content.startsWith(config.prefix + 'join')) {
		if (msg.member.voiceChannel) {
			msg.member.voiceChannel.join()
			  .then(connection => { // Connection is an instance of VoiceConnection
				msg.channel.send('I have successfully connected to the voice channel!');
				msg.delete(1000)
			  })
			  .catch(console.log);
		  } else {
			msg.channel.send('You need to join a voice channel first!');
		  }
	} else if (msg.content.startsWith(config.prefix + 'disconnect')) {
		if (msg.member.voiceChannel) {
			msg.member.voiceChannel.leave()
				msg.channel.send('Disconnected from the voice channel!')
				.catch(console.log);
			} else {
				msg.channel.send('An error has occurred!')
			}
	} else if (msg.content.startsWith(config.prefix + 'ping')) {
		msg.channel.send(`Pong! Ping = \`${Math.round(bot.ping)}\` ms`)
	} else if (msg.content.startsWith(config.prefix + 'testhelp')) {
		msg.channel.send({embed: {
    	color: 3447003,
    	author: {
      		name: 'Help and commands',
      		icon_url: 'https://cdn.discordapp.com/attachments/228993138818154497/381144695826546689/question.png'
    	},
    	title: "gar.net's nonexistant website",
    	url: "http://bit.ly/2A7257T",
    	description: "This shows all commands and what they do/what they are used for.",
    fields: [{
        name: "Ping",
        value: "Responds with the bot's current ping in milliseconds."
      		},
      		{
        name: "Info",
        value: "Shows information about the bot and its creator."
      		},
      		{
        name: "React",
        value: "Lists all the different reactions that occur and what phrase triggers them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: 'https://cdn.discordapp.com/avatars/110525419609919488/213cabb2fed468774feb8204c080c8c9.png?size=2048',
      text: "© Garnett Strack 2017"
    		}
  		}
	});
	}

	//Bot author only commands
	if (msg.author.id !== config.ownerID) return;

	if (msg.content.startsWith(config.prefix + "bee")) {
		msg.channel.send("According to all known laws of aviation, there is no known way a bee should be able to fly. Its wings are to small too get its fat little body off the ground. The bee, of course, flies anyways because bees don't care what humans think is impossible.")
		msg.channel.send("Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little.")
		msg.channel.send("Barry! Breakfast is ready!")
		msg.channel.send("Coming! Hang on a second. Hello?")
		msg.channel.send("Barry?")
		msg.channel.send("Adam?")
		msg.channel.send("Can you believe this is happening?")
		msg.channel.send("I can't. I'll pick you up.")
		msg.channel.send("Looking sharp.")
		msg.channel.send("Use the stairs! Your father paid good money for those.")
	}
});
