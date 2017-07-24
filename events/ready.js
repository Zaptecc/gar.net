module.exports = async bot => {
    await wait(1000);
    //bot.log("log", `Ready to love ${bot.users.size} users in ${bot.guilds.size} servers!`, "RDY");
    //you define the bot.log command in function.js, might as well us it
    bot.log("log", `I'm ready!`, "RDY");
    bot.user.setGame('beta v0.0000002', 'https://twitch.tv/lightningdude38', 1);
}