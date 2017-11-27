exports.run = async(bot, message, args, permLevel) => {

    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    member.kick();

    if (!reason || reason == ""){
        message.channel.send(`Successfully kicked ` + member + ` with no reason given!`)
        .then(message => setTimeout(function() {message.delete()}, 15000));
    } else {
        message.channel.send(`Successfully kicked ` + member + ` for the reason \`` + reason + '\`!')
        .then(message => setTimeout(function() {message.delete()}, 15000));
    }

    process.on("unhandledRejection", (err) => {
        message.channel.send(':x: Error occurred! Please check that I have the right permissions!');
    });

    console.log;

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kek'],
    permLevel: 3
};

exports.help = {
    name: 'kick',
    description: 'Kick users that are misbehaving!',
    usage: 'kick [username]'
};