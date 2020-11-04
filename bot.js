const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Botun olan fuzbot ${client.user.tag} sunucuya giriş yaptı ve aktif!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
      msg.reply('Pong!');
  }
  if (msg.content.toLowerCase() === 'sa') {
      msg.reply('Aleyküm selam, hoşgeldin!');
  }
  if (msg.content.toLowerCase() === 'sunucu') {
      msg.reply('The E-Sports https://discord.gg/2NkGHAn');
  }
  if (msg.content === 'Ördek') {
      msg.reply('VAK VAK!');
  }
  if (msg.content === 'instagram') {
      msg.reply('_db_16');
  }
  if (msg.content === 'Geliştiricim') {
    msg.reply('Geliştiricim, The Fuz.exe!');
  }
  if (msg.content === 'Selamun Aleyküm') {
    msg.reply('Aleyküm selam, hoşgeldin!');
  }
  if (msg.content === 'Merhaba') {
    msg.reply('Merhaba, hoşgeldin!');
  }
  if (!msg.content.startsWith(prefix)) {
    return;
  }
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    msg.reply('Komutlarım!');
    msg.reply('Prefixim >')
    msg.reply('1-ping')
    msg.reply('2-Sa')
    msg.reply('3-Ördek')
    msg.reply('4-instagram')
    msg.reply('5-Geliştiricim')
    msg.reply('6-Merhaba')
    msg.reply('7-Sunucu')
}
   if (msg.content === prefix + 'ping') {
       msg.reply('Pong!');
   }
   if (msg.content.toLowerCase() === prefix + 'sa') {
       msg.reply('Aleyküm selam, hoşgeldin!');
   }
   if (msg.content === prefix + 'Ördek') {
       msg.reply('VAK VAK!');
   }
   if (msg.content === prefix + 'instagram') {
       msg.reply('_db_16');
   }
   if (msg.content === prefix + 'Geliştiricim') {
       msg.reply('Geliştiricim, The Fuz.exe!');
   }
   if (msg.content === prefix + 'Selamun Aleyküm') {
       msg.reply('Aleyküm selam, hoşgeldin!');
   }
   if (msg.content.toLowerCase() === prefix + 'Merhaba') {
       msg.reply('Merhaba, hoşgeldin!');
   }
   if (msg.content.toLowerCase() === prefix + 'sunucu') {
       msg.reply('The E-Sports https://discord.gg/2NkGHAn');
  }

  client.on("ready", async () => {
client.channels.get("736678226411126804").join()
})
});



client.login('NzY4MDQyODA3MjE0MjExMTAy.X46tmg.0EqoMxQDb1aIdbKS-Gthd2Ph_OM');
