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
*/

// UNCRAFTABLE
ServerEvents.tags('item', event => {
  let uncraftable = [
    'minecraft:bedrock'
  ]
  uncraftable.forEach(itemInstance => {
    event.add('genesis:uncraftable', `${itemInstance}`)
  })
})

// EQUIPMENT
ServerEvents.tags('item', event => {
  let equipment = [
    'minecraft:iron_sword'
  ]
  equipment.forEach(itemInstance => {
    event.add('genesis:equipment', `${itemInstance}`)
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
    event.add('genesis:food', `${itemInstance}`)
  })
})

// MAGICAL
ServerEvents.tags('item', event => {
  let magical = [
    'minecraft:potion',
    'minecraft:enchanted_golden_apple'
  ]
  magical.forEach(itemInstance => {
    event.add('genesis:magical', `${itemInstance}`)
  })
})

// PLANTABLE
ServerEvents.tags('item', event => {
  let plantable = [
    'minecraft:wheat_seeds',
    'minecraft:carrot'
  ]
  plantable.forEach(itemInstance => {
    event.add('genesis:plantable', `${itemInstance}`)
  })
})

// ROTATIONAL
ServerEvents.tags('item', event => {
  let rotational = [
    'create:shaft',
    'create:clutch'
  ]
  rotational.forEach(itemInstance => {
    event.add('genesis:rotational', `${itemInstance}`)
  })
})

// REDSTONE
ServerEvents.tags('item', event => {
  let redstone = [
    'minecraft:redstone',
    'create:clutch'
  ]
  redstone.forEach(itemInstance => {
    event.add('genesis:redstone', `${itemInstance}`)
  })
})
