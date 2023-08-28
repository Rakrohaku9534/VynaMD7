/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fetch = require('node-fetch');
const uploadImage = require('../lib/uploadImage');

const API_KEY = 'sk_gQpbwHIo1zAUqiQG';

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)/.test(mime)

  let waitMessage = await m.reply('Wait a moment...');

  let link = await uploadImage(media)

  let api = `https://api.short.io/links`;
  let data = {
    domain: 'link.sazumiviki.me',
    originalURL: link,
    redirectType: 302 
  };
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': API_KEY
    },
    body: JSON.stringify(data)
  };
  let response = await fetch(api, options);
  let result = await response.json();
  console.log(result);

  if (result.secureShortURL) {
    let shortLink = result.secureShortURL;
    await m.reply(`${shortLink}
${media.length} Byte(s)
${isTele ? '(🐱 No Expiration Date)' : '(Not known)'}`);
  } else {
    throw `Failed to shorten URL. Response: ${JSON.stringify(result)}`;
  }

  if (waitMessage) {
    await waitMessage.delete();
  }
}

handler.help = ['tourl'];
handler.tags = ['tools'];
handler.command = /^(upload|tourl)$/i;

module.exports = handler;