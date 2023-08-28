let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (m.text.toLowerCase() === 'p' || m.text.toLowerCase() === 'tes' || m.text.toLowerCase() === 'test') {
    let teks = `👋 Hi, can I help you with anything?`

    m.reply(teks)
  }
}

module.exports = handler
