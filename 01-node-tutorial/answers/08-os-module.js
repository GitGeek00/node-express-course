const os = require("os");

const osInfo = {
    freeMem: os.freemem(),
    homeDir: os.homedir(),
    upTime: () => { console.log(`The System Uptime is ${os.uptime()} seconds`);}
}

module.exports = osInfo