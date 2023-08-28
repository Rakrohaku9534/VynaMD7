/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn }) => {
  let image = 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/IMG_20230609_231723.jpg';
  let description = `Thank you for donating support to the Ayaka bot. Your contribution means a lot to us to continue to improve the quality of the services we provide. We really appreciate your help. Thank You!\n\n• *Dana* : 082161429908\n• *Pulsa* : 08522540804\n• *Pulsa* : 082161429908`;

  conn.sendFile(m.chat, image, 'donation.jpg', description, m);
};

handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^(donasi|donate)$/i;

module.exports = handler;