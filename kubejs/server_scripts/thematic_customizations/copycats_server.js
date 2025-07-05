ServerEvents.recipes(event => {
  event.remove({
    output: /.*copycat.*/
  })

  let stonecuttingCopycats = [
    { item: 'create:copycat_step', count: 4 },
    { item: 'create:copycat_panel', count: 4 },
    { item: 'copycats:copycat_slab', count: 2 },
    { item: 'copycats:copycat_stairs', count: 1 },
    { item: 'copycats:copycat_vertical_stairs', count: 1 },
    { item: 'copycats:copycat_fence', count: 1 },
    { item: 'copycats:copycat_wall', count: 1 },
    { item: 'copycats:copycat_vertical_step', count: 4 },
    { item: 'copycats:copycat_beam', count: 4 },
    { item: 'copycats:copycat_slice', count: 8 },
    { item: 'copycats:copycat_vertical_slice', count: 8 },
    { item: 'copycats:copycat_corner_slice', count: 8 },
    { item: 'copycats:copycat_ghost_block', count: 1 },
    { item: 'copycats:copycat_layer', count: 8 },
    { item: 'copycats:copycat_half_panel', count: 8 },
    { item: 'copycats:copycat_pane', count: 4 },
    { item: 'copycats:copycat_flat_pane', count: 4 },
    { item: 'copycats:copycat_byte', count: 8 },
    { item: 'copycats:copycat_byte_panel', count: 16 },
    { item: 'copycats:copycat_board', count: 6 },
    { item: 'copycats:copycat_catwalk', count: 2 },
    { item: 'copycats:copycat_box', count: 1 },
    { item: 'copycats:copycat_half_layer', count: 16 },
    { item: 'copycats:copycat_stacked_half_layer', count: 16 },
    { item: 'copycats:copycat_vertical_half_layer', count: 16 },
    { item: 'copycats:copycat_slope', count: 2 },
    { item: 'copycats:copycat_vertical_slope', count: 2 },
    { item: 'copycats:copycat_slope_layer', count: 8 },
    { item: 'copycats:copycat_door', count: 1 },
    { item: 'copycats:copycat_sliding_door', count: 1 },
    { item: 'copycats:copycat_folding_door', count: 1 },
    { item: 'copycats:copycat_trapdoor', count: 2 },
    { item: 'copycats:copycat_fence_gate', count: 1 },
    { item: 'copycats:copycat_ladder', count: 2 }
  ]

  function conversion(first, second) {
    event.shaped(
      Item.of(first, 1),
      ['I'],
      { I: second }
    )
    event.shaped(
      Item.of(second, 1),
      ['I'],
      { I: first }
    )
  }
  conversion('copycats:copycat_stairs', 'copycats:copycat_vertical_stairs')
  conversion('create:copycat_step', 'copycats:copycat_vertical_step')
  conversion('copycats:copycat_slice', 'copycats:copycat_vertical_slice')
  conversion('copycats:copycat_slope', 'copycats:copycat_vertical_slope')

  function combiningFour(input, output, count) {
    event.shaped(
      Item.of(output, count),
      [
        'II',
        'II'
      ],
      { I: input }
    )
  }
  combiningFour('create:copycat_step', 'copycats:copycat_block', 1)
  combiningFour('create:copycat_panel', 'copycats:copycat_block', 1)
  combiningFour('copycats:copycat_stairs', 'copycats:copycat_block', 3)
  combiningFour('copycats:copycat_vertical_stairs', 'copycats:copycat_block', 3)
  combiningFour('copycats:copycat_vertical_step', 'copycats:copycat_block', 1)
  combiningFour('copycats:copycat_beam', 'copycats:copycat_block', 1)
  combiningFour('copycats:copycat_pane', 'copycats:copycat_block', 1)
  combiningFour('copycats:copycat_flat_pane', 'copycats:copycat_block', 1)
  combiningFour('copycats:copycat_byte_panel', 'create:copycat_panel', 1)
  combiningFour('copycats:copycat_half_layer', 'copycats:copycat_layer', 2)
  combiningFour('copycats:copycat_vertical_half_layer', 'copycats:copycat_layer', 2)
  combiningFour('copycats:copycat_stacked_half_layer', 'copycats:copycat_layer', 2)

  function combiningTwo(input, output, count) {
    event.shaped(
      Item.of(output, count),
      [
        'II'
      ],
      { I: input }
    )
  }
  combiningTwo('copycats:copycat_slab', 'copycats:copycat_block', 1)
  combiningTwo('copycats:copycat_half_panel', 'create:copycat_panel', 1)
  combiningTwo('copycats:copycat_slope', 'copycats:copycat_block', 1)
  combiningTwo('copycats:copycat_vertical_slope', 'copycats:copycat_block', 1)

  function combiningEight(input, output, count) {
    event.shaped(
      Item.of(output, count),
      [
        'III',
        'I I',
        'III'
      ],
      { I: input }
    )
  }
  combiningEight('copycats:copycat_slice', 'copycats:copycat_block', 1)
  combiningEight('copycats:copycat_vertical_slice', 'copycats:copycat_block', 1)
  combiningEight('copycats:copycat_corner_slice', 'copycats:copycat_block', 1)
  combiningEight('copycats:copycat_layer', 'copycats:copycat_block', 1)
  combiningEight('copycats:copycat_byte', 'copycats:copycat_block', 1)
  combiningEight('copycats:copycat_slope_layer', 'copycats:copycat_block', 1)

  stonecuttingCopycats.forEach(recipe => {
    event.stonecutting(
      `${recipe.count}x ${recipe.item}`,
      'create:zinc_ingot'
    )
    event.stonecutting(
      `${recipe.count}x ${recipe.item}`,
      'copycats:copycat_block'
    )
  })

  event.stonecutting(
    'copycats:copycat_block',
    'create:zinc_ingot'
  ).id('genesis:copycat_block_from_zinc_ingot')

  event.shapeless(
    Item.of('copycats:copycat_iron_door', 1),
    [
      'copycats:copycat_door',
      'minecraft:redstone_torch'
    ]
  ).id('genesis:copycat_iron_door')

  event.shapeless(
    Item.of('copycats:copycat_iron_trapdoor', 1),
    [
      'copycats:copycat_trapdoor',
      'minecraft:redstone_torch'
    ]
  ).id('genesis:copycat_iron_trapdoor')

  event.shaped(
    Item.of('copycats:copycat_wooden_button', 8),
    [
      'BBB',
      'BCB',
      'BBB'
    ],
    {
      B: '#minecraft:wooden_buttons',
      C: 'copycats:copycat_block'
    }
  ).id('genesis:copycat_wooden_button')

  event.shaped(
    Item.of('copycats:copycat_stone_button', 8),
    [
      'BBB',
      'BCB',
      'BBB'
    ],
    {
      B: '#minecraft:stone_buttons',
      C: 'copycats:copycat_block'
    }
  ).id('genesis:copycat_stone_button')

  event.shaped(
    Item.of('copycats:copycat_wooden_pressure_plate', 4),
    [
      ' P ',
      'PCP',
      ' P '
    ],
    {
      P: '#minecraft:wooden_pressure_plates',
      C: 'copycats:copycat_block'
    }
  ).id('genesis:copycat_wooden_pressure_plate')

  event.shaped(
    Item.of('copycats:copycat_stone_pressure_plate', 4),
    [
      ' P ',
      'PCP',
      ' P '
    ],
    {
      P: ['minecraft:stone_pressure_plate', 'minecraft:polished_blackstone_pressure_plate'],
      C: 'copycats:copycat_block'
    }
  ).id('genesis:copycat_stone_pressure_plate')

  event.shaped(
    Item.of('copycats:copycat_light_weighted_pressure_plate', 4),
    [
      ' P ',
      'PCP',
      ' P '
    ],
    {
      P: 'minecraft:light_weighted_pressure_plate',
      C: 'copycats:copycat_block'
    }
  ).id('genesis:copycat_light_weighted_pressure_plate')

  event.shaped(
    Item.of('copycats:copycat_heavy_weighted_pressure_plate', 4),
    [
      ' P ',
      'PCP',
      ' P '
    ],
    {
      P: 'minecraft:heavy_weighted_pressure_plate',
      C: 'copycats:copycat_block'
    }
  ).id('genesis:copycat_heavy_weighted_pressure_plate')

  event.shaped(
    Item.of('copycats:copycat_fluid_pipe', 8),
    [
      'PPP',
      'PCP',
      'PPP'
    ],
    {
      P: 'create:fluid_pipe',
      C: 'copycats:copycat_block'
    }
  ).id('genesis:copycat_fluid_pipe')

  event.shaped(
    Item.of('copycats:copycat_shaft', 8),
    [
      'SSS',
      'SCS',
      'SSS'
    ],
    {
      S: 'create:shaft',
      C: 'copycats:copycat_block'
    }
  ).id('genesis:copycat_shaft')

  event.shaped(
    Item.of('copycats:copycat_cogwheel', 4),
    [
      ' W ',
      'WCW',
      ' W '
    ],
    {
      W: 'create:cogwheel',
      C: 'copycats:copycat_block'
    }
  ).id('genesis:copycat_cogwheel')

  event.shaped(
    Item.of('copycats:copycat_large_cogwheel', 4),
    [
      ' W ',
      'WCW',
      ' W '
    ],
    {
      W: 'create:large_cogwheel',
      C: 'copycats:copycat_block'
    }
  ).id('genesis:copycat_large_cogwheel')

  event.shaped(
    Item.of('copycats:copycat_stacked_half_layer', 2),
    [
      'II'
    ],
    { I: 'copycats:copycat_half_layer' }
  ).id('genesis:copycat_stacked_half_layer_crafting')

  event.shaped(
    Item.of('copycats:copycat_vertical_half_layer', 2),
    [
      'I',
      'I'
    ],
    { I: 'copycats:copycat_half_layer' }
  ).id('genesis:copycat_vertical_half_layer_crafting')

  event.shaped(
    Item.of('copycats:copycat_half_layer', 1),
    [
      'I'
    ],
    { I: 'copycats:copycat_vertical_half_layer' }
  ).id('genesis:copycat_half_layer_from_vertical_crafting')

  event.shaped(
    Item.of('copycats:copycat_half_layer', 1),
    [
      'I'
    ],
    { I: 'copycats:copycat_stacked_half_layer' }
  ).id('genesis:copycat_half_layer_from_stacked_crafting')

  event.shaped(
    Item.of('railways:copycat_headstock_link_and_pin', 1),
    [
      ' D ',
      'CCC'
    ],
    {
      D: '#railways:deco_couplers',
      C: 'create:copycat_panel'
    }
  ).id('genesis:copycat_headstock')

})