const config = require('./config.json');
//const chalk = require('chalk');
const { Discord, Client, Collection, MessageEmbed, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES] });

client.on('ready', () => {
    //console.log(chalk.yellow('Dull:') + chalk.green(' online and no errors detected on startup.'));
    console.log("Dull:" + " is online and no errors have been found");
})

client.login(config.token);