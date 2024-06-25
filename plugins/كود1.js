let handler = async (m, { conn, args, usedPrefix, command }) => {      
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*♯ЅᗩFᏒOT꙯ 🧚‍♂️📌*'
            },
            body: {
              text: 'طول مانت قلبك ابيض عشتك هتبقا سوده🧸🖤'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '💜🧸',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'yas',
                        rows: [
                          {
                            header: 'قسم الاوامر🤺🕊',
                            title: '',
                            description: '',
                            id: '.اوامر'
                          },
                          {
                            header: 'رقم المطور🤺🕊',
                            title: '',
                            description: '',
                            id: '.المطور'
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
handler.command = ['سفروت']

export default handler
