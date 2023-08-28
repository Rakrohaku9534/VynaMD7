/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn, args }) => {
  let target = m.mentionedJid[0] || m.sender
  let user = global.db.data.users[target]
  let name = user.name

  let exp = user.exp
  let limit = user.limit
  let balance = user.balance
  let premium = user.premium ? 'Yes' : 'No'

  let caption = `• Balance *${name}*\n\n◦ Exp : *${exp}*\n◦ Limit : *${limit}*\n◦ Balance : *${balance}*\n◦ Premium : *${premium}*`

  conn.reply(m.chat, caption, m, {
    contextInfo: {
      externalAdReply: {
        title: `${global.namebot}`,
        body: "This is your balance information.",
        thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230528_122926.jpg",
        sourceUrl: "https://sazumiviki.me",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}

handler.help = ['balance', 'balance @tag']
handler.tags = ['info']
handler.command = /^balance|my$/i

module.exports = handler