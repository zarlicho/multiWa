const fs = require("fs")
const { Client, LegacySessionAuth, LocalAuth, MessageMedia} = require('whatsapp-web.js');

function AutoChat(clinet, msg){
  const clinetCount = clinet;
  const devices = [];
  
  for (let i = 0; i < clinetCount; i++){
      var client = new Client({
           authStrategy: new LocalAuth({
                clientId: `client-${i}`,
              }),
              puppeteer:{
                  headless: true
              }
      })
      client.on('ready', () => {
          console.log(`client-${i} ready to message`)
          devices.push(client);
      });
      client.on('message', message => {
          fs.readFile("numberData.txt", 'utf-8', (err, data) => {
              if (err) {
                console.log(err);
                return;
              }
              const dataArray = data.split('\n');
              if (dataArray.includes(message.from.split("@c.us")[0])) {
                  console.log(`${message.from} nomor ditemukan!`);
                  const delaySeconds = Math.floor(Math.random() * 10) + 1;
                  console.log(`Delaying response for ${delaySeconds} seconds...`);
                  setTimeout(() => {
                      console.log(`Replying to ${message.from} after delay...`);
                      message.reply(msg);
                  }, delaySeconds * 1000);
              } else {
                console.log(`${message.from} nomor tidak ditemukan!`);
              }
            });
      });
      client.initialize().then(() => devices.push(client));
  }
}

module.exports = {AutoChat};