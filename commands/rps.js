function sleep(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
    })
  }

exports.run = async(bot, message, args, permLevel) => {

        let choice = args[0]
        let throwback = Math.floor(Math.random() * 3) + 1
    
        const scissors_right = bot.emojis.cache.get('424769083335245833')
        const scissors_left = bot.emojis.cache.get('424769075894550538')
        const rock_right = bot.emojis.cache.get('424769065928884225')
        const rock_left = bot.emojis.cache.get('424769056797622282')
        const paper_right = bot.emojis.cache.get('424769046848864298')
        const paper_left = bot.emojis.cache.get('424769033922150400')
        const invisible = bot.emojis.cache.get('424769091790962688')

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
        } else {
            message.channel.send('Please say \'rock\', \'paper\', or \'scissors\' after the command!')
        }

      }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rockpaperscissors', 'throw'],
    permLevel: 0
};

exports.help = {
    name: 'rps',
    description: 'Play rock paper scissors with gar.net!',
    usage: 'rps [rock, paper, scissors]'
};