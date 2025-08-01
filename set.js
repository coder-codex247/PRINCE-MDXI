// change only what you are asked to change else bot won't work – thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61U2Y6jRhT9l3q1NWZfLLUUNgO2scF4a0d5KEyBMauhAONRv+YH8pLPzCdE2N3plmYy05HCU1HLveece+79CrI8qtAMdWD8FRRl1ECM+iXuCgTGQK6DAJVgCHyIIRgDTRlhdueHmn0iTFnHRr3J4rzJMJFVloXJbH9c+nJLJYn5BF6GoKi9JDr+IKDBbrqmuQ263UxlgonGXeslb8ZBwjvOmY9ndrTztCp3pmr1BF76iDAqoyzUihNKUQmTGepsGJWfg29NyfNobp5DcmHG9BwbVChW2jNUDKtxYs8Q97MVS/g1F7efg98l3uiAvcptIxN7jE0k3kFJ+Qsbz0YzUdH52bw1PPEods4DfhWFGfJNH2U4wt2ndW/1OVFpgsC0UKOXG6ukn0PvTDiclkJ522SR3joUCxEXV58Dvmx9hsvqtcWE7mB+OQykK2fXahuot0narHAy8E4Yc5rjbj4Ct8s3r8T/Rfdwlmox3x2wdx4prrLaG8Ia6VYseDVU/fj5mZXkwvJkPs0/B9/yb9xzJ2ylBScKutCulM1Ef+7I4njR59PRuQwGtLYa1d6kfYcPcV3+COXOnByno9FBDlVTv3JbJ76w2trlFOMyv3hS7EmVgKdi4Bz2myw4skzetb4mtqlOnBe2rGcpXhstXjrKeq9etkthMWjD9unOKEad6YMx+TIEJQqjCpcQR3nW71EkPQTQb1x0LBG+ywtWfnNw0NTcGPtcGqy40ejSrbecbvNpw1xiI6Cn4lbP7CiXnsAQFGV+RFWFfCOqcF52FqoqGKIKjH+9V6onXaI0x2ga+WAMKJoRSIrnOI6kxV+qL+0J4goWxZcMYTAEQZmnFgJjXNZoCO4vZFkiNJmcUITGTRRaZjVS1TiSUSakok44vueYPrKuoxRVGKYFGJM8yxCsIJDsy/D/AsKqFEULgiLKPM9LijbhKJLR5Ikk0hzJTX4K5LchyNAVP5zc60+TQxBEZYU3WV0kOfTfbP52CI/HvM6w22VHpV+gEow/bCOMoyysemp1BsvjKWqQ0vMA4wAmFfqn5KhE/huX1zGm5H7vRMY1NrJlL0GPvQ/0rThjkv5Wn+R+j2RZVmB5iicFlhDuN/uDIchgHw389cfvf/ayvALu4/sIwyipwBgolhJnA9PQ5m5YCY6uS1ooKaEE3gm+tc7DmouCmqTker9r1AbX1PFyRZpJNkww48npYdfMeJs/bff1Rc6fvhMEjAErK/RSNB3XgHY+J1WW8fW969z0wN2RpVPfBpKh3OIscbqQvHb763reddIIw6N/LnR+uzb2QpOPwoHRncwFM/LslaKET302HzXREX1MVpwWIYwvESESxKmgTHplG5din91sr+O43WHCDuR6w4hJbhKLarJmr9xcjqylZdkFnxRCOG9IVeULSli5xCBJmmbNheGjqe9DJXkd5tFru0X33yBC99n4WoKfl/KBvLcc8TL8EOR13P7LyJLX0D8d8IYky5bnPZzNqv1JWXgDo6tFd7ctu/o2YLZb/hJC8NJ7v0ggDvIyBWMAM7/M70Yp87r3sJkF+Q+SKZJpKtKDegIrLL33xfdajXrcssu8MGB16lXQGSmte5N3UlG4GOK3NgNS/6nrFLz8DSOMzlCTCAAA",
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
