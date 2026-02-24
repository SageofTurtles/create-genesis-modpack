JEIEvents.removeCategories(event => {
  event.remove('jeresources:enchantment')
  event.remove('jeresources:mob')
  event.remove('jeresources:plant')
  event.remove('jeresources:villager')
  event.remove('jeresources:worldgen')
  event.remove('minecraft:tag_recipes/worldgen/biome')
})

JEIEvents.removeRecipes(event => {
  event.remove('minecraft:crafting', 'minecraft:decorated_pot_simple')
  event.remove('minecraft:crafting', 'minecraft:farmersdelight.dough')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:multiple_colors')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_black')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_blue')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_brown')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_cyan')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_gray')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_green')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_light_blue')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_light_gray')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_lime')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_magenta')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_orange')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_pink')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_purple')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_red')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_white')
  event.remove('minecraft:crafting', 'sophisticatedbackpacks:single_color_yellow')
  event.remove('minecraft:crafting', 'supplementaries:antique_book_create_display')
})

JEIEvents.addItems(event => {
  event.add(Item.of('minecraft:written_book', '{AntiqueInk:1b,generation:3}'))
  event.add(Item.of('sophisticatedbackpacks:backpack', '{borderColor:13942683,clothColor:13942683}'))
  event.add(Item.of('sophisticatedbackpacks:backpack', '{borderColor:16701501,clothColor:13394234}'))
  event.add(Item.of('sophisticatedbackpacks:backpack', '{borderColor:6434330,clothColor:16701501}'))
})

JEIEvents.information(event => {
  // Mushroom Colonies
  event.addItem('farmersdelight:brown_mushroom_colony',
    [
      'Brown Mushroom Colonies are grown from a Brown Mushroom planted on Rich Soil at light level 12 or below.',
      '\nColonies can grow 2 to 5 mushrooms, and can be broken into separate mushroom caps by breaking them.'
    ]
  )
  event.addItem('farmersdelight:red_mushroom_colony',
    [
      'Red Mushroom Colonies are grown from a Red Mushroom planted on Rich Soil at light level 12 or below.',
      '\nColonies can grow 2 to 5 mushrooms, and can be broken into separate mushroom caps by breaking them.'
    ]
  )

  // Molten Vents
  let vents = [
    'molten_vents:dormant_molten_asurine',
    'molten_vents:dormant_molten_veridium',
    'molten_vents:dormant_molten_crimsite',
    'molten_vents:dormant_molten_ochrum',
    'molten_vents:dormant_molten_scorchia',
    'molten_vents:dormant_molten_scoria',
    'molten_vents:active_molten_asurine',
    'molten_vents:active_molten_veridium',
    'molten_vents:active_molten_crimsite',
    'molten_vents:active_molten_ochrum',
    'molten_vents:active_molten_scorchia',
    'molten_vents:active_molten_scoria'
  ]

  vents.forEach(vent => {
    event.addItem(vent,
      [
        'Molten Vents in the form of a small outcropping of orestone can be found anywhere on the surface, but form more frequently underwater.',
        '\nMine the center of the outcropping until you find a Dormant Vent block.  When you explode the Dormant Vent block with TNT, it will become an Active Vent.'
      ]
    )
  })
})
