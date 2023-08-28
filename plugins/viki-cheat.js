/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat !*`, m)
        global.db.data.users[m.sender].balance = 9999999999999999999
        global.db.data.users[m.sender].limit = 9999999999999999999
        global.db.data.users[m.sender].level = 9999999999999999999
        global.db.data.users[m.sender].exp = 9999999999999999999
        global.db.data.users[m.sender].sampah = 9999999999999999999
        global.db.data.users[m.sender].potion = 9999999999999999999
        global.db.data.users[m.sender].common = 9999999999999999999
        global.db.data.users[m.sender].uncommon = 9999999999999999999
        global.db.data.users[m.sender].mythic = 9999999999999999999
        global.db.data.users[m.sender].legendary = 9999999999999999999
        global.db.data.users[m.sender].potion =  999999999999999999
}
handler.command = /^(iyan)$/i
handler.owner = true

module.exports = handler