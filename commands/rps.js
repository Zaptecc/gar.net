exports.run = async(bot, message, args, permLevel) => {

    let choice = args[0]
    let throwback = Math.floor(Math.random() * 3) + 1

    if (throwback === 1) {
        throwback = "rock"
    } else if (throwback === 2) {
        throwback = "paper"
    } else if (throwback === 3) {
        throwback = "scissors"
    }

    if (choice === "rock") {
        if (throwback == "rock") {
            message.channel.send('I picked rock, which makes it a draw! Try again!')
        } else if (throwback == "paper") {
            message.channel.send('I picked paper, which means I win! Better luck next time!')
        } else if (throwback == "scissors") {
            message.channel.send('I picked scissors, which means you win! Congrats!')
        } else {
            message.channel.send('An error has occurred.')
        }
    } else if (choice === "paper") {
        if (throwback == "rock") {
            message.channel.send('I picked rock, which means you win! Congrats!')
        } else if (throwback == "paper") {
            message.channel.send('I picked paper, which makes it a draw! Try again!')
        } else if (throwback == "scissors") {
            message.channel.send('I picked scissors, which means I win! Better luck next time!')
        } else {
            message.channel.send('An error has occurred.')
        }
    } else if (choice === "scissors") {
        if (throwback == "rock") {
            message.channel.send('I picked rock, which means I win! Better luck next time!')
        } else if (throwback == "paper") {
            message.channel.send('I picked paper, which means you win! Congrats!')
        } else if (throwback == "scissors") {
            message.channel.send('I picked scissors, which makes it a draw! Try again!')
        } else {
            message.channel.send('An error has occurred.')
        }
    } else {
        message.channel.send('Please say rock, paper, or scissors after the command!')
    }

    console.log

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'rps',
    description: 'Play rock paper scissors with gar.net!',
    usage: 'rps [rock, paper, scissors]'
};

//If you have a list with ["rock", "paper", "scissors"], you can find where both players' choices are in the array. If the bot's choice is one more than yours, or the bot's choice is 0 and yours is 2, the bot wins. Vice versa for the player winning. If they're the same, it's a tie. Otherwise the player said something invalid.