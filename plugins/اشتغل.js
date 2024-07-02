const handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false;
    global.db.data.chats[m.chat].welcome = true;
    global.db.data.chats[m.chat].detect = true;
    global.db.data.chats[m.chat].modohorny = true;
    global.db.data.chats[m.chat].server = true;
    global.db.data.chats[m.chat].session = true;

    global.db.data.chats[m.chat].audios = true;
    m.reply('*مرحبا ياصديقي*\n*انا بوت سفروت*\n*تم تشغيل البوت في هذه الدردشه بأمر من المطور😀*\n*يمكنك الان استعمال البوت في الدردشه الخاصه للبوت*\n*✦━━━━━[ 𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃 ]━━━━━✦*');

    };
    handler.help = ['banchat'];
    handler.tags = ['owner'];
    handler.command = /اشتغل$/i;
    handler.rowner = true;
    export default handler;
