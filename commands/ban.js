exports.run = async(bot, message, args, permLevel) => {

    let reasonInput = args.slice(1).join(" ");
    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);
      if (member) {
          if (reasonInput == '') {
            member
            .ban({
              reason: 'Banned by gar.net with no reason given'
            })
            .then(() => {
              message.reply(`Successfully banned ${user.tag} with no reason given!`);
            })
            .catch(err => {
              message.reply('I was unable to ban the member, please ensure that I have the right permissions!');
              console.error(err);
            });
          } else {
        member
          .ban({
            reason: 'Banned by gar.net for the reason: ' + reasonInput
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag} for the reason: ${reasonInput}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member, please ensure that I have the right permissions!');
            console.error(err);
          });
        }
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }

    process.on("unhandledRejection", (err) => {
        message.channel.send(':x: Error occurred! Please check that I have the right permissions!');
    });

    console.log;

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['banish'],
    permLevel: 3
};

exports.help = {
    name: 'ban',
    description: 'Ban users that are misbehaving!',
    usage: 'ban [username]'
};