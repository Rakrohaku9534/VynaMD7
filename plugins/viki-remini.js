/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const axios = require('axios');
const uploadImage = require('../lib/uploadImage');

let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (/image/.test(mime)) {
    let img = await q.download();
    let imageUrl = await uploadImage(img);
    let api = `https://api.neoxr.my.id/api/remini?image=${encodeURIComponent(imageUrl)}&apikey=lucycat`;

    conn.chatRead(m.chat)
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });

    try {
      let { data } = await axios.get(api);
      let resultURL = data.data.url;

      let resultImage = await axios.get(resultURL, {
        responseType: 'arraybuffer'
      });
      let contentType = resultImage.headers['content-type'];

      await conn.sendFile(m.chat, Buffer.from(resultImage.data, 'binary'), 'remini.jpg', '🐱 Here are Remini results:', m, false, {
        mimetype: contentType
      });
    } catch (error) {
      console.log(error);
      m.reply('There was an error!');
    }
  } else {
    m.reply('🐱 Please reply to an image with the caption `.remini`');
  }
};

handler.command = /^remini$/i;
handler.tags = ['tools'];
handler.help = ['remini'];
handler.premium = true;

module.exports = handler;