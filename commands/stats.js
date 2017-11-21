const Discord = require('discord.js')
const os = require('os-utils')

exports.run = async(bot, message, args, permLevel) => {

            var osName = os.platform();
            var cpuUsage = os.cpuUsage();
            var freeMem = os.freemem();
            var totalMem = os.totalmem();

		message.channel.send({embed: {
    	color: 3447003,
    	author: {
      		name: 'plz work for the love of god',
      		icon_url: 'https://cdn.discordapp.com/attachments/228993138818154497/381144695826546689/question.png'
    	},
    	title: "Bot Hosting Information",
    	url: "http://bit.ly/2A7257T",
    	description: "This shows all commands and what they do/what they are used for.",
    fields: [{
        name: "Operating System 🖥️",
        value: osName
      		},
      		{
        name: "CPU Usage? *insert cpu emoji*",
        value: 'test'
      		},
      		{
        name: "Free RAM *insert ram emoji*",
        value: 'test'
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: 'https://cdn.discordapp.com/avatars/110525419609919488/213cabb2fed468774feb8204c080c8c9.png?size=2048',
      text: "© Garnett Strack 2017"
    		}
  		}
	});
            console.log('should have sent?')
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['status'],
    permLevel: 0
};

exports.help = {
    name: 'stats',
    description: 'Displays current status of gar.net\'s hosting server!',
    usage: 'stats'
};
