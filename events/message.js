module.exports = (bot, message) => {
    if (message.author.bot) return;

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
