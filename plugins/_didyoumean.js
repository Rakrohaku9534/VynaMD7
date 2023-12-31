let didyoumean = require('didyoumean');
let similarity = require('similarity');

let handler = m => m;

handler.before = function (m, { match, usedPrefix }) {
  if ((usedPrefix = (match[0] || '')[0])) {
    let noPrefix = m.text.replace(usedPrefix, '').trim();
    let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1);
    let mean = didyoumean(noPrefix, alias);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);

    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
      let response = `• Are you looking for the following menu?\n\n◦ Menu name: *${usedPrefix + mean}*\n◦ Similar results: *${similarityPercentage}%*`;

      this.reply(m.chat, response, m, {
        contextInfo: {
          externalAdReply: {
            title: 'VynaaMD🦄',
            body: 'Are you looking for the following menu',
            thumbnailUrl: 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230606_214143.jpg',
            sourceUrl: 'https://instagram.com/sune-ian',
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      });
    }
  }
}

module.exports = handler;