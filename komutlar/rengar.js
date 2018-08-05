const Discord = require('discord.js');

exports.run = function(client, message, embed) {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "RENGAR",
      icon_url: 'https://runes.lol/image/generated/championtiles/Rengar.jpg'
    },
    title: "Tek atan canavar!",
    description: "Suikastçi sınıfının atası olan Rengar yok etmek için doğdu!",
    fields: [{
        name: "Görünümü",
        value: "Tek gözü ve tek hançeri var gözünü Kha Zix'in kalleş pususu sırasında kaybetti."
      },
      {
        name: "Nasıl saldırılarından kurtulunur?",
        value: "Ulti açtığında takımızın yanında kalın yoksa sizi sürüden ayrılmış bir kuzu olarak görür ve sizi kurt gibi avlar."
      },
      {
        name: "Bu şampiyonla nasıl tek atılır?",
        value: "Biz size ne kadar öğretsekte asla LM ZEUS gibi tek atamazsınız."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Emirhan KAYA"
    }
  }
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rengar',
  description: 'rengar hakkında bilgi verir',
  usage: 'rengar'
};
