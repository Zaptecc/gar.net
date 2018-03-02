const discord = require("discord.js");
const { promisify } = require('util');
const readdir = promisify(require("fs").readdir);
const YTDL = require('ytdl-core')
const Music = require('discord.js-musicbot-addon')
const bot = new discord.Client();
const GoogleSearch = require('google-search');


bot.config = require("./config.json");
require("./modules/functions.js")(bot);

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();


const music = new Music(bot, {
    youtubeKey: bot.config.ytkey,       //YouTube API key, stored in the config for privacy ;)
    prefix: bot.config.prefix,       // Prefix for the commands.
    global: false,         // Non-server-specific queues.
    maxQueueSize: 10,     // Maximum queue size of 25.
    clearInvoker: false,   // If permissions applicable, allow the bot to delete the messages that invoke it.
    helpCmd: 'mhelp',     //Sets the name for the help command.
    playCmd: 'play',     //Sets the name for the 'play' command.
    volumeCmd: 'volume',  //Sets the name for the 'volume' command.
    leaveCmd: 'stop',    //Sets the name for the 'leave' command.
    disableLoop: true,
    enableQueueStat: true,
    requesterName: true,
    anyoneCanSkip: false,
    anyoneCanAdjust: false,
    ownerOverMember: true,
    botOwner: '110525419609919488'
  });

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