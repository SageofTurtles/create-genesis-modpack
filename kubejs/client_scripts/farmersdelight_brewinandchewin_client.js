JEIEvents.information(event => {
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')

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
})

// Heating & Cooling tooltips
ItemEvents.tooltip(event => {
  event.addAdvanced('brewinandchewin:heating_cask', (item, advanced, text) => {
    text.add(1, [
      Text.gold('Heats'), Text.gray(' kegs within a 2-block radius')
    ])
  })

  event.addAdvanced('brewinandchewin:ice_crate', (item, advanced, text) => {
    text.add(1, [
      Text.aqua('Cools'), Text.gray(' kegs within a 2-block radius')
    ])
  })

  event.addAdvanced('brewinandchewin:keg', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Its '),
        Text.yellow('temperature'),
        Text.gold(' can be affected by the '),
        Text.yellow('biome'),
        Text.gold(', or any '),
        Text.yellow('heating casks'),
        Text.gold(' or '),
        Text.yellow('ice crates'),
        Text.gold(' within a 2-block radius. Each fermenting recipe requires the '),
        Text.yellow('keg'),
        Text.gold(' to be a certain '),
        Text.yellow('temperature'),
        Text.gold('.')
      ])
    }
  })
})