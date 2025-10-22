ServerEvents.tags('painting_variant', event => {
  let newPaintings = [
    'minecraft:earth',
    'minecraft:wind',
    'minecraft:water',
    'minecraft:fire'
  ]
  newPaintings.forEach(variant => {
    event.add('minecraft:placeable', variant)
  })
})
