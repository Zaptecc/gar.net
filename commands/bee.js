exports.run = async(bot, message, args, level) => {
    message.channel.send("According to all known laws of aviation, there is no known way a bee should be able to fly. Its wings are to small too get its fat little body off the ground. The bee, of course, flies anyways because bees don't care what humans think is impossible.")
	message.channel.send("Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little.")
	message.channel.send("Barry! Breakfast is ready!")
    message.channel.send("Coming! Hang on a second. Hello?")
    console.log("test1")
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: 'bee',
    description: 'Reads off the entire Bee Movie script, mainly used to test latency.',
    usage: 'bee'
};
