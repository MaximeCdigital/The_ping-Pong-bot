const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on('message', message => {
    if (message.content === 'Ping') {
        message.channel.send('Pong !')
    }
})

client.login('ODM2MjI4NDI2MDI1MjcxMzA2.YIa8aQ.jCb4bBHixkP-bsUQvPu2mepJ6xo')