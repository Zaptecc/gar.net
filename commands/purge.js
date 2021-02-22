exports.run = (bot, message, args, level) => {
    var num = parseInt(args[0]);
    num += 1;
	if (!isNaN(num)) {
        message.channel.bulkDelete(num);
        message.channel.send(`${args[0]} messages purged by ${message.author}! :white_check_mark:`)
			.then(message => setTimeout(function() {message.delete()}, 10000));
    } else {
		message.channel.send("Please specify a number!");
    }
    
    process.on("unhandledRejection", (err) => {
        message.channel.send(':x: Error occurred! Please check that I have the right permissions!');
    });

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['clear', 'prune', 'clean'],
    permLevel: 2
};

exports.help = {
    name: 'purge',
    description: 'Mass clearing of messages!',
    usage: 'purge <number of messages to be deleted, between 2 and 100>'
};