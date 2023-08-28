let handler = async (m, { conn, text, usedPrefix }) => {
    let sender = m.sender
    let name = conn.getName(sender)
    let caption = `🐱 Halo ${name}, You can get the AyakaV2 script via Ayaka's official github

◦ Github: https://github.com/SazumiVicky/AyakaV2
◦ Buy Script Update AyakaV2: https://wa.me/+6286236226786

Question
*What s the difference between paid sc and free ones?*
◦ The difference is that 80% of the scripts are ENC, and it's rare to get updates.

*Where can I buy the AyakaV2 sc update?*
◦ You can buy sc AyakaV2 via telegram or WhatsApp, the official owner of Ayaka.
◦ Telegram: https://t.me/sazumiviki
◦ Whatsapp: https://wa.me/+6285236226786

*How to get AyakaV2 sc update?*
◦ For those who have purchased the AyakaV2 sc, we will add them to a special group.`;

    m.reply(caption);
};

handler.help = ['script', 'sc', 'kode', 'source', 'sourcecode'];
handler.tags = ['tools'];
handler.command = /^(script|sc|kode|source|sourcecode)$/i;
handler.register = true;

module.exports = handler;
