exports.run = async(bot, message, args, permLevel) => {

    member = message.member

    message.delete()
    let txt = args.slice(0).join(" 👏 ");
    message.channel.send('**' + member.displayName + '** ---> ' + txt)

    console.log;

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['speak'],
    permLevel: 4
};

exports.help = {
    name: 'clap',
    description: 'Insert the clap emoji between each word you say!',
    usage: 'clap [message]'
};