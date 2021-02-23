exports.run = async(bot, message, args, level) => {

    let permlvl = 0;
    if (!message.guild || !message.member) return 0;
    try {
        let modRole = message.guild.roles.cache.find(role => role.name === bot.config.modRoleName);
        if (modRole && message.member.roles.has(modRole.id)) permlvl = 2;
    } catch (e) {
        console.warn("Mod role permission check error"); 
        //message.channel.send('An error has occurred.')
    }
    try {
        let adminRole = message.guild.roles.cache.find(role => role.name === bot.config.adminRoleName);
        if (adminRole && message.member.roles.has(adminRole.id)) permlvl = 3;
    } catch (e) {
        console.warn("Admin role permission check error");
        //message.channel.send('An error has occurred.')
    }
    if (message.author.id === 353269206827008000) permlvl = 2;
    if(message.author.id === message.guild.owner.id) permlvl = 3;
    if(message.author.id === bot.config.owner) permlvl = 4;

    message.channel.send('Your permissions level in this server is ' + permlvl + '!')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'permlvl',
    description: 'Displays your permission level for this bot in the current server!',
    usage: 'permlvl'
};
