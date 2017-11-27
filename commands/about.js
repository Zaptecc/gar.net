exports.run = (bot, message, args, level) => {
   
    message.channel.send({embed: {
    	color: 3447003,
    	author: {
      		name: 'Coming sooooooon',
      		icon_url: bot.user.avatarURL
    	},
    	title: "Information about the bot and its creator",
    fields: [{
        name: "blah",
        value: "blablabla"
      		},
      		{
        name: "rawr",
        value: "ecks dee"
      		},
      		{
        name: "ayy",
        value: "LMAOOO"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: 'https://cdn.discordapp.com/avatars/110525419609919488/213cabb2fed468774feb8204c080c8c9.png?size=2048',
      text: "© Garnett Strack 2017"
    		}
  		}
	});

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['info'],
    permLevel: 0
};

exports.help = {
    name: 'about',
    description: 'Shows information about the bot and its creator!',
    usage: 'about'
};