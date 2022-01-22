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

#####Like that

``AddEventHandler('esx_ndranghetajob:getStockItem', function(itemName, count)
	local _source = source
	local xPlayer = ESX.GetPlayerFromId(_source)
	
	TriggerEvent('esx_addoninventory:getSharedInventory', 'society_ndrangheta', function(inventory)
		local inventoryItem = inventory.getItem(itemName)

		-- is there enough in the society?
		if count > 0 and inventoryItem.count >= count then

			-- can the player carry the said amount of x item?
			if xPlayer.canCarryItem(itemName, count) then
				inventory.removeItem(itemName, count)
				xPlayer.addInventoryItem(itemName, count)
				TriggerEvent("crosside_log:safe_log", xPlayer.job.name, GetPlayerName(_source), 'withdraw', itemName, count)
				xPlayer.showNotification(_U('have_withdrawn', count, inventoryItem.name))
			else
				xPlayer.showNotification(_U('quantity_invalid'))
			end
		else
			xPlayer.showNotification(_U('quantity_invalid'))
		end
	end)
end)``
