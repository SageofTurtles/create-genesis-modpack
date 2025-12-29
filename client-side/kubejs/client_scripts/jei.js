JEIEvents.removeCategories(event => {
  event.remove('jeresources:enchantment')
  event.remove('jeresources:mob')
  event.remove('jeresources:plant')
  event.remove('jeresources:villager')
  event.remove('jeresources:worldgen')
  event.remove('minecraft:tag_recipes/worldgen/biome')
})

JEIEvents.removeRecipes(event => {
  event.remove('minecraft:crafting', 'minecraft:farmersdelight.dough')
})

JEIEvents.information(event => {
  // Ender Eyes
  let eyes = [
    'kubejs:inert_ender_eye',
    'minecraft:ender_eye'
  ]

  event.addItem(eyes, [
    'Eyes of Ender can be produced by right-clicking on Reinforced Deepslate with an Inert Eye of Ender in your hand.',
    '\nUnfortunately, Reinforced Deepslate is only found in the ancient cities of the Deep Dark...'
  ])

  // Mushroom Colonies
  event.addItem('farmersdelight:brown_mushroom_colony',
    [
      'Brown Mushroom Colonies are grown from a Brown Mushroom planted on Rich Soil at light level 12 or below.',
      '\nColonies can grow 2 to 5 mushrooms, and can be broken into separate mushroom capss by breaking them with any tool.',
      '\nYou can harvest the colony as an item by using Shears, or right-click with Shears to harvest individual caps.'
    ]
  )
  event.addItem('farmersdelight:red_mushroom_colony',
    [
      'Red Mushroom Colonies are grown from a Red Mushroom planted on Rich Soil at light level 12 or below.',
      '\nColonies can grow 2 to 5 mushrooms, and can be broken into separate mushroom capss by breaking them with any tool.',
      '\nYou can harvest the colony as an item by using Shears, or right-click with Shears to harvest individual caps.'
    ]
  )

  // Feast meals
  event.addItem(['farmersdelight:roast_chicken_block', 'farmersdelight:roast_chicken'],
    ['Right-click on a Roast Chicken with a Bowl to take a Plate of Roast Chicken.']
  )
  event.addItem(['farmersdelight:stuffed_pumpkin_block', 'farmersdelight:stuffed_pumpkin'],
    ['Right-click on a Stuffed Pumpkin with a Bowl to take a Bowl of Stuffed Pumpkin.']
  )
  event.addItem(['farmersdelight:honey_glazed_ham_block', 'farmersdelight:honey_glazed_ham'],
    ['Right-click on a Honey Glazed Ham with a Bowl to take a Plate of Honey Glazed Ham.']
  )
  event.addItem(['farmersdelight:shepherds_pie_block', 'farmersdelight:shepherds_pie'],
    ['Right-click on a Shepherd\'s Pie with a Bowl to take a Plate of Shepherd\'s Pie.']
  )
  event.addItem('farmersdelight:rice_roll_medley_block',
    ['Right-click on a Rice Roll Medley to eat a serving.']
  )
  event.addItem(['brewinandchewin:fiery_fondue_pot', 'brewinandchewin:fiery_fondue'],
    ['Right-click on a Pot of Fiery Fondue with a Bowl to take a serving of Fiery Fondue.']
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
        '\nMine the center of the outcropping until you find a Dormant Vent block.  When you explode the Dormant Vent block (such as with TNT), it will become an Active Vent.',
        '\nLava placed touching the Active Vent block in up to a 3-block range will be converted into the that type of orestone for a renewable supply.'
      ]
    )
  })

  // Book Bundles
  event.addItem(/packedup:.*book_bundle.*/, [
    'Can be converted into a Pile of Books by right-clicking on it with Shears.'
  ])
  event.addItem(/packedup:.*book_pile/, [
    'Obtainable by right-clicking on a Bundle of Books or Half Bundle of Books with Shears.'
  ])

  // Turf
  event.addItem(/packedup:.*turf(?!_layer)/, [
    'Never converts to dirt!  Right-click on it with a shovel to take a Turf Layer.'
  ])
  event.addItem(/packedup:.*turf_layer/, [
    'Obtainable by right-clicking on a Turf block with a Shovel.'
  ])
})
