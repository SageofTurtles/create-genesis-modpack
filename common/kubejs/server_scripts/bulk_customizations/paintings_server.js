ServerEvents.tags('painting_variant', event => {
  let newPaintings = [
    'minecraft:earth',
    'minecraft:wind',
    'minecraft:water',
    'minecraft:fire',
    'furniture:lonely_daisy',
    'furniture:sunflower',
    'furniture:foraging_woodpecker',
    'furniture:sleeping_fox',
    'furniture:honey_fall',
    'furniture:rabbit',
    'furniture:lavender_fields',
    'furniture:roses',
    'furniture:ants',
    'furniture:butterfly',
    'furniture:waterfall',
    'furniture:sitting_bear',
    'furniture:strong',
    'furniture:sakura_grove',
    'furniture:tulip_fields',
    'furniture:hopper'
  ]
  newPaintings.forEach(variant => {
    event.add('minecraft:placeable', variant)
  })
})
