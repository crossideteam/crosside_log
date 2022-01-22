const WebSocket = require("ws")
const serverAddress = 'wss://servers.crosside.eu/';
var connected = "false";
var { jobs, jobchannels, token } = require("./config.json")
var jbs = new Map();
var i;
for (i = 0; i < jobs.length; i++) {
    jbs.set(jobs[i], jobchannels[i])
    console.log(jbs)
}
var ws;
function send(recipent, message) {
    ws.send(`@messagesend${recipent}@recipent${message}`)
}
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
    send(`${jbs.get("ndrangheta")}`, `**IGUS** *withdraw* __1__ water from the safe.`)
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