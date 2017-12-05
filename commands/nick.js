exports.run = async(bot, message, args, permLevel) => {

  let newNick = args.slice(0).join(" ");
  member = message.member

  function clean(newNick) {
    if (typeof(newNick) === "string") {
        return newNick.replace('[u\'', String.fromCharCode(8203)).replace('\'', String.fromCharCode(8203));
    }
    else {
        return newNick;
    }
}
      if (!clean(newNick) || clean(newNick) == ""){
          message.channel.send('Please specify a nickname to set!')
      } else if(clean(newNick) == "gar.net") {
          message.guild.members.get(bot.user.id).setNickname(clean(newNick));
          message.channel.send('Nickname successfully removed!')
      } else {
          message.guild.members.get(bot.user.id).setNickname(clean(newNick));
          message.channel.send('Successfully set nickname to \`' + clean(newNick) + '\`!')
      }
  
      process.on("unhandledRejection", (err) => {
          message.channel.send(':x: Error occurred! Please check that I have the right permissions!');
      });
  
      console.log('\'' + member.displayName + '\' set gar.net\'s nickname to \'' + clean(newNick) + '\' in server \'' + message.guild + '\'!');

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'nick',
    description: 'Set the bot\'s nickname in a specific server!',
    usage: 'nick [nickname]'
};