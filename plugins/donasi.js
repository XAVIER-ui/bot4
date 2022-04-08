let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6283181106073
│┝‷✧ *Dana:* 6283181106073
│┝‷✧ *Gopay:* 6283181106073
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6283181106073?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
