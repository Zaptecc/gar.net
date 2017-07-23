const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

bot.login(config.token);

bot.on("ready", () => {
	console.log("I am ready!");
});

bot.on("message", (msg) => {

	//Exit and stop if no prefix is found or if another bot says it
	if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

	if (msg.content.startsWith(config.prefix + "<3")) {
		msg.channel.send(":heart::heart::heart:");
	} else if (msg.content.startsWith(config.prefix + "help")) {
		msg.channel.send("uhhhhhhhhh...");
	}

	if (msg.author.id !== config.ownerID) return;

	if (msg.content.startsWith(config.prefix + "bee")) {
		msg.channel.send("According to all known laws of aviation, there is no known way a bee should be able to fly. Its wings are to small to get its fat little body off the ground. The bee, of course, flies anyways because bees don't care what humans think is impossible.")
		msg.channel.send("Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little.")
		msg.channel.send("Barry! Breakfast is ready!")
		msg.channel.send("Coming! Hang on a second. Hello?")
	}
});

//*doesnt know how to use github*