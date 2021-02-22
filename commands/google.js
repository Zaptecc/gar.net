const Discord = require('discord.js')

exports.run = (bot, message) => {

    var GoogleSearch = require('google-search');

    var google = new GoogleSearch({
        key: bot.config.googlekey,
        cx: bot.config.cx,
    });




            google.build({
                q: message.content,
                num: 1,
            }, (err, response) => {
                console.log(err);
                console.log(response);
                if (err) {
                    console.error(err);
                    message.channel.send('ERROR: Search failed');
                    return;
                }
                if (response.totalResults === 0 || response.items === undefined) {
                    message.channel.send('No results.');
                } else if (response.items !== undefined) {
                    console.log(response);
                    var results = new Discord.RichEmbed();
                    var link = response.items[0].link;
                    var title = response.items[0].title;
                    var desc = response.items[0].snippet;
                    results.setAuthor('Google', 'https://maxcdn.icons8.com/Share/icon/Logos/google_logo1600.png', 'https://www.google.com/')
                        .setTitle(title)
                        .setURL(link)
                        .setDescription(desc + ' [more](' + link + ')')
                        .setTimestamp()
                        .setColor(message.guild.me.displayColor)
                        .setFooter('Powered by RoBot', 'https://cdn.discordapp.com/avatars/302555306603446283/3dae86c730e32b495d944c94bb302fe4.png?size=2048');
                    message.channel.send({ embed: results });
                }
            });



}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 1
};

exports.help = {
	name: 'google',
	description: 'Google search things!',
	usage: 'google [search query]'
};