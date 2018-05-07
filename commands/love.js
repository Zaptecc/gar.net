exports.run = (bot, message, args, permLevel) => {
	var list = Array(
		"I appreciate you.",
		"you are the most perfect you there is.",
		"you are enough.",
		"you're strong.",
		"you deserve good things.",
		"you should be proud of yourself.",
		"you are good enough.",
		"you're making a difference.",
		"colors seem brighter when you're around.",
		"you're one of a kind.",
		"you're inspiring.",
		"the world is better because you're in it.",
		"you're awesome.",
		"you're totally rad.",
		"it's going to be alright.",
		"you're doing great.",
		"you are loved.",
		"it's going to be okay.",
		"no matter how far down you are, it's going to be just fine.",
		"I know life can be hard, but you can get through it.",
		"I have total faith in you.",
		"there are people who care about you.",
		"you're not alone.",
		"you deserve the world.",
		"you deserve love.",
		"you matter even if you are at your lowest.",
		"you are irreplacable.",
		"you mean the world to someone. Don't take that away from them.",
		"you're an amazing person."
    );
    
    var extList = Array(
        "you are a wonderful human. I've never met anyone so supportive, kind, and caring. You light up a room when you enter it. Stay awesome.  :heartpulse:",
        "you mean the world to me and so many other people. Continue to be your wonderful and amazing self. :heartpulse:",
        "I wish I could explain how seeing you and hearing the sound of your voice gives me butterflies. How your smile makes my heart skip a beat and how whenever I'm with you, I feel complete. :heartpulse:",
        "you deserve infinite amounts of love, and you're going to get it. Whether that's from me or somebody else, you are beautiful and amazing and are more worthy of it than you can imagine. :heartpulse:",
        "forever is a *long* time, but I would love to spend it by your side. I have total faith in you no matter what. :heartpulse:",
        "I choose you. And I will continue to choose you, over and over and over. Without pause, without a doubt, in a heartbeat. I'll choose you. :heartpulse:"
    );

	if (!message.mentions.users.array()[0]) {
		message.reply(`${list[Math.floor(Math.random()*list.length)]}`);
	} else {
		let loved = message.mentions.users.array()[0];
		if (loved.id == '226999841358610432' || loved.id == '174687224988827659' || loved.id == '243174457336791041' || loved.id == '163136022106865664') {
			message.channel.send(`**${loved.username}**, ${extList[Math.floor(Math.random()*extList.length)]}`)
		} else if (loved.id == '110525419609919488') {
            message.channel.send(`**${loved.username}**, you are loved, and everyone likes you.`)
        } else {
			message.channel.send(`**${loved.username}**, ${list[Math.floor(Math.random()*list.length)]}`);
		}
	};
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
	name: 'love',
	description: 'Love some people, even yourself! - mostly coded by arynapril',
	usage: 'love [@username]'
};
