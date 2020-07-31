const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "ns."

client.once('ready', () => {
    console.log(`logged in as ${client.user.username}`)
    client.user.setActivity('to ns.faq', {type: "LISTENING"})
});

client.on('message', message => {
    if(message.content === `${prefix}ping`) {
        message.reply("Pong!")
    } else if(message.content === `${prefix}beep`) {
        message.reply("Boop!")
    }

    if(message.content === `${prefix}faq`) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Hey ${message.author.username}`)
        .setDescription("My Commands: ``faq`` , ``ping`` , ``beep``")
        message.channel.send(embed)
    }
});

client.login(process.env.token)