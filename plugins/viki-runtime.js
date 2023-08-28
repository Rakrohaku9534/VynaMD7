let handler = async (m, { conn }) => {
  let uptime = process.uptime();
  let hari = Math.floor(uptime / 86400);
  uptime %= 86400;
  let jam = Math.floor(uptime / 3600);
  uptime %= 3600;
  let menit = Math.floor(uptime / 60);
  let detik = Math.floor(uptime % 60);
  let caption = `🐱 Yuki bot online Selama *${hari} Hari, ${jam} jam, ${menit} menit, ${detik} detik*`;

  m.reply(caption);
};

handler.help = ['runtime'];
handler.tags = ['info'];
handler.command = /^runtime|onbot$/i;
handler.limit = false;
handler.group = false;
module.exports = handler;
