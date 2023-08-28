let levelling = require('../lib/levelling')

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup) return true

    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

    if (before !== user.level) {
      let reply = `Congratulations, you have leveled up!\n\n*[ ${before} ]* ➠ [ ${user.level} ]\n\nUse *.profile* to check`
      m.reply(reply)
      console.log(reply)
    }
  }
}