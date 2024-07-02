import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function before(m, {conn, participants, groupMetadata}) {

if (!m.messageStubType || !m.isGroup) return !0
const groupName = (await conn.groupMetadata(m.chat)).subject
const groupAdmins = participants.filter((p) => p.admin)
const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png'
const img = await (await fetch(pp)).buffer()
const chat = global.db.data.chats[m.chat]
const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)]
const mentionsContentM = [m.sender, m.messageStubParameters[0]]
const links = linkSity.getRandom()

if (chat.detect2 && m.messageStubType == 29) {
let txt1 = ` [😹◡̈⃝🔪] *بقيت ادمن ابسط*\n\n`
txt1 += ` ابسط بقيت رول [😹◡̈⃝🔪]  : @${m.messageStubParameters[0].split`@`[0]}\n`
txt1 += ` اهوا الي رفعك [😹◡̈⃝🥂] : @${m.sender.split`@`[0]}`

await conn.sendMessage(m.chat, {text: txt1, mentions: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": links, "sourceUrl": links}}})
}

if (chat.detect2 && m.messageStubType == 30) {
let txt2 = ` [😹◡̈⃝🥂] *يعيني مبقتش مشرف*\n\n`
txt2 += `خلاض مبقتش مشرف [😿◡̈⃝😹]: @${m.messageStubParameters[0].split`@`[0]}\n`
txt2 += ` [😹◡̈⃝🔪] الخاين الي نزلك: @${m.sender.split`@`[0]}`

await conn.sendMessage(m.chat, {text: txt2, mentions: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": links, "sourceUrl": links}}})
}}
