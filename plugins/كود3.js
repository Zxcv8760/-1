import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "┏━━⊜   *_✓◡̈⃝🔃✠━━│قسم الـتحـويل│━━✠◡̈⃝🔃✓_*
┇≡ *◡̈⃝🧸📌 ⁩ تفضل القائمة يا*  : *${taguser}*
┇≡ *◡̈⃝📝📌قبل كتابة اي امر حط (.)*
┇≡ *◡̈⃝⌚📌وقـت الـتـشـغـيـل ${uptime}
┇≡ *◡̈⃝⏳📌الـتـوقـيـت ${date}
┇≡ *◡̈⃝🕊📌عـدد الـمـسـتـخـدمـيـن ${rtotalreg}
┇≡ *◡̈⃝🧚🏻‍♀️📌 اسـم الـبوت : بوت سفروت🧸💜*
┇≡ *◡̈⃝⚙️📌 الـمنـصه  GitHub*
┗━━━━━━━━━━⬣

*🧸◡̈⃝💜⤺┇❯ هلا اذا اردت الوصول اللي الاوامر مره واحده كامله ارسل*

*🧸◡̈⃝💜⤺┇❯ المهام*

⋄━───═◞⬪قوانين⬪◟═───━⋄
*🧸◡̈⃝💜⤺┇❯ ممنوع سب البوت لانك سبيت البوت = سبيت المطور*
*🧸◡̈⃝💜⤺┇❯ تمتع بالبوت ولا تكتر اسبام للبوت اذا كان لديك مشكله او تريد اضافه اوامر اخري جديده تواصل مع المطور*
*🧸◡̈⃝💜⤺┇❯ المطور wa.me/201115618853*
*┛━ ╼━━━╃⌬〔 ♯ЅᗩFᏒOT꙯〕⌬╄━━━╾ ━┗*
*‏
‬`."
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "بوت سفروت"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "بوت سفروت",
            subtitle: "بوت سفروت",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"title\",\"sections\":[{\"title\":\"title\",\"highlight_label\":\"label\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"quick_reply\",\"id\":\"message\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_call",
                 "buttonParamsJson": "{\"display_text\":\"call\",\"id\":\"message\"}"
              },
              {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}"
              },
              {
                 "name": "cta_reminder",
                 "buttonParamsJson": "{\"display_text\":\"cta_reminder\",\"id\":\"message\"}"
              },
              {
                 "name": "cta_cancel_reminder",
                 "buttonParamsJson": "{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}"
              },
              {
                 "name": "address_message",
                 "buttonParamsJson": "{\"display_text\":\"address_message\",\"id\":\"message\"}"
              },
              {
                 "name": "send_location",
                 "buttonParamsJson": ""
              }
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(no)$/i

export default handler
