let moment = require('moment-timezone')
let handler = m => m

handler.before = async function(m) {

	if (m.chat.endsWith('broadcast')) return
	if (m.fromMe) return
	if (m.isGroup) return

	let user = global.db.data.users[m.sender]
	let {
		banned
	} = db.data.users[m.chat]
	let username = conn.getName(m.sender)
	if (new Date - user.pc < 86400000) return

	let dann = `Hai ${ucapan()} *${username.replace(/@.+/, '')}* 👋
${banned ? `You have been banned, contact: https://wa.me/+6285786539008` : 'Hi, is there anything Fahrul help with?'}`

	await m.reply(dann)
	user.pc = new Date * 1
}

module.exports = handler

function ucapan() {
	const hour_now = moment.tz('Asia/Jakarta').format('HH')
	var ucapanWaktu = 'Good Morning'
	if (hour_now >= '03' && hour_now <= '10') {
		ucapanWaktu = 'Good Morning'
	} else if (hour_now >= '10' && hour_now <= '15') {
		ucapanWaktu = 'Good Afternoon'
	} else if (hour_now >= '15' && hour_now <= '17') {
		ucapanWaktu = 'Good afternoon'
	} else if (hour_now >= '17' && hour_now <= '18') {
		ucapanWaktu = 'Good afternoon'
	} else if (hour_now >= '18' && hour_now <= '23') {
		ucapanWaktu = 'Good night'
	} else {
		ucapanWaktu = 'Good night'
	}
	return ucapanWaktu
}