module.exports = (bot, message) => {

    // Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('general', 'main');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    message.channel.send(`Welcome to the server, ${member}!`);
  });

}