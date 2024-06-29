import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/73ef7488ba7f7f3e613ee.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `       
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*♯ЅᗩFᏒOT꙯ 🧚‍♂️📌*'
            },
            body: {
              text: 'نورت قسم الاوامر بلازرار🕊💜'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '◡̈⃝| قائـمـة📰الاوامـر|◡̈⃝',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'yas',
                        rows: [
                          {
                            header: '◡̈⃝˼‏📖˹ ━━|قسم الادمن│━━˼‏📖˹◡̈⃝',
                            title: '',
                            description: '😴 َِ🖤 َِ🖤ۥَِ!))‼...۽قسہًٍۦـۥـِمٛ ٱلٱډـۥـِمٛن',
                            id: '.سفروت1'
                          },
                          {
                            header: '🚻 ◡̈⃝☠︎︎━━ |قسم الاعضاء│━━☠︎︎🚻 ◡̈⃝‎',
                            title: '',
                            description: '😴 َِ🖤 َِ🖤ۥَِ!))‼...۽قشہًٍۦـۥـِمٛ ٱلٱعـضٱﺂء',
                            id: '.سفروت2'
                          },
                          {
                            header: '🂱◡̈⃝📿━━│قسم الديني│━━◡̈⃝🂱📿',
                            title: '',
                            description: '🙂َِ💔 َِ🍃 ۥَِ!))‼...۽قسہًٍۦــۥـِمٛ ٱﺂلډين',
                            id: '.سفروت3'
                          },
                          {
                            header: '◡̈⃝˼‏🏌˹ ━━|قسم الترفيه│━━˼‏🕺🏻˹◡̈⃝',
                            title: '',
                            description: '🚶🏻َِ💔 َِ💔 ۥَِ!))‼...۽قسہًٍۦـۥـِمٛ ٱﺂلټ̸ـﺮفيهه',
                            id: '.سفروت4'
                          },
                          {
                            header: '⬇️◡̈⃝ ━━│ قسم التحميل │━━◡̈⃝⬇️',
                            title: '',
                            description: '😽 َِ♥ َِ🤞ۥَِ،!))‼...۽قسہًٍۦــِمٛ ٱﺂلټحٍَـمَِـۥيل',
                            id: '.سفروت5'
                          }, 
                          {
                            header: '◡̈⃝🔃✠━━│قسم الـتحـويل│━━✠◡̈⃝🔃',
                            title: '',
                            description: '🙂َِ💔 َِ🍃 ۥَِ!))‼...۽قسہًٍۦــِمٛ ٱﺂلټحٍَـح̸ـويل',
                            id: '.سفروت6'
                          },
                            {
                            header: '◡̈⃝💆🏻❏━━│قسم الايدت│━━❏◡̈⃝💆🏻',
                            title: '',
                            description: '😴 َِ🖤 َِ🖤ۥَِ!))‼...۽قسہًٍۦـۥـِمٛ ٱﺂلٱډيډټ',
                            id: '.سفروت7'
                          },
                            {
                            header: '◡̈⃝🏦❏━━│قسم البنك│━━❏◡̈⃝🏦',
                            title: '',
                            description: '؍.َِ🙂 َِ💔 َِ👏ۥَِ،!))‼...۽قـسہًٍۦــِمٛ ٱﺂلبنڪ',
                            id: 'سفروت8'
                          },
                            {
                            header: '◡̈⃝🤴🏻❏━━│قسم المطوࢪ│━━❏◡̈⃝🧏🏻',
                            title: '',
                            description: 'قسہًٍۦـۥـِمٛ ٱﺂلـۥـِمٛطـﺮ🧸 َِ☹ َِ❤ۥَ!))‼...۽',
                            id: '.سفروت9'
                          },
                            {
                            header: '◡̈⃝🤴🏻❏━━│ المطوࢪ│━━❏◡̈⃝🧏🏻',
                            title: '',
                            description: 'ألمطـــﯡـــࢪ َِ💜.؟ۥَ!))‼...۽',
                            id: '.المطور'
                          },
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

‬`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = /^(help|الاوامر|menu|أوامر|menu|اوامر)$/i

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
      ‏
