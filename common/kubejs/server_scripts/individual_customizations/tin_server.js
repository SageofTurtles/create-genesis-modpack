ServerEvents.tags('item', event => {
  event.add('genesis:cheap_metal_ingots', 'create_ironworks:tin_ingot')
  event.add('genesis:cheap_metal_ingots', 'minecraft:iron_ingot')
  event.add('genesis:cheap_metal_nuggets', 'create_ironworks:tin_nugget')
  event.add('genesis:cheap_metal_nuggets', 'minecraft:iron_nugget')
})

ServerEvents.recipes(event => {
  event.replaceInput(
    { id: /mcwlights:.*garden_light/, },
    'minecraft:iron_nugget',
    '#genesis:cheap_metal_nuggets'
  )
  event.replaceInput(
    { id: /mcwlights:.*garden_light/, },
    'minecraft:iron_ingot',
    '#genesis:cheap_metal_ingots'
  )
  event.replaceInput(
    { id: /mcwlights:.*_lantern/, },
    'minecraft:iron_nugget',
    '#genesis:cheap_metal_nuggets'
  )
  event.replaceInput(
    { id: /mcwlights:.*_lantern/, },
    'minecraft:iron_ingot',
    '#genesis:cheap_metal_ingots'
  )
})