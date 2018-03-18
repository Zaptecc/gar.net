exports.run = async(bot, message, args, permLevel) => {
    var list = Array(
		"https://cdn.discordapp.com/attachments/383781196728893453/394242677396340736/hug1.gif",
        "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-toy-story.gif",
        "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif",
        "https://78.media.tumblr.com/53f4b43c9f716a649e1ff776dbfbda64/tumblr_n10rv5YAiW1rjptrbo1_500.gif",
        "http://media0.giphy.com/media/llmZp6fCVb4ju/giphy.gif",
        "http://media1.giphy.com/media/QbkL9WuorOlgI/giphy.gif",
        "https://m.popkey.co/62c667/9Eyp6_s-200x150.gif",
        "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-regular-show.gif",
        "https://media1.tenor.com/images/a71b123666e08bb6ad336cd1625c0cdb/tenor.gif?itemid=3525606",
        "https://media.giphy.com/media/8KKRIP5ZHUo2k/giphy.gif"
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
            message.channel.send(`**${huggedUser.username}**, you have been hugged by **${message.author.username}**!`, {
                files: [
                    random
                ]
            })
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