/*
ITEMS:
- bedrock
- iron sword
- apple
- enchanted golden apple
- carrot
- potion
- wheat seeds
- shaft
- clutch
- redstone
- oak boat
*/

    // PG. 42 / 88: andesite_bogie_steps
    // -@chipped -@rechiseled


// UNOBTAINABLE
ServerEvents.tags('item', event => {
  let unobtainable = [
    'minecraft:bedrock',
    'minecraft:reinforced_deepslate',
    'minecraft:chorus_plant',
    'minecraft:suspicious_sand',
    'minecraft:suspicious_gravel',
    'minecraft:end_portal_frame',
    'minecraft:command_block',
    'minecraft:chain_command_block',
    'minecraft:repeating_command_block',
    'minecraft:command_block_minecart',
    'minecraft:jigsaw',
    'minecraft:structure_block',
    'minecraft:structure_void',
    'minecraft:barrier',
    'minecraft:debug_stick',
    'minecraft:light',
    'create:handheld_worldshaper',
    'create:creative_motor',
    'create:creative_fluid_tank',
    'create:creative_crate',
    'create:creative_blaze_cake',
    'createaddition:creative_energy'
  ]
  unobtainable.forEach(itemInstance => {
    event.add('genesis:unobtainable_tooltip', `${itemInstance}`)
  })
})

// EQUIPMENT
ServerEvents.tags('item', event => {
  let equipment = [
    'minecraft:iron_sword'
  ]
  equipment.forEach(itemInstance => {
    event.add('genesis:equipment_tooltip', `${itemInstance}`)
  })
})

// FOOD
ServerEvents.tags('item', event => {
  let food = [
    'minecraft:apple',
    'minecraft:enchanted_golden_apple',
    'minecraft:carrot'
  ]
  food.forEach(itemInstance => {
    event.add('genesis:food_tooltip', `${itemInstance}`)
  })
})

// MAGICAL
ServerEvents.tags('item', event => {
  let magical = [
    'minecraft:potion',
    'minecraft:enchanted_golden_apple'
  ]
  magical.forEach(itemInstance => {
    event.add('genesis:magical_tooltip', `${itemInstance}`)
  })
})

// PLANTABLE
ServerEvents.tags('item', event => {
  let plantable = [
    'minecraft:wheat_seeds',
    'minecraft:carrot'
  ]
  plantable.forEach(itemInstance => {
    event.add('genesis:plantable_tooltip', `${itemInstance}`)
  })
})

// ROTATIONAL
ServerEvents.tags('item', event => {
  let rotational = [
    'create:shaft',
    'create:clutch'
  ]
  rotational.forEach(itemInstance => {
    event.add('genesis:rotational_tooltip', `${itemInstance}`)
  })
})

// REDSTONE
ServerEvents.tags('item', event => {
  let redstone = [
    'minecraft:redstone',
    'create:clutch'
  ]
  redstone.forEach(itemInstance => {
    event.add('genesis:redstone_tooltip', `${itemInstance}`)
  })
})

// TRANSPORTATION
ServerEvents.tags('item', event => {
  let transportation = [
    'minecraft:oak_boat'
  ]
  transportation.forEach(itemInstance => {
    event.add('genesis:transportation_tooltip', `${itemInstance}`)
  })
})
