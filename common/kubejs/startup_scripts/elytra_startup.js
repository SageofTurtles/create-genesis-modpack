ItemEvents.modification(event => {
  event.modify('minecraft:elytra', item => {
    item.maxDamage = 108
  }
  )
})