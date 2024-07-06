import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0

let nombre = 'ₛₐfᵣₒₜ bₒₜ'
let nombre2 = '𝙏𝙝𝙚𝙎𝙖𝙛𝙧𝙤𝙩𝘽𝙤𝙩' 
const s = [
'https://telegra.ph/file/89e26986fe95e591d09f7.jpg',
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.customPrefix = /بوت مين ده|مين الي عامل البوت ده/i 
handler.command = new RegExp
handler.exp = 50
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0

let nombre = 'ₛₐfᵣₒₜ bₒₜ'
let nombre2 = '𝙏𝙝𝙚𝙎𝙖𝙛𝙧𝙤𝙩𝘽𝙤𝙩' 
const s = [
'https://telegra.ph/file/d8b0cf44e27b876a39379.jpg',
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.customPrefix = /صباح الخير|صباح العسل|صباح الفلi 
handler.command = new RegExp
handler.exp = 50
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
