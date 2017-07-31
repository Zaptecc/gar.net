const os = require('os'), Discord = require('discord.js'), osu = require('os-utils')
exports.run = (bot, message, args) => {
        function stats(bot, msg) {
        
            var osName = os.platform();
            var cpuUsage = os.cpuUsage( callback );
        }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['status'],
    permLevel: 0
};

exports.help = {
    name: 'stats',
    description: 'Displays current status of gar.net\'s server!',
    usage: 'stats'
};
