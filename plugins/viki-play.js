/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */



const { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper');
const axios = require('axios');

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Example: ${usedPrefix}${command} rewrite the star`;
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let vid = (await youtubeSearch(text)).video[0];
    if (!vid) {
      conn.reply(m.chat, 'Sorry, we could not find the song you were looking for.', m);
      return;
    }
    let { title, thumbnail, videoId, durationH, viewH, publishedTime } = vid;
    const url = 'https://www.youtube.com/watch?v=' + videoId;
    let caption = `• *Title*: ${title}\n• *Duration*: ${durationH}\n• *Views*: ${viewH}\n• *Date*: ${publishedTime}`;
    m.reply(caption);
    const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url));
    const link = await yt.audio['128kbps'].download();
    
    let thumbnailResponse = await axios.get(thumbnail, { responseType: 'arraybuffer' });
    let thumbnailBuffer = Buffer.from(thumbnailResponse.data, 'binary');
    
    let doc = { 
      audio: { 
        url: link 
      }, 
      mimetype: 'audio/mp4', 
      fileName: `${title}.mp3`, 
      contextInfo: { 
        externalAdReply: { 
          showAdAttribution: true,
          mediaType:  2,
          mediaUrl: url,
          title: title,
          thumbnail: thumbnailBuffer
        }
      }
    };
    return conn.sendMessage(m.chat, doc, { quoted: m });
  } catch (error) {
    console.log(error);
    conn.reply(m.chat, '🐱 Sorry, we couldn t find the song you were looking for, please provide a more specific title', m);
  }
};

handler.help = ['play'].map(v => v + ' <pencarian>');
handler.tags = ['premium'];
handler.command = /^play$/i;
handler.exp = 0;
handler.limit = 3
handler.premium = false
module.exports = handler;