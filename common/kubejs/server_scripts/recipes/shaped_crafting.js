ServerEvents.recipes(event => {
  // Define functions to create recipes
  const custom = (pattern, keys, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      pattern,
      keys
    ).id(`genesis:${recipeId}_shaped`)
  }
  const oneXone = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['A'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const oneXthree = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['A', 'A', 'A'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const twoXone = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const twoXtwo = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AA', 'AA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const twoXthree = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AA', 'AA', 'AA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const threeXone = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AAA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const threeXtwo = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AAA', 'AAA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const threeXthree = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AAA', 'AAA', 'AAA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const donut = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AAA', 'A A', 'AAA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const eight_one = (inputOuter, inputCenter, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AAA', 'ABA', 'AAA'],
      { A: inputOuter, B: inputCenter }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const cross_one = (inputOuter, inputCenter, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      [' A ', 'ABA', 'A A'],
      { A: inputOuter, B: inputCenter }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const stairs = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['A', 'AA', 'AAA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }

  // Add 1x1 recipes
  oneXone(
    'minecraft:stone',
    'minecraft:stone_button', 8,
    'stone_button'
  )
  oneXone(
    'minecraft:polished_blackstone',
    'minecraft:polished_blackstone_button', 8,
    'polished_blackstone_button'
  )
  oneXone(
    'create:rose_quartz_block',
    'create:rose_quartz', 9,
    'rose_quartz'
  )
  oneXone(
    'copycats:copycat_vertical_stairs',
    'copycats:copycat_stairs', 1,
    'copycat_stairs_to_vertical'
  )
  oneXone(
    'copycats:copycat_vertical_slice',
    'copycats:copycat_slice', 1,
    'copycat_slice_to_vertical'
  )
  oneXone(
    'copycats:copycat_vertical_slope',
    'copycats:copycat_slope', 1,
    'copycat_slope_to_vertical'
  )
  oneXone(
    'copycats:copycat_vertical_step',
    'create:copycat_step', 1,
    'copycat_step_to_vertical'
  )
  oneXone(
    'copycats:copycat_stairs',
    'copycats:copycat_vertical_stairs', 1,
    'copycat_stairs_to_horizontal'
  )
  oneXone(
    'copycats:copycat_slice',
    'copycats:copycat_vertical_slice', 1,
    'copycat_slice_to_horizontal'
  )
  oneXone(
    'copycats:copycat_slope',
    'copycats:copycat_vertical_slope', 1,
    'copycat_slope_to_horizontal'
  )
  oneXone(
    'create:copycat_step',
    'copycats:copycat_vertical_step', 1,
    'copycat_step_to_horizontal'
  )
  oneXone(
    'copycats:copycat_vertical_half_layer',
    'copycats:copycat_half_layer', 1,
    'copycat_half_layer_from_vertical'
  )
  oneXone(
    'copycats:copycat_stacked_half_layer',
    'copycats:copycat_half_layer', 1,
    'copycat_half_layer_from_stacked'
  )
  oneXone(
    'createrailwaysnavigator:advanced_display_slab',
    'createrailwaysnavigator:advanced_display', 1,
    'advanced_display_from_slab'
  )
  oneXone(
    'createrailwaysnavigator:advanced_display',
    'createrailwaysnavigator:advanced_display_slab', 1,
    'advanced_display_slab_from_advanced_display'
  )

  // Add 1x2 recipes
  oneXtwo(
    'copycats:copycat_half_layer',
    'copycats:copycat_vertical_half_layer', 2,
    'copycat_vertical_half_layer'
  )

  // Add 1x3 recipes
  oneXthree(
    'create:iron_sheet',
    'mcwroofs:gutter_middle', 3,
    'downspout'
  )
  oneXthree(
    'minecraft:string',
    'farmersdelight:rope', 1,
    'rope_from_string'
  )
  oneXthree(
    'supplementaries:flax',
    'farmersdelight:rope', 2,
    'rope_from_flax'
  )
  oneXthree(
    'famersdelight:straw',
    'farmersdelight:rope', 2,
    'rope_from_straw'
  )

  // Add 2x1 recipes
  twoXone(
    'minecraft:stone',
    'minecraft:stone_pressure_plate', 8,
    'stone_pressure_plate'
  )
  twoXone(
    'minecraft:polished_blackstone',
    'minecraft:polished_blackstone_pressure_plate', 8,
    'polished_blackstone_pressure_plate'
  )
  twoXone(
    'minecraft:iron_ingot',
    'minecraft:heavy_weighted_pressure_plate', 2,
    'heavy_weighted_pressure_plate'
  )
  twoXone(
    'minecraft:gold_ingot',
    'minecraft:light_weighted_pressure_plate', 2,
    'light_weighted_pressure_plate'
  )
  twoXone(
    'copycats:copycat_slab',
    'copycats:copycat_block', 1,
    'copycat_block_from_slab'
  )
  twoXone(
    'copycats:copycat_half_panel',
    'create:copycat_panel', 1,
    'copycat_panel_from_half_panel'
  )
  twoXone(
    'copycats:copycat_slope',
    'copycats:copycat_block', 1,
    'copycat_block_from_slope'
  )
  twoXone(
    'copycats:copycat_vertical_slope',
    'copycats:copycat_block', 1,
    'copycat_block_from_vertical_slope'
  )
  twoXone(
    'copycats:copycat_half_layer',
    'copycats:copycat_stacked_half_layer', 2,
    'copycat_stacked_half_layer'
  )
  twoXone(
    'createrailwaysnavigator:advanced_display',
    'createrailwaysnavigator:advanced_display_block', 1,
    'advanced_display_block_from_advanced_display'
  )
  twoXone(
    'createrailwaysnavigator:advanced_display_slab',
    'createrailwaysnavigator:advanced_display_block', 1,
    'advanced_display_block_from_slab'
  )
  twoXone(
    'createrailwaysnavigator:advanced_display_sloped',
    'createrailwaysnavigator:advanced_display_block', 1,
    'advanced_display_block_from_sloped'
  )
  twoXone(
    'createrailwaysnavigator:advanced_display_half_panel',
    'createrailwaysnavigator:advanced_display_panel', 1,
    'advanced_display_panel_from_half_panel'
  )

  // Add 2x2 recipes
  twoXtwo(
    'create:copycat_step',
    'copycats:copycat_block', 1,
    'copycat_block_from_step'
  )
  twoXtwo(
    'copycats:copycat_vertical_step',
    'copycats:copycat_block', 1,
    'copycat_block_from_vertical_step'
  )
  twoXtwo(
    'copycats:copycat_beam',
    'copycats:copycat_block', 3,
    'copycat_block_from_beam'
  )
  twoXtwo(
    'create:copycat_panel',
    'copycats:copycat_block', 1,
    'copycat_block_from_panel'
  )
  twoXtwo(
    'copycats:copycat_stairs',
    'copycats:copycat_block', 3,
    'copycat_block_from_stairs'
  )
  twoXtwo(
    'copycats:copycat_vertical_stairs',
    'copycats:copycat_block', 3,
    'copycat_block_from_vertical_stairs'
  )
  twoXtwo(
    'copycats:copycat_pane',
    'copycats:copycat_block', 1,
    'copycat_block_from_pane'
  )
  twoXtwo(
    'copycats:copycat_flat_pane',
    'copycats:copycat_block', 1,
    'copycat_block_from_flat_pane'
  )
  twoXtwo(
    'copycats:copycat_byte_panel',
    'create:copycat_panel', 1,
    'copycat_panel_from_byte_panel'
  )
  twoXtwo(
    'copycats:copycat_half_layer',
    'copycats:copycat_layer', 2,
    'copycat_layer_from_half_layer'
  )
  twoXtwo(
    'copycats:copycat_vertical_half_layer',
    'copycats:copycat_layer', 2,
    'copycat_layer_from_vertical_half_layer'
  )
  twoXtwo(
    'copycats:copycat_stacked_half_layer',
    'copycats:copycat_layer', 2,
    'copycat_layer_from_stacked_half_layer'
  )
  twoXtwo(
    'createdeco:andesite_sheet',
    'createdeco:andesite_sheet_metal', 1,
    'andesite_sheet_metal'
  )
  twoXtwo(
    'createdeco:industrial_iron_sheet',
    'createdeco:industrial_iron_sheet_metal', 1,
    'industrial_iron_sheet_metal'
  )
  twoXtwo(
    'create:brass_sheet',
    'createdeco:brass_sheet_metal', 1,
    'brass_sheet_metal'
  )
  twoXtwo(
    'create:copper_sheet',
    'createdeco:copper_sheet_metal', 1,
    'copper_sheet_metal'
  )
  twoXtwo(
    'create:iron_sheet',
    'createdeco:iron_sheet_metal', 1,
    'iron_sheet_metal'
  )
  twoXtwo(
    'create:zinc_sheet',
    'createdeco:zinc_sheet_metal', 1,
    'zinc_sheet_metal'
  )
  twoXtwo(
    'createrailwaysnavigator:advanced_display_small',
    'createrailwaysnavigator:advanced_display_block', 1,
    'advanced_display_block_from_small'
  )
  twoXtwo(
    'createrailwaysnavigator:advanced_display_panel',
    'createrailwaysnavigator:advanced_display_block', 1,
    'advanced_display_block_from_panel'
  )
  twoXtwo(
    'minecraft:iron_bars',
    'decorative_blocks:bar_panel', 2,
    'bar_panel'
  )

  // Add 3x1 recipes
  threeXone(
    'create:iron_sheet',
    'mcwroofs:gutter_base', 3,
    'gutter'
  )

  // Add 3x2 recipes
  threeXtwo(
    'mincraft:stripped_bamboo_block',
    'decorative_blocks:bamboo_palisade', 6,
    'bamboo_palisade'
  )

  // Add 3x3 recipes
  threeXthree(
    'create:rose_quartz',
    'create:rose_quartz_block', 1,
    'rose_quartz_block'
  )

  // Add donut recipes
  donut(
    'copycats:copycat_slice',
    'copycats:copycat_block', 1,
    'copycat_block_from_slice'
  )
  donut(
    'copycats:copycat_vertical_slice',
    'copycats:copycat_block', 1,
    'copycat_block_from_vertical_slice'
  )
  donut(
    'copycats:copycat_corner_slice',
    'copycats:copycat_block', 1,
    'copycat_block_from_corner_slice'
  )
  donut(
    'copycats:copycat_layer',
    'copycats:copycat_block', 1,
    'copycat_block_from_layer'
  )
  donut(
    'copycats:copycat_slope_layer',
    'copycats:copycat_block', 1,
    'copycat_block_from_slope_layer'
  )
  donut(
    'copycats:copycat_byte',
    'copycats:copycat_block', 1,
    'copycat_block_from_byte'
  )

  // Add 8+1 recipes
  eight_one(
    '#minecraft:wooden_buttons',
    'copycats:copycat_block',
    'copycats:copycat_wooden_button', 8,
    'copycat_wooden_button'
  )
  eight_one(
    '#minecraft:stone_buttons',
    'copycats:copycat_block',
    'copycats:copycat_stone_button', 8,
    'copycat_stone_button'
  )
  eight_one(
    'create:fluid_pipe',
    'copycats:copycat_block',
    'copycats:copycat_fluid_pipe', 8,
    'copycat_fluid_pipe'
  )
  eight_one(
    'create:shaft',
    'copycats:copycat_block',
    'copycats:copycat_shaft', 8,
    'copycat_shaft'
  )

  // Add cross+1 recipes
  cross_one(
    '#minecraft:wooden_pressure_plates',
    'copycats:copycat_block',
    'copycats:copycat_wooden_pressure_plate', 4,
    'copycat_wooden_pressure_plate'
  )
  cross_one(
    '#genesis:stone_pressure_plates',
    'copycats:copycat_block',
    'copycats:copycat_stone_pressure_plate', 4,
    'copycat_stone_pressure_plate'
  )
  cross_one(
    'minecraft:light_weighted_pressure_plate',
    'copycats:copycat_block',
    'copycats:copycat_light_weighted_pressure_plate', 4,
    'copycat_light_weighted_pressure_plate'
  )
  cross_one(
    'minecraft:heavy_weighted_pressure_plate',
    'copycats:copycat_block',
    'copycats:copycat_heavy_weighted_pressure_plate', 4,
    'copycat_heavy_weighted_pressure_plate'
  )
  cross_one(
    'create:cogwheel',
    'copycats:copycat_block',
    'copycats:copycat_cogwheel', 4,
    'copycat_cogwheel'
  )
  cross_one(
    'create:large_cogwheel',
    'copycats:copycat_block',
    'copycats:copycat_large_cogwheel', 4,
    'copycat_large_cogwheel'
  )

  // Add custom recipes
  custom(
    [
      ' A ',
      'BCB',
      'B B'
    ],
    {
      A: 'create_ironworks:bronze_block',
      B: 'minecraft:stick',
      C: 'create_ironworks:bronze_ingot'
    },
    'minecraft:bell', 1,
    'bell'
  )
  custom(
    [
      ' A ',
      'BCB',
      'B B'
    ],
    {
      A: 'create:brass_block',
      B: 'minecraft:stick',
      C: 'create:brass_ingot'
    },
    'create:peculiar_bell', 1,
    'peculiar_bell'
  )
  custom(
    [
      ' A ',
      'BCD',
      ' E '
    ],
    {
      A: 'create_aquatic_ambitions:spiky_shell',
      B: 'create:powdered_obsidian',
      C: 'minecraft:ender_pearl',
      D: 'createaddition:diamond_grit',
      E: 'minecraft:blaze_powder'
    },
    'kubejs:inert_ender_eye', 1,
    'inert_ender_eye'
  )
  custom(
    [
      ' A ',
      'BCB',
      'DDD'
    ],
    {
      A: 'create:electron_tube',
      B: 'minecraft:redstone_torch',
      C: 'create:brass_sheet',
      D: '#bookshelf:stones'
    },
    'create_connected:sequenced_pulse_generator', 1,
    'sequenced_pulse_generator'
  )
  custom(
    [
      ' A ',
      'BCB',
      ' D '
    ],
    {
      A: 'create:electron_tube',
      B: 'create:shaft',
      C: 'createaddition:modular_accumulator',
      D: 'create:stockpile_switch'
    },
    'create_connected:kinetic_battery', 2,
    'kinetic_battery'
  )
  custom(
    [
      ' A ',
      'BBB'
    ],
    {
      A: '#railways:deco_couplers',
      B: 'create:copycat_panel'
    },
    'railways:copycat_headstock_link_and_pin', 1,
    'copycat_headstock_link_and_pin'
  )
  custom(
    [
      'AAA',
      'A A',
      'BCB'
    ],
    {
      A: 'createaddition:iron_rod',
      B: 'create:iron_sheet',
      C: 'minecraft:netherrack'
    },
    'create:empty_blaze_burner', 1,
    'empty_blaze_burner'
  )
  custom(
    [
      'ABA',
      'BCB'
    ],
    {
      A: 'minecraft:iron_nugget',
      B: 'createdeco:industrial_iron_ingot',
      C: '#forge:glass_colorless'
    },
    'create:industrial_iron_window', 2,
    'industrial_iron_window'
  )
  custom(
    [
      ' A ',
      'ABA'
    ],
    {
      A: 'minecraft:iron_nugget',
      B: '#forge:glass_colorless'
    },
    'create:ornate_iron_window', 1,
    'ornate_iron_window'
  )
  custom(
    [
      'ABA',
      'CCC',
      'ABA'
    ],
    {
      A: 'create:andesite_alloy',
      B: 'create:sturdy_sheet',
      C: 'create:display_board'
    },
    'createrailwaysnavigator:advanced_display_block', 4,
    'advanced_display_block'
  )
  custom(
    [
      'AB',
      'BA'
    ],
    {
      A: 'minecraft:dir',
      B: 'minecraft:cobblestone'
    },
    'decorative_blocks:rocky_dirt', 4,
    'rocky_dirt'
  )

  // Add bulk recipes
  global.CHAINS.forEach(entry => {
    const { name, inputNugget, inputIngot, output } = entry
    custom(
      [
        '1',
        '2',
        '1'
      ],
      {
        1: inputNugget,
        2: inputIngot
      },
      output, 3,
      name
    )
  })

  global.PLANK_SETS.forEach(entry => {
    oneXone(
      `minecraft:${entry}_planks`,
      `minecraft:${entry}_button`, 8,
      `${entry}_button`
    )
    twoXone(
      `minecraft:${entry}_planks`,
      `minecraft:${entry}_pressure_plate`, 8,
      `${entry}_pressure_plate`
    )
    custom(
      [
        'A',
        'B'
      ],
      {
        A: `minecraft:${entry}_slab`,
        B: `minecraft:${entry}_fence`
      },
      `decorative_blocks:${entry}_seat`, 2,
      `${entry}_seat`
    )
    custom(
      [
        'AA',
        'A '
      ],
      {
        A: `minecraft:${entry}_planks`
      },
      `decorative_blocks:${entry}_support`, 4,
      `${entry}_support`
    )
  })

  global.LOG_SETS.forEach(entry => {
    threeXtwo(
      `mincraft:stripped_${entry}_log`,
      `decorative_blocks:${entry}_palisade`, 6,
      `${entry}_palisade`
    )
  })

  global.FUNGUS_SETS.forEach(entry => {
    threeXtwo(
      `mincraft:stripped_${entry}_stem`,
      `decorative_blocks:${entry}_palisade`, 6,
      `${entry}_palisade`
    )
  })

  global.SAWING_BLOCKS.forEach(entry => {
    const { name, block, stair, slab } = entry
    threeXone(
      block,
      slab, 6,
      `${name}_slab`
    )
    twoXone(
      slab,
      block, 1,
      `${name}_block_from_slab`
    )
    stairs(
      block,
      stairs, 8,
      `${name}_stairs`
    )
    twoXtwo(
      stair,
      block, 3,
      `${name}_block_from_stairs`
    )
  })

  global.STONECUTTING_BLOCKS.forEach(entry => {
    const { name, block, stair, slab, wall } = entry
    threeXone(
      block,
      slab, 6,
      `${name}_slab`
    )
    twoXone(
      slab,
      block, 1,
      `${name}_block_from_slab`
    )
    if (stairs != null) {
      stairs(
        block,
        stair, 8,
        `${name}_stairs`
      )
      twoXtwo(
        stair,
        block, 3,
        `${name}_block_from_stairs`
      )
    }
    if (wall != null) {
      threeXtwo(
        block,
        wall, 6,
        `${name}_wall`
      )
    }
  })

  global.BASIC_DOORS.forEach(entry => {
    const { name, input, door, trapdoor } = entry
    twoXthree(
      input,
      door, 3,
      `${name}_door`
    )
    threeXtwo(
      input,
      trapdoor, 4,
      `${name}_trapdoor`
    )
  })

  global.INGOT_DOORS.forEach(entry => {
    const { name, input, door, trapdoor } = entry
    twoXthree(
      input,
      door, 1,
      `${name}_door`
    )
    twoXtwo(
      input,
      trapdoor, 1,
      `${name}_trapdoor`
    )
  })
})