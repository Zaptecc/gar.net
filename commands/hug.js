exports.run = async(bot, message, args, permLevel) => {
    var list = Array(
		"https://cdn.discordapp.com/attachments/383781196728893453/394242677396340736/hug1.gif",
        "https://media.giphy.com/media/UXcgHL20y7TKo/giphy.gif",
        "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif",
        "https://78.media.tumblr.com/53f4b43c9f716a649e1ff776dbfbda64/tumblr_n10rv5YAiW1rjptrbo1_500.gif",
        "http://media0.giphy.com/media/llmZp6fCVb4ju/giphy.gif",
        "http://media1.giphy.com/media/QbkL9WuorOlgI/giphy.gif",
        "https://img.fireden.net/co/image/1517/54/1517549375689.gif",
        "https://media1.tenor.com/images/a71b123666e08bb6ad336cd1625c0cdb/tenor.gif?itemid=3525606",
        "https://media.giphy.com/media/8KKRIP5ZHUo2k/giphy.gif",
        "https://media.giphy.com/media/xUOwG1D8Q5vjqrgouI/giphy.gif",
        "https://media.giphy.com/media/16bJmyPvRbCDu/giphy.gif"
    );
    let random = `${list[Math.floor(Math.random()*list.length)]}`

	if (!message.mentions.users.array()[0]) {
        message.reply('you have been hugged by ' + bot.user.username + '!', {
            files: [
                "https://media2.giphy.com/media/Lb3vIJjaSIQWA/giphy.gif"
            ]
        })
   
    } else {
        let huggedUser = message.mentions.users.array()[0];
        
        if (huggedUser.id == '338177286249381900') {
            message.channel.send(`Thank you 😊`, {
                files: [
                    "https://media1.tenor.com/images/40400b1dc9aca35aec4d93c7c3a65805/tenor.gif"
                ]
            })
        } else {
            message.channel.send(`**${huggedUser.username}**, you have been hugged by **${message.author.username}**!`, {
                files: [
                    random
                ]
            })
        }
    };

    console.log
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'hug',
    description: 'Hug(s) a user or yourself!',
    usage: 'hug [@username]'
};