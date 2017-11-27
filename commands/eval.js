const Discord = require('discord.js')
const util = require('util')

exports.run = async(bot, message, args, permLevel) => {

    if (message.author.id === require("../config.json").owner) {
        var code = message.content;
        var embed = new Discord.RichEmbed();
        try {
            let evaled = eval(code);
            let type = typeof evaled;
            let insp = util.inspect(evaled, {
                depth: 0
            });

            if (evaled === null) evaled = 'null';

            embed.setColor(0x00FF00)
            .setTitle("Javascript Evaluation Complete")
            .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
            .setTimestamp()
            .addField('Code', "```js\n" + clean(code) + "```")
            .addField('Result', "```js\n" + clean(evaled.toString().replace(bot.token, 'REDACTED')) + "```");
            if (evaled instanceof Object) {
                embed.addField('Inspect', "```js\n" + insp.toString().replace(bot.token, 'REDACTED') + "```");
            } else {
                embed.addField('Type', "```js\n" + type + "```");
            }
            message.channel.send({embed:embed})
        } catch (err) {
            embed.setColor(0xFF0000)
            .setTitle(":rotating_light: ERROR THROWN :rotating_light: in Javascript Evaluation")
            .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
            .setTimestamp()
            .addField('Code', "```js\n" + clean(code) + "```")
            .addField('Error', "```LDIF\n" + clean(err.message) + "```");
            message.channel.send({embed:embed})
                .catch(error => console.log(error.stack));
        }
    }
    else {
        message.reply("you do not have permission to use eval!");
    }
    
    function clean(text) {
        
        if (message.content.includes(',eval')){
            return text.replace(',eval', String.fromCharCode(8203))
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        }
        else if (typeof(text) === "string") {
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        } else {
            return text;
        }
    }


}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'eval',
    description: 'Evaluate code and check for errors! Originally coded by Michael Cao, for RoBot V5.',
    usage: 'eval'
};
