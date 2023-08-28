/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn }) => {
  let thanksWords = ['terima kasih', 'thanks', 'makasi', 'makasih', 'thank you', 'tq', 'ty']
  let isThanks = false
  thanksWords.forEach((thanksWord) => {
    if (m.text.toLowerCase().includes(thanksWord)) {
      isThanks = true
    }
  })
  if (isThanks) {
    let replyMessage = "You're welcome!"
    m.reply(replyMessage)
  }
}

handler.customPrefix = /^((thanks?|makasi|makasih|hatur nuhun|terima kasih|thank you|tq|ty)(\s|$))/i
handler.command = new RegExp
module.exports = handler

