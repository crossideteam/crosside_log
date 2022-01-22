## Crosside Log For FiveM

### Functions
 - Safe Log

### Setup

You can find everything you need: https://crosside.eu/crosside_log

#### Safe Log
Add this to your server.lua, in each jobs

ON WITHDRAW
``TriggerEvent("crosside_log:safe_log", xPlayer.job.name, GetPlayerName(_source), 'withdraw', itemName, count)``

ON DEPOSIT

``TriggerEvent("crosside_log:safe_log", xPlayer.job.name, GetPlayerName(_source), 'deposit', itemName, count)``
