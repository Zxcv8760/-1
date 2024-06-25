let handler = async (m, { conn, args, usedPrefix, command }) => {      
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
                            description: '',
                            id: '.قسم1'
                          },
                          {
                            header: '🚻 ◡̈⃝☠︎︎━━ |قسم الاعضاء│━━☠︎︎🚻 ◡̈⃝‎',
                            title: '',
                            description: '',
                            id: '.قسم2'
                          },
                          {
                            header: '🂱◡̈⃝📿━━│قسم الديني│━━◡̈⃝🂱📿',
                            title: '',
                            description: '',
                            id: '.قسم3'
                          },
                          {
                            header: '◡̈⃝˼‏🏌˹ ━━|قسم الترفيه│━━˼‏🕺🏻˹◡̈⃝',
                            title: '',
                            description: '',
                            id: '.قسم4'
                          },
                          {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          }, 
                          {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          },
                            {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          },
                            {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          },
                            {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          },
                            {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
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

handler.help = ['info']
handler.tags = ['main']
handler.command = ['no']

export default handler
