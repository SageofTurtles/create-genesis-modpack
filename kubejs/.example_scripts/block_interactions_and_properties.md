## Visit the official wiki:  https://kubejs.com/wiki/
## Official Discord:  https://discord.gg/lat

Server scripts can be reloaded in-game using the '/reload' command.
Use 'console.log()' to print text to the game's log when specific scripts are run.

---

## BLOCK EVENT EXAMPLES

NOTE: These scripts can be saved to 'server_scripts' OR 'client_scripts'.

// Cancel a block breaking event
BlockEvents.broken('MODID:BLOCK', event => {
  event.cancel()
})

// Cancel event when right-clicking on BLOCK
BlockEvents.rightClicked('MODID:BLOCK', event => event.cancel())

// Replace BLOCK_1 with BLOCK_2 whenever BLOCK_1 is broken
BlockEvents.broken('MODID:BLOCK_1', event => {
  event.block.set('MODID:BLOCK_2')
  event.cancel()
})

// Give the player ITEM when they left-click on BLOCK, and remove BLOCK
BlockEvents.leftClicked('MODID:BLOCK', event => {
  event.player.give('MODID:ITEM')
  event.block.set('minecraft:air')
})

// Place an oak log instead of crafting table, and tell the player a message
BlockEvents.placed('minecraft:crafting_table', event => {
  event.player.tell('NO CRAFTING FOR YOU')
  event.block.set('minecraft:oak_log')
})


## MODIFYING BLOCK PROPERTIES

NOTE: These scripts must be saved to 'startup_scripts'.

The properties of existing blocks can be edited using scripts, such as in the example below.  A full list of mutable block properties can be found here:  https://kubejs.com/wiki/ref/MutableBlock

// Change mining speed of BLOCK and disable collision
BlockEvents.modification(event => {
  event.modify('MODID:STONE', block => {
    block.destroySpeed = 0.1
    block.hasCollision = false
  })
})

