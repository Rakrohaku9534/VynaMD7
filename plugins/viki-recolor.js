/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const axios = require('axios');
const uploadImage = require('../lib/uploadImage');

let handler = async (m, {
	conn,
	command
}) => {
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || '';
	if (/image/.test(mime)) {
		let img = await q.download();
		let imageUrl = await uploadImage(img);
		try {
			let api = `https://api.neoxr.my.id/api/recolor?image=${encodeURIComponent(imageUrl)}&apikey=lucycat`;

			conn.chatRead(m.chat)
			conn.sendMessage(m.chat, {
				react: {
					text: '🕒',
					key: m.key,
				}
			})

			let {
				data
			} = await axios.get(api);
			let recoloredImageUrl = data.data.url;
			conn.sendFile(m.chat, recoloredImageUrl, 'recolor.jpg', '🐱 Here is the recolored image:', m);
		} catch (e) {
			console.log(e);
			conn.reply(m.chat, 'Error!', m);
		}
	} else {
		conn.reply(m.chat, '🐱 Please reply to the image', m);
	}
}

handler.command = /^(recolor|warnain)$/i;
handler.tags = ['tools'];
handler.help = ['recolor', 'warnain'];
handler.premium = false;

module.exports = handler;