ServerEvents.tags('item', event => {
  global.colors.forEach(color => {
    event.add('mcwlights:paper_lamps',
      `mcwlights:${color}_paper_lamp`
    )
  })
})

ServerEvents.recipes(event => {
  let woodTypes = [
    'acacia',
    'birch',
    'cherry',
    'crimson',
    'dark_oak',
    'jungle',
    'mangrove',
    'oak',
    'spruce',
    'warped'
  ]

  let commonMetals = [
    'copper',
    'iron'
  ]

  // Square Wall Lamp
  event.shaped(
    '3x mcwlights:square_wall_lamp',
    [
      ' W ',
      'WRW',
      '  F'
    ],
    {
      W: 'minecraft:white_wool',
      R: 'minecraft:redstone_lamp',
      F: '#minecraft:wooden_fences'
    }
  ).id('mcwlights:square_wall_lamp')

  // Ceiling Fan Lights
  woodTypes.forEach(wood => {
    event.shaped(
      Item.of(`mcwlights:${wood}_ceiling_fan_light`, 1),
      [
        ' I ',
        'SPS',
        ' G '
      ],
      {
        I: 'minecraft:iron_ingot',
        S: `minecraft:${wood}_slab`,
        P: 'create:propeller',
        G: 'minecraft:glowstone_dust'
      }
    ).id(`mcwlights:${wood}_ceiling_fan_light`)
  })

  commonMetals.forEach(metal => {
    // Candle Holder
    event.shaped(
      Item.of(`mcwlights:${metal}_candle_holder`, 1),
      [
        'C',
        'I',
        'I'
      ],
      {
        I: `minecraft:${metal}_ingot`,
        C: '#minecraft:candles'
      }
    ).id(`mcwlights:${metal}_candle_holder`)

    // Chandelier
    event.shaped(
      Item.of(`mcwlights:${metal}_chandelier`, 1),
      [
        'CIC',
        'CIC',
        'I I'
      ],
      {
        I: `minecraft:${metal}_ingot`,
        C: '#minecraft:candles'
      }
    ).id(`mcwlights:${metal}_chandelier`)

    // Double Candle Holder
    event.shaped(
      Item.of(`mcwlights:${metal}_double_candle_holder`, 1),
      [
        'CIC',
        ' I '
      ],
      {
        I: `minecraft:${metal}_ingot`,
        C: '#minecraft:candles'
      }
    ).id(`mcwlights:${metal}_double_candle_holder`)

    // Low Candle Holder
    event.shaped(
      Item.of(`mcwlights:${metal}_low_candle_holder`, 1),
      [
        'C',
        'I'
      ],
      {
        I: `minecraft:${metal}_ingot`,
        C: '#minecraft:candles'
      }
    ).id(`mcwlights:${metal}_low_candle_holder`)

    // Small Chandelier
    event.shaped(
      Item.of(`mcwlights:${metal}_small_chandelier`, 1),
      [
        'CIC',
        'CIC'
      ],
      {
        I: `minecraft:${metal}_ingot`,
        C: '#minecraft:candles'
      }
    ).id(`mcwlights:${metal}_small_chandelier`)

    // Triple Candle Holder
    event.shaped(
      Item.of(`mcwlights:${metal}_triple_candle_holder`, 1),
      [
        ' C ',
        'CIC',
        ' I '
      ],
      {
        I: `minecraft:${metal}_ingot`,
        C: '#minecraft:candles'
      }
    ).id(`mcwlights:${metal}_triple_candle_holder`)

    // Wall Candle Holder
    event.shaped(
      Item.of(`mcwlights:${metal}_wall_candle_holder`, 1),
      [
        'C ',
        'II'
      ],
      {
        I: `minecraft:${metal}_ingot`,
        C: '#minecraft:candles'
      }
    ).id(`mcwlights:${metal}_wall_candle_holder`)
  })

  // Golden Candle Holder
  event.shaped(
    Item.of(`mcwlights:golden_candle_holder`, 1),
    [
      'C',
      'I',
      'I'
    ],
    {
      I: 'minecraft:gold_ingot',
      C: '#minecraft:candles'
    }
  ).id(`mcwlights:golden_candle_holder`)

  // Golden Chandelier
  event.shaped(
    Item.of(`mcwlights:golden_chandelier`, 1),
    [
      'CIC',
      'CIC',
      'I I'
    ],
    {
      I: 'minecraft:gold_ingot',
      C: '#minecraft:candles'
    }
  ).id(`mcwlights:golden_chandelier`)

  // Golden Double Candle Holder
  event.shaped(
    Item.of(`mcwlights:golden_double_candle_holder`, 1),
    [
      'CIC',
      ' I '
    ],
    {
      I: 'minecraft:gold_ingot',
      C: '#minecraft:candles'
    }
  ).id(`mcwlights:golden_double_candle_holder`)

  // Golden Low Candle Holder
  event.shaped(
    Item.of(`mcwlights:golden_low_candle_holder`, 1),
    [
      'C',
      'I'
    ],
    {
      I: 'minecraft:gold_ingot',
      C: '#minecraft:candles'
    }
  ).id(`mcwlights:golden_low_candle_holder`)

  // Golden Small Chandelier
  event.shaped(
    Item.of(`mcwlights:golden_small_chandelier`, 1),
    [
      'CIC',
      'CIC'
    ],
    {
      I: 'minecraft:gold_ingot',
      C: '#minecraft:candles'
    }
  ).id(`mcwlights:golden_small_chandelier`)

  // Golden Triple Candle Holder
  event.shaped(
    Item.of(`mcwlights:golden_triple_candle_holder`, 1),
    [
      ' C ',
      'CIC',
      ' I '
    ],
    {
      I: 'minecraft:gold_ingot',
      C: '#minecraft:candles'
    }
  ).id(`mcwlights:golden_triple_candle_holder`)

  // Golden Wall Candle Holder
  event.shaped(
    Item.of(`mcwlights:golden_wall_candle_holder`, 1),
    [
      'C ',
      'II'
    ],
    {
      I: 'minecraft:gold_ingot',
      C: '#minecraft:candles'
    }
  ).id(`mcwlights:golden_wall_candle_holder`)

  // White Paper Lamp
  event.shapeless(
    'mcwlights:white_paper_lamp',
    [
      '#mcwlights:paper_lamps',
      'minecraft:white_dye'
    ]
  ).id('genesis:white_paper_lamp_from_dyeing')

  event.replaceInput(
    { input: 'mcwlights:white_paper_lamp' },
    'mcwlights:white_paper_lamp',
    '#mcwlights:paper_lamps'
  )

  // Colored lights
  global.colors.forEach(color => {
    event.shaped(
      `3x mcwlights:${color}_lamp`,
      [
        ' W ',
        'WRW',
        ' F '
      ],
      {
        W: `minecraft:${color}_wool`,
        R: 'minecraft:redstone_lamp',
        F: '#minecraft:wooden_fences'
      }
    ).id(`mcwlights:${color}_lamp`)

    event.shaped(
      `3x mcwlights:${color}_ceiling_light`,
      [
        ' F ',
        'WRW',
        ' W '
      ],
      {
        F: '#minecraft:wooden_fences',
        W: `minecraft:${color}_wool`,
        R: 'minecraft:redstone_lamp'
      }
    ).id(`mcwlights:${color}_ceiling_light`)
  })
})