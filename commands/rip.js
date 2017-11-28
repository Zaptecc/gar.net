exports.run = async(bot, message, args, permLevel) => {

    let member = message.mentions.members.first();

    if (typeof member == 'undefined') {
        message.channel.send('Please add a username after the command!')
    } else {

        let nameLength = member.displayName.length
        let space = ' '
        let us = '\_'
        let spaces = space.repeat(nameLength)
        let halfSpaces = space.repeat(nameLength/2)
        let uss = us.repeat(nameLength)

    message.channel.send('\`\`\`    _____'+uss+'______  \n   / '+halfSpaces+'   R.I.P. '+halfSpaces+' \\\n  |     '+spaces+'        |\n  | '+halfSpaces+'  Here lies '+halfSpaces+' |\n  |       ' + member.displayName + '      |\n  |______'+uss+'_______|\n\`\`\`')

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