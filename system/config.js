import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

// Setting
global.setting = {
    autoclear: false,
    addReply: true
}

// Owner
global.owner = [
    ['62882007197249', 'Ayano', true]
]

// Info
global.info = {
    pairingNumber: '6285184754171', // Please fill your number starting with your country code, example: '6282148864989'
    namaowner: 'Ayano',
    nomorowner: '62882007197249',
    packname: '',
    author: '',
    namabot: 'Mikami',
    wm: '',
    stickpack: 'Created by',
    stickauth: 'Mikami'
}

// Thumbnail 
global.url = {
    profil: 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
    thumb: 'https://telegra.ph/file/7d2231d69683d1bf936e0.jpg',
    logo: 'https://telegra.ph/file/b7a7f966703261d1266da.jpg',
    akses: 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg',
    welcomes: 'https://telegra.ph/file/1a5df6c2eb53d24d4254c.jpg',
    lefts: 'https://telegra.ph/file/74abb87ac6082571db546.jpg',
    sig: 'https://instagram.com/rinka.433',
    sgh: 'https://github.com/akashi433',
    sgc: 'https://chat.whatsapp.com/LGrtCe82EpbKvxYohoRxKn',
    sdc: 'https://s.id/aeonnixity',
    sid: 'https://s.id/jarsekai'
}

// Donasi
global.payment = {
    psaweria: 'https://saweria.co/Otsukashi',
    gopay: '085184754171',
    dana: '0882007197249'
}

// Message
global.msg = {
    wait: 'Sedang menjalankan perintah...',
    error: 'Terjadi error, harap melapor ke owner melalui */report*.'
}

// Apikey
global.api = {
    aya: ''

}
global.APIs = {
    aya: "https://ayano2.vercel.app"
}

global.APIKeys = {
    "https://ayano2.vercel.app": ""
}

// RPG & Levelling
global.multiplier = 50
global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            health: '❤️',
            role: '🎭',
            level: '🧬',
            exp: '✨',
            money: '💵',
            limit: '🌟'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'config.js'"))
    import(`${file}?update=${Date.now()}`)
})
