//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['201153408550']
global.premium = ['201153408550']
global.ownernomer = '201153408550'
global.ownername = '( الـمـطـور )'
global.botname = '( بـوت أيانو )'
global.footer = '( أيانو )'
global.ig = 'https://github.com/nexusNw'
global.region = 'USA, North America, Ohayo'
global.sc = 'https://chat.whatsapp.com/CKLmAGJo3iw5AvNM1KZee3'
global.myweb = 'https://youtube.com/channel/UCPvrnWknQrgCSIeobXMP0Uw'
global.packname = (『⚡️𝐻𝑖𝑘𝑎𝑟𝑖 𓆩💫𓆪𝐷𝑎𝑤𝑛⚡』)حقوق أيانو + نقابة 
global.author = '[ غـوجـو ]'
global.sessionName = 'session'
global.prefa = ['','!'😂'🥀','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓',
    admin: '*「  هـذا الامـر فـقـط لـ المـشـرفـيـن  مثل أيانو 👑 」◣*',
    botAdmin: '*「 اعـطـنـي إشـراف لـتـفـعـيـل  الامـرك سيدي. 」◣*',
    owner: '*「 هـذا الامـر فـقـط لـ الـمـالـك ايانوكوجي 」◣*',
    group: '*「 هـذا الامـر فـي الـمـجـمـوعـات فـقـط 」◣*',
    private: '*「 هـذا الامـر فـي الـخـاص فـقـط 」◣*',
    bot: '*「 هـذا الامـر مـخـصـص لـ الـبـوت ايانو 」◣*',
    wait: '*「 انـتـظـر مـن فـضـلـك سيدي/سيدتي 」◣*',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 1000 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
