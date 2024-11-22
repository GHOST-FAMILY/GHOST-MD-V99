const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: ".menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "🪰",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭─「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ 」*
*│◈ ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰──────────●●►*
*╭──────────●●►*
*│⛵ LIST MENU*
*│   ───────*
*│ 1   OWNER*
*│ 2   CONVERT*
*│ 3   AI*
*│ 4   SEARCH*
*│ 5   DOWNLOAD*
*│ 6   FUN*
*│ 7   MAIN*
*│ 8   GROUP*
*│ 9   OTHER*
*╰───────────●●►*

*🔢 Reply the Number you want to select*

💻 *GitHub:*  

👩‍💻 *Channel:* https://whatsapp.com/channel/0029VaobbRhG8l5Mmhh2IA3O

> *ᴘᴏᴡᴇʀᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/5L8LygK/7ea64ee9890f96ea.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──OWNER MENU──╼◈*

╭────────●●►
│ 👻 *restart* 
╰──────────────────●●►

> *ᴘᴏᴡᴇʀᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ*`);
                        break;
                    case '2':               
                        reply(`*◈╾──CONVERT MENU──╼◈*

╭────────●●►
│ 💀*convert* 
╰──────────────────●●►

> *ᴘᴏᴡᴇʀᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ*`);
                        break;
                    case '3':               
                        reply(`*◈╾──AI MENU──╼◈*

╭────────●●►
│ 👻 *ai* 
╰──────────────────●●►

> *ᴘᴏᴡᴇʀᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ*`);
                        break;
                    case '4':               
                        reply(`*◈╾──SEARCH MENU──╼◈*

╭────────●●►
│ 🎀 *yts* 
╰──────────────────●●►
╭────────●●►
│ 👻 *srepo* 
╰──────────────────●●►

> *ᴘᴏᴡᴇʀᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ*`);
                        break;
                    case '5':               
                        reply(`*◈╾──DOWNLOAD MENU──╼◈*

╭────────●●►
│ 🎀 *apk* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *twitter* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *gdrive* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *mediafire* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *fb* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *ig* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *movie* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *song* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *video* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *play/yt* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *song2* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *video2* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *tiktok* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *img* 
╰──────────────────●●►

> *ᴘᴏᴡᴇʀᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ*`);
                        break;
                    case '7':               
                        reply(`*◈╾──MAIN MENU──╼◈*

╭────────●●►
│ 🎀 *alive* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *about* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *menu* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *allmenu* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *support* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *system* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *ping* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *runtime* 
╰──────────────────●●►

> *ᴘᴏᴡᴇʀᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ*`);
                        break;
                    case '8':               
                        reply(`*◈╾──GROUP MENU──╼◈*

╭────────●●►
│ 🎀 *promote* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *demote* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *kick* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *add* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *admins* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *tagall* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *getpic* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *setwelcome* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *setgoodbye* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *admins* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *gname* 
╰──────────────────●●►

> *ᴘᴏᴡᴇʀᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ*`);
                       break;
                    case '6':               
                        reply(`*◈╾──FUN MENU──╼◈*

╭────────●●►
│ 🎀 *dog* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *fact* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *hack* 
╰──────────────────●●►
╭────────●●►
│ 💀 *quote* 
╰──────────────────●●►

> *ᴘᴏᴡᴇʀᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ*`);

                        break;
                    case '9':               
                        reply(`*◈╾──OTHER MENU──╼◈*

╭────────●●►
│ 💀 *githubstalk* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *trt* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *weather* 
╰──────────────────●●►

> *ᴘᴏᴡᴇʀᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
