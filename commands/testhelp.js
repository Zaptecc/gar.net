exports.run = async(bot, message, args, level) => {
  msg.channel.send({embed: {
    	color: 3447003,
    	author: {
      		name: bot.user.username + ' help',
      		icon_url: bot.user.avatarURL
    	},
    	title: "This is an embed",
    	url: "http://google.com",
    	description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      		},
      		{
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      		},
      		{
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© Example"
    		}
  		}
	});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'testhelp',
    description: 'Simple test to see if I am responding!',
    usage: 'testhelp'
};
