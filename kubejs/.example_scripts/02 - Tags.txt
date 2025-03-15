## Visit the official wiki:  https://kubejs.com/wiki/
## Official Discord:  https://discord.gg/lat

Server scripts can be reloaded in-game using the '/reload' command.
Use 'console.log()' to print text to the game's log when specific scripts are run.

---

## MODIFYING TAGS

ServerEvents.tags('TYPE', event => {
  // Insert callback here
})

The TYPE parameter tells KubeJS which registry the tag is modifying.  These will often be 'item', 'block', 'fluid', etc.


### Tag Callbacks

// Add a tag to an item
event.add('MODID:TAG', 'MODID:ITEM')

// Remove a tag from an item
event.remove('MODID:TAG', 'MODID:ITEM')

// Remove a tag from all applicable items
event.removeAll('MODID:TAG')

// Add TAG_1 to all items with TAG_2
event.add('MODID:TAG_1', 'MODID:TAG_2')


## ADVANCED EXAMPLE

The example script below will add the #c:stone tag to all items with the tag #forge:stone, unless the item's ID contains 'diorite'.

ServerEvents.tags('item', event => {
  const stones = event.get('forge:stone').getObjectIds()
  const blacklist = Ingredient.of(/.*diorite.*/)
  stones.forEach(stone => {
    if (!blacklist.test(stone)) event.add('c:stone', stone)
  })
})

