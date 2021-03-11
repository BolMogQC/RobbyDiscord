require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client(); // Bot object
const PREFIX = "$";

client.on('ready', () => {
    console.log(`-- Bip bop! ${client.user.username} has logged in! --`);
})

client.on('message', (message) => { // If someone writes a message on server
    if(!message.author.bot) { // Checks if author of message is not a bot
        if(message.content.startsWith(PREFIX)) { // Checks if message starts with command prefix
            const [CMD_NAME, ...args] = message.content // Decompose command name and his args
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);

            if(CMD_NAME === 'kick') { 
                if(message.member.roles )
                if(args.length > 0 && args.length < 2) {
                    const member = message.guild.members.cache.get(args[0])
                }
                else {

                }
            }
        }
    }
})


client.login(process.env.ROBBY_TOKEN); // Login bot to server


