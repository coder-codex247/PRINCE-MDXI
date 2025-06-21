// change only what you are asked to change else bot won't work – thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rVGLmLRnTEcvGC2AreWtzYhxIKqBYKLAoEJvz3DbR7diJ2dqKXpyIpMs85eTK/A5LhAtmoAePvIKe4ggx1R9bkCIyBXoYhoqAPAsggGANlWa/XyOTa3Qh5qjc6SXAZW7FvEf1qT2rjPTuZprv2LSF6Afc+yMtzgv3fJPRjNXJKK0CLtdmavV2iRCksmyL2Zo6Q0E25e8dT4wZ1138B9y4jxBSTaJLHKEUUJjZqHIjp1+BPbEseHknPd219XghWC3ctNoPzjA6YlW+wK24WPbQJSpH7GvxepbtRFOrD/cwptEhflTy1JZINZwPp4MQ8upDhYPTmvk7dJ/wCRwQFVoAIw6z5su6crvnKhYZvpFDnM1l2lgeYZ29bt5HlTeRW3kJbzHbnEz/xvgbcdqSJy/anwO8tB/pltS88NScmu0bGcB9XSyFVU86+ha+x9zNwh3565fJ/dHcdUvB7Hl6aWttl5qtyVXaDOlSjdGo1Mj/nj9RtbL/JLrevwX8NcD71ErM9mhKZzcxlVV/yQRvEt2S1S94P9dFkk9uVCNOf4ENW0t+h5BdNsPc9qx7Et0E5XDR2cXTUfNIk4vryboo7ZVHle+cs7C5qPpAGB87B77W6X4nSUQveAjSVy8XK227KSxHOmrZYmDrWXh6MLqixAjDm731AUYQLRiHDGeliAi/0AQyqLfIpYg95gV4j5xCb68WpGpTp0RZck7jHYC5Q1KKVfD7cbmq13U8XkfYC+iCnmY+KAgVzXLCMNq+oKGCECjD+89GpjjRFacbQAgdgDARRUjlZlUaKwsl/FN9uMWQFzPNvBDHQByHN0lcExoyWqA8ef2iioZjqcKQaQ1lXRyPV4MzRROYm3EjReIPvOKbPqjucooLBNAdjfihzsiQKQ+n+Vx8QVLOngTraIt8HIaYF25MyTzIYfLrr8yP0/awkbNsQ3+gOiIIx908YMYZJVHTUSgKpH+MKGR0PMA5hUqAfSiOKgk8uH9vDyILOALy33zkn2wYd9i7Rv8UZS7/QJ3nckxVeFjlOkbihokrdxS5+/4GwSxggBnFSgDEw1ss4qlWXrEL/Fnme3miarT2698no06JPCxxaCVtlWGsBPzuwJST6Ic2Pa9mMKCyvVVIPklZx84UTR79KAsYgPfu2OCSp8TZf2OKsTqvMl8vAb2AW2WTC4uP2cCK6PLiedbPt+YLnL9YX1S6Xg9h4n9W21QSn+voaY0OreoP3nepOzOilqxagCvvo52Ke8+avzDYTD66ghZx/831pxQVGYokZTTeniuztdi5W3nZnxNPRVujZw7OaH9qe9bau16k+am7tsNKvYRtyyZZvbgaNo+fwPIY3+Via+MPW+PEaYvTYQQR2HfxC757IO49x9/5PST7W2n+sBv3g9yy8JKo7DzbJeSvkt8PpemhLV7IFeqWyH8p+72Jvd5IH7p3Z8wSyMKMpGANIAprhAPQBzcrOtBYJs98UM7TIMt0n9QQWTPtnEH4xW4r6vOXQLJ/DIu5UmElaWnaubrQ83zLIPucKaN1jKTNw/xsCdM94+wcAAA==",
  SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", 
  ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
  AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
  AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", 
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
  STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by Codex", 
  MODE: process.env.MODE || "private",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348058496605", 
  OWNER_NAME: process.env.OWNER_NAME || "ℭ𝔬𝔡𝔢𝔵", 
  PACK_AUTHOR: process.env.PACK_AUTHOR || "ℭ𝔬𝔡𝔢𝔵", 
  PACK_NAME: process.env.PACK_NAME || "💙", 
  PREFIX: process.env.PREFIX || ".",
  VERSION: process.env.VERSION || "3.0.0",
  ANTILINK: process.env.ANTILINK || "false",
  ANTICALL: process.env.ANTICALL || "false",
  ANTIBAD: process.env.ANTIBAD || "false",
  BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot",
  ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", 
  BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", 
  AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
  CHAT_BOT: process.env.CHAT_BOT || "false",
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",    
  AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false",
  AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799",
  PRESENCE: process.env.PRESENCE || "online",
  TIME_ZONE: process.env.TIME_ZONE || "Africa/Lagos",
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { 
  fs.unwatchFile(file); 
  console.log(`Update '${__filename}'`); 
  delete require.cache[file]; 
  require(file); 
});
