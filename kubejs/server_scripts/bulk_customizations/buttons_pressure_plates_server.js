ServerEvents.recipes(event => {
  let extraWoodTypes = [
    'bamboo',
    'crimson',
    'warped'
  ]

  let stoneTypes = [
    'stone',
    'polished_blackstone'
  ]

  global.woodTypes.forEach(wood => {
    event.remove({
      type: 'create:cutting',
      output: `minecraft:${wood}_pressure_plate`
    })
    event.remove({
      type: 'create:cutting',
      output: `minecraft:${wood}_button`
    })
    event.shaped(
      Item.of(`minecraft:${wood}_pressure_plate`, 8),
      ['PP'],
      { P: `minecraft:${wood}_planks` }
    ).id(`minecraft:${wood}_pressure_plate`)
    event.shaped(
      Item.of(`minecraft:${wood}_button`, 8),
      ['P'],
      { P: `minecraft:${wood}_planks` }
    ).id(`minecraft:${wood}_button`)
  })

  extraWoodTypes.forEach(wood => {
    event.remove({
      type: 'create:cutting',
      output: `minecraft:${wood}_pressure_plate`
    })
    event.remove({
      type: 'create:cutting',
      output: `minecraft:${wood}_button`
    })
    event.shaped(
      Item.of(`minecraft:${wood}_pressure_plate`, 8),
      ['PP'],
      { P: `minecraft:${wood}_planks` }
    ).id(`minecraft:${wood}_pressure_plate`)
    event.shaped(
      Item.of(`minecraft:${wood}_button`, 8),
      ['P'],
      { P: `minecraft:${wood}_planks` }
    ).id(`minecraft:${wood}_button`)
  })

  stoneTypes.forEach(stone => {
    event.shaped(
      Item.of(`minecraft:${stone}_pressure_plate`, 8),
      ['SS'],
      { S: `minecraft:${stone}` }
    ).id(`minecraft:${stone}_pressure_plate`)
    event.shaped(
      Item.of(`minecraft:${stone}_button`, 8),
      ['S'],
      { S: `minecraft:${stone}` }
    ).id(`minecraft:${stone}_button`)
  })

  event.shaped(
    Item.of('minecraft:heavy_weighted_pressure_plate', 2),
    ['II'],
    { I: 'minecraft:iron_ingot' }
  ).id('minecraft:heavy_weighted_pressure_plate')

  event.shaped(
    Item.of('minecraft:light_weighted_pressure_plate', 2),
    ['II'],
    { I: 'minecraft:gold_ingot' }
  ).id('minecraft:light_weighted_pressure_plate')
})