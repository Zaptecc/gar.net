exports.run = async(bot, message, args, permLevel) => {

    let member = message.mentions.members.first();

    if (typeof member == 'undefined') {
        message.channel.send('Please add a username after the command!')
    } else if (member == '<@!226999841358610432>' || member == '<@!174687224988827659>' || member == '<@!243174457336791041>') {
        message.channel.send('Heroes never die!')
    } else {

        let nameLength = member.displayName.length
        let space = ' '
        let us = '\_'
        let spaces = space.repeat(nameLength)
        let halfSpaces = space.repeat(nameLength/2)
        let uss = us.repeat(nameLength)
        let specialSpaces = halfSpaces

        if (nameLength & 1)
        {
            // Odd number
        }
        else
        {
            //Even number
            specialSpaces = space.repeat((nameLength/2)-1)
        }

    message.channel.send('\`\`\`    _____'+uss+'______  \n   / '+specialSpaces+'   R.I.P. '+halfSpaces+' \\\n  |     '+spaces+'        |\n  | '+specialSpaces+'  Here lies '+halfSpaces+' |\n  |       ' + member.displayName + '      |\n  |______'+uss+'_______|\n\`\`\`')

    console.log

    }

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'rip',
    description: 'Creates an ASCII tombstone with the user you mentioned!',
    usage: 'rip [username]'
};