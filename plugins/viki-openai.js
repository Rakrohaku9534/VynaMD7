/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */

let axios = require('axios')

let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example:* .ai how to get a girlfriend'

  conn.chatRead(m.chat)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })

  try {
    const response = await axios.post(`https://api.itsrose.life/chatGPT/turbo?apikey=${global.rose}`, {
      "model": "gpt-4",
      "temperature": 0,
      "stop": "string",
      "max_tokens": 200,
      "presence_penalty": 0,
      "frequency_penalty": 0,
      "messages": [
        {
          "role": "user",
          "content": text
        }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/event-stream'
      }
    })

    if (response.status == 200) {
      let message = response.data.result.messages
      let content = message.content
      let reply = `${content}`
      m.reply(reply)
    } else {
      m.reply('Sorry, I couldn\'t process your request.')
    }

  } catch (error) {
    console.log(error)
    m.reply('Sorry, I couldn\'t process your request.')
  }
}

handler.command = /^ai$/i
handler.help = ['ai <text>']
handler.tags = ['tools']
handler.register = true
handler.limit = true

module.exports = handler