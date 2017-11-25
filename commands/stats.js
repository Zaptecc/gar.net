const Discord = require('discord.js')
const os = require('os-utils')

exports.run = async(bot, message, args, permLevel) => {

            var osName = os.platform();
            var cpuCount = os.cpuCount();
            var freeMem = os.freemem();
            var totalMem = os.totalmem();
            var CPUUusage = os.cpuUsage(function(){})

		message.channel.send({embed: {
    	color: 3447003,
    	author: {
      		name: 'plz work for the love of god',
      		icon_url: 'https://cdn.discordapp.com/attachments/228993138818154497/381144695826546689/question.png'
    	},
    	title: "Bot Hosting Information",
    	url: "http://bit.ly/2A7257T",
    	description: "This gives information about the computer that gar.net is being hosted on, which is probably a Raspberry Pi.",
    fields: [{
        name: "Operating System 🖥️",
        value: osName + '  (darwin probably means MacOS)'
      		},
      		{
        name: "CPU Usage? *insert cpu emoji*",
        value: 'CPU Usage (%) ' + CPUUusage
      		},
      		{
        name: "Free RAM *insert ram emoji*",
        value: 'test' + ' out of ' + 'test'
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: 'https://cdn.discordapp.com/avatars/110525419609919488/213cabb2fed468774feb8204c080c8c9.png?size=2048',
      text: "© Garnett Strack 2017"
    		}
  		}
	});
            console.log('somebody ran stats, if they spammed ur computer is probably getting rekt')
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
