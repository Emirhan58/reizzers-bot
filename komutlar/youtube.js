const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  message.channel.send('https://www.youtube.com/channel/UCYqRDMRZJayRnejdFAsdwlw/featured?view_as=subscriber');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yutub'],
  permLevel: 4
};

exports.help = {
  name: 'youtube',
  description: 'Yapımcının youtube linkini veir.',
  usage: 'youtube'
};
