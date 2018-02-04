module.exports = async bot => {
    await wait(1000);
    //bot.log("log", `Ready to love ${bot.users.size} users in ${bot.guilds.size} servers!`, "RDY");
    //you define the bot.log command in function.js, might as well us it
    bot.log("log", `I'm ready to help ${bot.users.size} users in ${bot.guilds.size} servers!`, "RDY");
    bot.user.setActivity('Spotify', {type: 2});
}