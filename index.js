const Discord = require('discord.js');
const client = new discord.Client()
const prefix = "ns."


client.on('message', message => {
    if(message.author.bot) {
    if(message.content === 'ping') {
        message.reply('Pong!')
    } else if(message.content === 'beep') {
        message.reply('Boop!')
    }

    }
});


client.login(process.env.token)
