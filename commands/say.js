exports.run = async(bot, message, args, permLevel) => {

    message.delete()
    let txt = args.slice(0).join(" ");
    message.channel.send(txt)

    console.log;

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['speak'],
    permLevel: 4
};

exports.help = {
    name: 'say',
    description: 'Make me say something in chat!',
    usage: 'say [message]'
};