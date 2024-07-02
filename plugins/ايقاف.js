const handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = true;
    global.db.data.chats[m.chat].welcome = false;
    global.db.data.chats[m.chat].detect = false;
    global.db.data.chats[m.chat].modohorny = false;
    global.db.data.chats[m.chat].server = false;
    global.db.data.chats[m.chat].session = false;

    global.db.data.chats[m.chat].audios = false;
    m.reply('*يبدو انك استعملت البوت بدون اذن*\n> *لقد تم ايقاف استعمال البوت في هذه الدردشه*\n*سفروت🕊*');
    };
    handler.help = ['banchat'];
    handler.tags = ['owner'];
    handler.command = /ايقاف$/i;
    handler.rowner = true;
    export default handler;
