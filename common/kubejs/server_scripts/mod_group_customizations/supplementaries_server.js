ServerEvents.recipes(event => {
  // Cage
  event.shaped(
    Item.of('supplementaries:cage'),
    [
      'SSS',
      'R R',
      'SSS'
    ],
    {
      S: 'create:iron_sheet',
      R: 'createaddition:iron_rod'
    }
  ).id('supplementaries:cage')

  // Antique Ink
  event.recipes.create.filling(
    'supplementaries:antique_ink',
    [
      Fluid.of('create_enchantment_industry:ink', 250),
      'minecraft:glass_bottle'
    ]
  ).id('genesis:antique_ink')

  // Quiver
  event.shaped(
    Item.of('supplementaries:quiver', 1),
    [
      'L L',
      'L L',
      ' L '
    ],
    {
      L: 'minecraft:leather'
    }
  ).id('genesis:quiver')

  // Globe
  event.shaped(
    Item.of('supplementaries:globe', 1),
    [
      ' R ',
      'GPB',
      ' S '
    ],
    {
      R: 'createaddition:gold_rod',
      G: 'minecraft:green_dye',
      P: '#minecraft:planks',
      B: 'minecraft:blue_dye',
      S: 'create:golden_sheet'
    }
  ).id('genesis:globe')

  // Slice Map
  event.replaceInput(
    { id: 'supplementaries:slice_map' },
    'supplementaries:altimeter',
    'minecraft:black_dye'
  )

  // Sack
  event.replaceInput(
    { id: 'supplementaries:sack' },
    '#forge:crops/flax',
    'farmersdelight:canvas'
  )

  // Key
  event.shaped(
    'supplementaries:key',
    [
      'I',
      'N',
      'N'
    ],
    {
      I: 'create_ironworks:bronze_ingot',
      N: 'create_ironworks:bronze_nugget'
    }
  ).id('supplementaries:key')

  // Safe
  event.shaped(
    'supplementaries:safe',
    [
      'III',
      'ISI',
      'III'
    ],
    {
      I: 'create_ironworks:steel_ingot',
      S: '#minecraft:shulker_boxes'
    }
  ).id('genesis:safe_crafting_from_steel_ingot')

  // Flint Block crushing
  event.recipes.create.crushing(
    Item.of('minecraft:gravel').withChance(0.85),
    'supplementaries:flint_block'
  ).id('genesis:flint_block_crushing')

  // Flower Box
  event.shaped(
    '2x supplementaries:flower_box',
    [
      'WDW',
      ' W '
    ],
    {
      W: '#minecraft:planks',
      D: 'minecraft:dirt'
    }
  ).id('supplementaries:flower_box')

  // Timber Frame blocks
  event.shaped(
    '2x supplementaries:timber_frame',
    [
      ' S ',
      'SWS',
      ' S '
    ],
    {
      S: 'minecraft:stick',
      W: '#minecraft:planks'
    }
  ).id('supplementaries:timber_frame')

  event.shaped(
    '2x supplementaries:timber_brace',
    [
      'S  ',
      'SWS',
      '  S'
    ],
    {
      S: 'minecraft:stick',
      W: '#minecraft:planks'
    }
  ).id('supplementaries:timber_brace')

  event.shaped(
    '2x supplementaries:timber_cross_brace',
    [
      'S S',
      ' W ',
      'S S'
    ],
    {
      S: 'minecraft:stick',
      W: '#minecraft:planks'
    }
  ).id('supplementaries:timber_cross_brace')

  // Candle Holders
  global.colors.forEach(color => {
    event.shaped(
      `supplementaries:candle_holder_${color}`,
      [
        'C ',
        'IN'
      ],
      {
        C: `minecraft:${color}_candle`,
        I: 'minecraft:iron_ingot',
        N: 'minecraft:iron_nugget'
      }
    ).id(`supplementaries:candle_holders/candle_holder_${color}`)
  })

  event.shaped(
    'supplementaries:candle_holder',
    [
      'C ',
      'IN'
    ],
    {
      C: 'minecraft:candle',
      I: 'minecraft:iron_ingot',
      N: 'minecraft:iron_nugget'
    }
  ).id('supplementaries:candle_holders/candle_holder')
})