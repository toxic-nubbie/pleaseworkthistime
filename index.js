const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "ns."

const db = require('better-sqlite3')('foobar.db', options);
 
const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
console.log(row.firstName, row.lastName, row.email);

const Enmap = require("enmap");
client.points = new Enmap({name: "points"});


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
    } else if(message.content === 'saale') {
       message.reply('No bad words usage')
       message.delete()
    }

    if(message.content === 'welcomemsg') {
       const embed = new Discord.MessageEmbed()
       .setTitle("__**Welcome To The Squad!**__")
       .setDescription("**\n\nYou need to be verified and for that type: ``i agree``**")
       .setThumbnail('https://media.discordapp.net/attachments/739135388236644403/739406970343260250/NoobSquad1.png?width=169&height=169')
       message.channel.send('https://tenor.com/view/dancing-youre-welcome-welcome-gif-13987792') 
       message.channel.send(embed)
    } 
    
    if(message.content === 'squadjoinmsg') {
       const embed = new Discord.MessageEmbed()
        .setTitle('Hey verified user')
        .setDescription("confused that what this is for? when you are already verified?\ndon't worry this is just for joining the squad and the fun, and its fully free and react with the one below and then again remove reacion to confirm!")
        .setThumbnail('https://media.discordapp.net/attachments/739135388236644403/739406970343260250/NoobSquad1.png?width=169&height=169')
        .setFooter('made by SquidBrain')
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

client.on("message", message => {
  // As usual, ignore all bots.
  if (message.author.bot) return;
  
  // If this is not in a DM, execute the points code.
  if (message.guild) {
    // We'll use the key often enough that simplifying it is worth the trouble.
    const key = `${message.guild.id}-${message.author.id}`;

    // Triggers on new users we haven't seen before.
    client.points.ensure(`${message.guild.id}-${message.author.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });
    
    client.points.inc(key, "points");
    
    // Calculate the user's current level
    const curLevel = Math.floor(0.1 * Math.sqrt(client.points.get(key, "points")));
    
    // Act upon level up by sending a message and updating the user's level in enmap.
    if (client.points.get(key, "level") < curLevel) {
      message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
      client.points.set(key, curLevel, "level");
    }
  }
  
      if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

   if (command === "points") {
    const key = `${message.guild.id}-${message.author.id}`;
    return message.channel.send(`You currently have ${client.points.get(key, "points")} points, and are level ${client.points.get(key, "level")}!`);
  }    
});

client.login(process.env.token)
