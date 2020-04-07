module.exports = (bot, message) => {

  
bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');

    if (!channel) return;

    channel.send(`Welcome to the server, ${member}!`);
  });

}