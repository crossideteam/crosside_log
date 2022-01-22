const serverAddress = 'wss://servers.crosside.eu/';
var connected = "false";
const { token } = "";
var { jobs, jobchannels } = require("./config.json")
var jbs = new Map();
var i;
for (i = 0; i < jobs.length; i++) {
    jbs.set(jobs[i], jobchannels[i])
    console.log(jbs)
}
on('crosside_log:safe_log', (job, playername, action, item, amount) => {
    if (connected) {
        send(`${jbs.get(job)}`, `**${playername}** *${action}* __${amount}__ ${item} from the safe.`)
    }
});
function send(recipent, message) {
ws.send(`@messagesend${recipent}@recipent${message}`)
}
var ws;
connect()
function connect() {
    ws = new WebSocket(serverAddress, {
        headers: {
            "user-agent": "Mozilla",
            'token': `${token}`
        },
        noServer: true
    });
}
ws.on('open', function () {
    connected = "true";
});
ws.on('close', function () {
    connected = "false";
});
ws.on('message', function (msg) {

});
setInterval(() => {
    if (connected == "false") {
        connect();
    }
}, 20000)