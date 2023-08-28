
global.owner = ['6285786539008']  
global.mods = ['6285786539008'] 
global.prems = ['6285786539008']

global.nameowner = 'Fahrul'
global.numberowner = '6285786539008' 
global.mail = 'rakrohaku@gmail.com'
global.dana = '6285786539008'
global.pulsa = '6285786539008'
global.gopay = '6285786539008'

global.namebot = 'F.A BOTZ MD'
global.gc = 'https://chat.whatsapp.com/FSbrP6LWWm4A8i8uGdyDTs'
global.web = 'https://shoplinks.to/Fahrul'
global.instagram = 'https://instagram.com/fahrul_mt'

global.lolkey = 'ayakaviki'
global.rose = 'Rs-lojembot';
global.zenzkey = 'BagasPrdn'
global.btc = 'Admin'
global.wm = 'F.A BOTZ MD'
global.watermark = wm
global.wm2 = 'IG : fahrul_mt.'
global.wm3 = 'F.A BOTZ MD'
global.wm4 = 'F.A BOTZ MD'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = '*Loading...*'
global.eror = 'Server Error'
global.rose = 'Rs-AgesuXD'
global.benar = 'Benar\n'
global.salah = 'Salah\n'
global.sourceUrl = "https://instagram.com/fahrul_mt"

global.stiker_wait = 'bentar beib..'
global.packname = '❏ sticker di buat oleh F.A BOTZ MD'
global.author = '© fahrul\n'

global.APIs = { 
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://api.botcahx.live',
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // Tambahkan Apikey nya disini

  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.botcahx.live': 'QaepQXxR',
  'https://api.lolhuman.xyz': 'ayakaviki',
}

/*Yang Ini Untuk Setting Rpg Game Yah Kak*/
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Yang Ini Jangan Di Ubah Yah Kak*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

