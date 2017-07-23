const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.login(config.token);

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {

  //Exit and stop if no prefix is found or if another bot says it
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "<3")) {
    message.channel.send(":heart::heart::heart:");
} else
  if (message.content.startsWith(config.prefix + "help")) {
    message.channel.send("uhhhhhhhhh...");
  }

  if(message.author.id !== config.ownerID) return;

  if (message.content.startsWith(config.prefix + "bee")){
    message.channel.send("According to all known laws of aviation, there is no known way a bee should be able to fly. Its wings are to small to get its fat little body off the ground. The bee, of course, flies anyways because bees don't care what humans think is impossible.")
    message.channel.send("Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little.")
    message.channel.send("Barry! Breakfast is ready!")
    message.channel.send("Coming! Hang on a second. Hello?")
  }
});

//*doesnt know how to use github*