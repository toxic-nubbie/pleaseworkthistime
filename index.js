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
    
       if(message.content === `hi`) {
        message.reply('Hello')
    } else if(message.content === 'Hi') {
        message.reply('Hello')
    } else if(message.content === 'helo') {
        message.reply('Helo') 
    } else if(message.content === 'hola') {
        message.reply('Hola')
    } else if(message.content === 'fuck') {
        message.reply('No bad words usage')
        message.delete()
    }

    if(message.content === 'welcomemsg') {
       const embed = new Discord.MessageEmbed()
       .setTitle("__**Welcome To The Squad!**__")
       .setDescription("**You need to be verified and for that type: ``i agree``**")
        message.channel.send(embed)
    }

    if(message.content === 'plz') {
        message.react("🥺")
        message.channel.send("🥺")
        message.channel.send("Please...")
    }

    if(message.content === 'please') {
        message.react("🥺")
        message.channel.send("🥺")
        message.channel.send("Please...")
    }

    
});

client.login(process.env.token)
