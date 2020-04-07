module.exports = async bot => {
    await wait(500);
    bot.log("log", `I'm ready to help ${bot.users.cache.size} users in ${bot.guilds.cache.size} servers!`, "RDY");
    bot.user.setActivity("or something", {
        type: "STREAMING",
        url: "https://www.twitch.tv/Zaptecc"
      });
}