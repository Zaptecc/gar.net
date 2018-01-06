function sleep(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
    })
  }

exports.run = async(bot, message, args, permLevel) => {

        let choice = args[0]
        let throwback = Math.floor(Math.random() * 3) + 1
    
        const scissors_right = bot.emojis.get('385093082040893462')
        const scissors_left = bot.emojis.get('385093081873252354')
        const rock_right = bot.emojis.get('385093082129104896')
        const rock_left = bot.emojis.get('385093082082967552')
        const paper_right = bot.emojis.get('385093082078642176')
        const paper_left = bot.emojis.get('385093082053476352')
        const invisible = bot.emojis.get('385123993889406978')

        if (throwback === 1) {
            throwback = "rock"
        } else if (throwback === 2) {
            throwback = "paper"
        } else if (throwback === 3) {
            throwback = "scissors"
        }

        if (choice === "rock") {
            if (throwback == "rock") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n ${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                message.channel.send('I picked rock, which makes it a draw! Try again!')
            } else if (throwback == "paper") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n ${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${paper_right}`);
                message.channel.send('I picked paper, which means I win! Better luck next time!')
            } else if (throwback == "scissors") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${scissors_right}`);
                message.channel.send('I picked scissors, which means you win! Congrats!')
            } else {
                message.channel.send('An error has occurred.')
            }
        } else if (choice === "paper") {
            if (throwback == "rock") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${paper_left} ${invisible} ${invisible} ${rock_right}`);
                message.channel.send('I picked rock, which means you win! Congrats!')
            } else if (throwback == "paper") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${paper_left} ${invisible} ${invisible} ${paper_right}`);
                message.channel.send('I picked paper, which makes it a draw! Try again!')
            } else if (throwback == "scissors") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${paper_left} ${invisible} ${invisible} ${scissors_right}`);
                message.channel.send('I picked scissors, which means I win! Better luck next time!')
            } else {
                message.channel.send('An error has occurred.')
            }
        } else if (choice === "scissors") {
            if (throwback == "rock") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${scissors_left} ${invisible} ${invisible} ${rock_right}`);
                message.channel.send('I picked rock, which means I win! Better luck next time!')
            } else if (throwback == "paper") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${scissors_left} ${invisible} ${invisible} ${paper_right}`);
                message.channel.send('I picked paper, which means you win! Congrats!')
            } else if (throwback == "scissors") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${scissors_left} ${invisible} ${invisible} ${scissors_right}`);
                message.channel.send('I picked scissors, which makes it a draw! Try again!')
            } else {
                message.channel.send('An error has occurred.')
            }
        } else if (choice === '✂'){
            if (throwback == "rock") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${scissors_left} ${invisible} ${invisible} ${rock_right}`);
                message.channel.send('I picked rock, which means I win! Better luck next time!')
            } else if (throwback == "paper") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${scissors_left} ${invisible} ${invisible} ${paper_right}`);
                message.channel.send('I picked paper, which means you win! Congrats!')
            } else if (throwback == "scissors") {
                sentMessage = await message.channel.send(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500);
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${rock_left} ${invisible} ${invisible} ${rock_right}`);
                await sleep(500)
                await sentMessage.edit(`${rock_left} ${invisible} ${invisible} ${rock_right}\n${invisible} ${invisible} ${invisible} ${invisible}`);
                await sleep(500)
                await sentMessage.edit(`${invisible} ${invisible} ${invisible} ${invisible}\n${scissors_left} ${invisible} ${invisible} ${scissors_right}`);
                message.channel.send('I picked scissors, which makes it a draw! Try again!')
            } else {
                message.channel.send('An error has occurred.')
            }
        } else if (choice === 'jayce'){
            message.channel.send('❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤\nInstant win because Jayce is just so amazing!\n❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤')
        } else if (choice === 'Jayce'){
            message.channel.send('❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤\nInstant win because Jayce is just so amazing!\n❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤')
        } else if (choice === 'JAYCE'){
            message.channel.send('❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤\nInstant win because Jayce is just so amazing!\n❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤')            
        } else if (choice === '<@!226999841358610432>'){
            message.channel.send('❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤\nInstant win because Jayce is just so amazing!\n❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤')
        } else {
            message.channel.send('Please say \'rock\', \'paper\', or \'scissors\' after the command!')
        }

      }

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

//If you have a list with ["rock", "paper", "scissors"], you can find where both players' choices are in the array.
//If the bot's choice is one more than yours, or the bot's choice is 0 and yours is 2, the bot wins.
//Vice versa for the player winning. If they're the same, it's a tie. Otherwise the player said something invalid.