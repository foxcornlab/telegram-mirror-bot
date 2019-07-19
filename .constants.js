process.env["NTBA_FIX_319"] = 1;
module.exports = Object.freeze({
  TOKEN: '733462745:AAHm9FIBR-Qd_M5PnvnkEPbMA5lxlLE_MSI',
  ARIA_SECRET: 'password',
  ARIA_DOWNLOAD_LOCATION: '/home/greatindianparody/telegram-mirror-bot/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: '1cpFPijI6AnRQNWsakt1NUYw1oniASICT',
  SUDO_USERS: [658490863],	// Telegram user IDs. These users can use the bot in any chat or in dm.
  AUTHORIZED_CHATS: [346535810],	// Telegram Chat IDs. Anyone in these chats can use the bot.
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  } 
});
