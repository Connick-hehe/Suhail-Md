const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="constanceodion@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348168000939" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348059110113";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_28_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxLFxuICAgICAgICAyMixcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICAxODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDYzLFxuICAgICAgICA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNixcbiAgICAgICAgNDMsXG4gICAgICAgIDc1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDM3LFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg1LFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwLFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZWb0hXTCtUQTN6YlBVOGhQazVQRnBVNnVhVmxCaDdyb0lIR1hEVHZMdTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFVb3pfLW9CUnQtV3YtdkNMYVh0VkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjVmM2U2NWQtYTBmNi00YjY0LWFkYzctZmJjYTE2NzM3ZjliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgODksXG4gICAgICAxODUsXG4gICAgICAyMTUsXG4gICAgICAyMjksXG4gICAgICA0NSxcbiAgICAgIDg5LFxuICAgICAgMjUwLFxuICAgICAgNDgsXG4gICAgICAxMDAsXG4gICAgICAxODUsXG4gICAgICA5OCxcbiAgICAgIDY3LFxuICAgICAgMjExLFxuICAgICAgNTMsXG4gICAgICA2MSxcbiAgICAgIDU1LFxuICAgICAgOTgsXG4gICAgICAxNTMsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAyNTUsXG4gICAgICAxNzAsXG4gICAgICAxNDksXG4gICAgICA2LFxuICAgICAgNDEsXG4gICAgICAyMDYsXG4gICAgICAyMTcsXG4gICAgICAyMjcsXG4gICAgICA3OSxcbiAgICAgIDIxMCxcbiAgICAgIDU5LFxuICAgICAgMjM1LFxuICAgICAgNTAsXG4gICAgICAyMjcsXG4gICAgICAyNixcbiAgICAgIDMwLFxuICAgICAgMTgwLFxuICAgICAgMTE4LFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFGVzRaMVBGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDU5MTEwMTEzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUzNDU1NTY1NjM5ODU3OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGZPNGNFRUVOYUJ5clFHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDdU82L3hKcExFOGNCVFZ3QSt3SHhZYS9ndHpoVUdBNGh0aTBiVG9aSEVnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlEL3JhT2NKQkYzdHRmdzVQb0Z4bVAvMjFZU3Qrc00rNjZwRVFWdWR4c3Z6ZE9LdU5VZWNIc3k1WStiMEcrUkI0NzlVRVE2cE1UVis1NERXWnJ3MUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlIyQ2R6YWU1UFZCc3BwaGlSeEhHTEFBZU5WWkQ0WWVTcldMbk1RTEp2NXBqRGFDQzZlaXdEaDNNQ3RCU0xNdjRIdDB1Tjk1R21YZWMzS0Y1ZlFraGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNTkxMTAxMTM6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODc3Mjc2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTIxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJMjEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNOURZMyt3QlN6MWxIQlRyZnhzSlJEeGZramZCMWdzQVV5RlRyWDdNcWFnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMTE2NTYwNTUsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "connick",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
