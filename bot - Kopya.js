const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;
  if (msg.content.toLowerCase () === 'sa') {
    msg.reply('Aleyküm Selam');
  }
  if (msg.content === 'Selamın Aleyküm') {
    msg.reply('Aleyküm Selam');
  }
  if (msg.content === 'Selamun Aleyküm') {
    msg.reply('Aleyküm Selam');
  }
  if (msg.content === 'Selamün Aleyküm') {
    msg.reply('Aleyküm Selam');
  }
  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content === prefix + 'ping') {
    msg.channel.send('ping değeri: **' + client.ping + '** ms');
  }
  if (msg.content === prefix + 'Selamün Aleyküm') {
    msg.reply('Aleyküm Selam');
  }
  if (msg.content === prefix + 'temizle') {
    msg.channel.bulkDelete(5);
    msg.channel.send("5 mesaj silindi !");
  }
  if (msg.content === prefix + 'reboot') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin!');
    } else {
      msg.channel.send('Emredersiniz efendim. Yeniden başlatılıyorum...').then(msg => {
      console.log('BOT: Bot yeniden başlıyor...');
      process.exit(0);
    })
   }
  }
});

client.login(ayarlar.token);
