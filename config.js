import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['+963953365082', '𝑀𝐴𝐾𝐼🍷', true],
  ['+201002163636', '𝐻𝐼𝑁𝐴𝑇𝐴❄', true], 
  [''] 
] //Number of owners

global.mods = ['+201002163636','+963953365082' ] 
global.prems = ['+963953365082', '+963953365082', '+963953365082']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '〔 𝑌𝑂𝑁𝐴﹝❄️﹞𝐵𝑂𝑇 〕'
global.premium = 'true'
global.packname = '𝑀𝐴𝐾𝐼🍷' 
global.author = '@𝐻𝐼𝑁𝐴𝑇𝐴❄' 
global.igfg = '▢ Follow on Instagram\nhttps:𝑆𝐴𝑅𝐴𝐻_𝑀𝑁_9' 
global.dygp = 'https://chat.whatsapp.com/BibVE6tUICp3qOm2a1Ur8f'
global.fgsc = 'https://github.com/Guru322/GURU-BOT-V1' 
global.fgyt = 'https://youtube.com/@Asliguru'
global.fgpyp = 'https://youtube.com/@Asliguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.dbase = 'mongodb+srv://guru:guru@cluster0.qpggl6x.mongodb.net/?retryWrites=true&w=majority' //ADD YOUR MONGODB BY CHANGIMG IT

global.wait = '*⚙️ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⚙️'
global.dmoji = '🤨'
global.done = '✅'
global.error = '❗' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
import { watchFile, unwatchFile } from 'fs'

import chalk from 'chalk'

import { fileURLToPath } from 'url'

import fs from 'fs'

import fetch from 'node-fetch'

import axios from 'axios'

global.owner = [

  ['+963953365082', '𝑀𝐴𝐾𝐼🍷', true]

 

] //Number of owners

global.mods = ['+963953365082'] 

global.prems = ['+963953365082']

global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']

global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]

global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']

global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]

global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']

global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]

global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix

  // name: 'https://website'

  xteam: 'https://api.xteam.xyz', 

  dzx: 'https://api.dhamzxploit.my.id',

  lol: 'https://api.lolhuman.xyz',

  violetics: 'https://violetics.pw',

  neoxr: 'https://api.neoxr.my.id',

  zenzapis: 'https://zenzapis.xyz',

  akuari: 'https://api.akuari.my.id',

  akuari2: 'https://apimu.my.id',

  nrtm: 'https://fg-nrtm.ddns.net',

  bg: 'http://bochil.ddns.net',

  fgmods: 'https://api-fgmods.ddns.net'

}

global.APIKeys = { // APIKey Here

  // 'https://website': 'apikey'

  'https://api.xteam.xyz': 'd90a9e986e18778b',

  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',

  'https://api.neoxr.my.id': `${keysneoxr}`,	

  'https://violetics.pw': 'beta',

  'https://zenzapis.xyz': `${keysxxx}`, 

  'https://api-fgmods.ddns.net': 'fg-dylux'

}

// Sticker WM

global.botname = '〔 𝑌𝑂𝑁𝐴﹝❄️﹞𝐵𝑂𝑇 〕'

global.premium = 'true'

global.packname = '𝑀𝐴𝐾𝐼🍷' 

global.author = '@𝐻𝐼𝑁𝐴𝑇𝐴❄' 

global.igfg = '▢ Follow on Instagram\nhttps:𝑆𝐴𝑅𝐴𝐻_𝑀𝑁_9' 

global.dygp = 'https://chat.whatsapp.com/BzJhdxwVlte1unMYgieoYQ'

global.fgsc = 'https://chat.whatsapp.com/BzJhdxwVlte1unMYgieoYQ' 

global.fgyt = 'https://chat.whatsapp.com/BzJhdxwVlte1unMYgieoYQ'

global.fgpyp = 'https://chat.whatsapp.com/BzJhdxwVlte1unMYgieoYQ'

global.fglog = 'https://chat.whatsapp.com/BzJhdxwVlte1unMYgieoYQ' 

global.dbase = 'mongodb+srv://guru:guru@cluster0.qpggl6x.mongodb.net/?retryWrites=true&w=majority' //ADD YOUR MONGODB BY CHANGIMG IT

global.wait = '*⚙️ _Charging..._*\n*▰▰▰▱▱▱▱▱*'

global.rwait = '⚙️'

global.dmoji = '🤨'

global.done = '✅'

global.error = '❗' 

global.xmoji = '🙈' 

global.multiplier = 69 

global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)

watchFile(file, () => {

  unwatchFile(file)

  console.log(chalk.redBright("Update 'config.js'"))

  import(`${file}?update=${Date.now()}`)

})
