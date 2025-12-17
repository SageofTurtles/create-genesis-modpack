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
  oneXone(
    'minecraft:torch',
    'mcwbridges:bridge_torch', 1,
    'bridge_torch'
  )
  oneXone(
    'minecraft:lantern',
    'mcwbridges:bridge_lantern', 1,
    'bridge_lantern'
  )
  oneXone(
    'mcwbridges:bridge_torch',
    'minecraft:torch', 1,
    'torch'
  )
  oneXone(
    'mcwbridges:bridge_lantern',
    'minecraft:lantern', 1,
    'lantern'
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
  oneXthree(
    'minecraft:bamboo_trapdoor',
    'mcwwindows:bamboo_shutter', 3,
    'bamboo_shutter'
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
  twoXtwo(
    'create:white_sail',
    'immersive_aircraft:sail', 1,
    'large_sail'
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
  cross_one(
    'create:brass_sheet',
    'create:propeller',
    'immersive_aircraft:enhanced_propeller', 1,
    'brass_propeller'
  )
  cross_one(
    'create:iron_sheet',
    'create:propeller',
    'immersive_aircraft:propeller', 1,
    'large_propeller'
  )
  cross_one(
    'minecraft:paper',
    'minecraft:bamboo_trapdoor',
    'mcwtrpdoors:print_bamboo', 4,
    'mesh_trapdoor_print'
  )
  cross_one(
    'minecraft:bamboo_planks',
    'mcwtrpdoors:print_whispering',
    'mcwtrpdoors:bamboo_whispering_trapdoor', 4,
    'bamboo_whispering_trapdoor'
  )
  cross_one(
    'minecraft:iron_ingot',
    'minecraft:gunpowder',
    'smallships:cannon_ball', 1,
    'cannon_ball'
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
  custom(
    [
      'ABA'
    ],
    {
      A: 'create:dough',
      B: 'minecraft:honey_bottle'
    },
    'farmersdelight:honey_cookie', 8,
    'honey_cookie'
  )
  custom(
    [
      'AAA',
      'B B',
      'AAA'
    ],
    {
      A: 'create_ironworks:steel_block',
      B: 'createdeco:industrial_iron_trapdoor'
    },
    'immersive_aircraft:bomb_bay', 1,
    'bomb_bay'
  )
  custom(
    [
      ' A ',
      ' B ',
      'B B'
    ],
    {
      A: 'minecraft:spyglass',
      B: 'createaddition:copper_rod'
    },
    'immersive_aircraft:telescope', 1,
    'aerial_telescope'
  )
  custom(
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'kubejs:gatling_gun_base',
      B: 'createaddition:copper_rod',
      C: 'create:copper_sheet'
    },
    'immersive_aircraft:rotary_cannon', 1,
    'rotary_cannon'
  )
  custom(
    [
      'ABA',
      ' C ',
      ' D '
    ],
    {
      A: '#minecraft:logs',
      B: 'minecraft:crossbow',
      C: 'createaddition:iron_rod',
      D: 'create:sturdy_sheet'
    },
    'immersive_aircraft:heavy_crossbow', 1,
    'heavy_crossbow'
  )
  custom(
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'create:steam_engine',
      B: 'create:fluid_tank',
      C: 'create:blaze_burner'
    },
    'immersive_aircraft:boiler', 1,
    'basic_engine'
  )
  custom(
    [
      'ABA',
      'ACA',
      'ADA'
    ],
    {
      A: 'create_ironworks:steel_sheet',
      B: 'create:steam_engine',
      C: 'create:fluid_tank',
      D: 'create:blaze_burner'
    },
    'immersive_aircraft:steel_boiler', 1,
    'steel_boiler'
  )
  custom(
    [
      'ABA',
      'CDC'
    ],
    {
      A: 'create:iron_sheet',
      B: 'minecraft:water_bucket',
      C: 'create:copper_sheet',
      D: 'immersive_aircraft:boiler'
    },
    'immersive_aircraft:eco_engine', 1,
    'water_engine'
  )
  custom(
    [
      'ABA',
      'CDC'
    ],
    {
      A: 'create:brass_sheet',
      B: 'create:precision_mechanism',
      C: 'create:sturdy_sheet',
      D: 'immersive_aircraft:boiler'
    },
    'immersive_aircraft:engine', 1,
    'engine'
  )
  custom(
    [
      'ABA',
      'CDC'
    ],
    {
      A: 'createdeco:netherite_sheet',
      B: 'minecraft:lava_bucket',
      C: 'create_ironworks:steel_sheet',
      D: 'immersive_aircraft:boiler'
    },
    'immersive_aircraft:nether_engine', 1,
    'lava_engine'
  )
  custom(
    [
      ' A ',
      'BCB',
      'DED'
    ],
    {
      A: 'immersive_aircraft:propeller',
      B: 'immersive_aircraft:sail',
      C: 'create:precision_mechanism',
      D: 'immersive_aircraft:hull',
      E: '#create:seats'
    },
    'immersive_aircraft:gyrodyne', 1,
    'gyrodyne'
  )
  custom(
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: 'create:propeller',
      B: 'create:andesite_alloy',
      C: '#minecraft:wooden_slabs',
      D: 'minecraft:scaffolding',
      E: 'immersive_aircraft:boiler'
    },
    'immersive_aircraft:quadrocopter', 1,
    'quadrocopter'
  )
  custom(
    [
      'ABA'
    ],
    {
      A: 'create:electron_tube',
      B: 'minecraft:compass'
    },
    'immersive_aircraft:gyroscope', 1,
    'gyroscope'
  )
  custom(
    [
      'A',
      'B'
    ],
    {
      A: 'createrailwaysnavigator:advanced_display_half_panel',
      B: 'immersive_aircraft:gyroscope'
    },
    'immersive_aircraft:gyroscope_hud', 1,
    'electronic_gyroscope'
  )
  custom(
    [
      ' A ',
      'BCB'
    ],
    {
      A: 'createrailwaysnavigator:advanced_display_panel',
      B: 'immersive_aircraft:gyroscope',
      C: 'minecraft:clock'
    },
    'immersive_aircraft:gyroscope_dials', 1,
    'advanced_gyroscope'
  )
  custom(
    [
      'ABA',
      'ABA'
    ],
    {
      A: 'createdeco:andesite_sheet',
      B: '#minecraft:logs'
    },
    'immersive_aircraft:hull', 1,
    'hull'
  )
  custom(
    [
      ' AB',
      'CDA',
      'CC '
    ],
    {
      A: 'createaddition:iron_rod',
      B: 'create:iron_sheet',
      C: 'create:belt_connector',
      D: 'create:shaft'
    },
    'immersive_aircraft:improved_landing_gear', 1,
    'improved_landing_gear'
  )
  custom(
    [
      'ABA'
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:iron_bars'
    },
    'mcwbridges:iron_bridge_pier', 3,
    'iron_bridge_pier'
  )
  custom(
    [
      'ABA'
    ],
    {
      A: 'minecraft:bamboo_block',
      B: 'minecraft:bamboo'
    },
    'mcwbridges:bamboo_bridge_pier', 3,
    'bamboo_bridge_pier'
  )
  custom(
    [
      'ABA'
    ],
    {
      A: 'minecraft:stripped_bamboo_block',
      B: 'minecraft:bamboo'
    },
    'mcwbridges:dry_bamboo_bridge_pier', 3,
    'dry_bamboo_bridge_pier'
  )
  custom(
    [
      'AA',
      'AA',
      'BB'
    ],
    {
      A: 'minecraft:paper',
      B: 'minecraft:bamboo_planks'
    },
    'mcwdoors:bamboo_japanese_door', 3,
    'bamboo_shoji_door'
  )
  custom(
    [
      'AA',
      'AA',
      'BB'
    ],
    {
      A: 'minecraft:paper',
      B: 'minecraft:bamboo_slab'
    },
    'mcwdoors:bamboo_japanese2_door', 3,
    'bamboo_shoji_whole_door'
  )
  custom(
    [
      'AA',
      'BB',
      'BB'
    ],
    {
      A: 'minecraft:stick',
      B: 'minecraft:bamboo_planks'
    },
    'mcwdoors:bamboo_barn_door', 2,
    'bamboo_barn_door'
  )
  custom(
    [
      'AA',
      'BB',
      'BB'
    ],
    {
      A: 'minecraft:glass_pane',
      B: 'minecraft:bamboo_planks'
    },
    'mcwdoors:bamboo_barn_glass_door', 3,
    'bamboo_barn_glassed_door'
  )
  custom(
    [
      'AB',
      'BB',
      'AB'
    ],
    {
      A: 'minecraft:glass_pane',
      B: 'minecraft:bamboo_planks'
    },
    'mcwdoors:bamboo_modern_door', 3,
    'bamboo_modern_door'
  )
  custom(
    [
      'AB',
      'BB',
      'AB'
    ],
    {
      A: 'minecraft:bamboo_planks',
      B: 'minecraft:glass_pane'
    },
    'mcwdoors:bamboo_glass_door', 3,
    'bamboo_glass_door'
  )
  custom(
    [
      'AA',
      'BB',
      'BB'
    ],
    {
      A: 'minecraft:iron_bars',
      B: 'minecraft:bamboo_planks'
    },
    'mcwdoors:bamboo_stable_door', 3,
    'bamboo_stable_door'
  )
  custom(
    [
      '  A',
      'ABA',
      'AAA'
    ],
    {
      A: 'minecraft:bamboo_planks',
      B: 'minecraft:bamboo_slab'
    },
    'mcwdoors:bamboo_western_door', 3,
    'bamboo_western_door'
  )
  custom(
    [
      'AB',
      'BB',
      'AB'
    ],
    {
      A: 'minecraft:bamboo_block',
      B: 'minecraft:glass_pane'
    },
    'mcwdoors:bamboo_bark_glass_door', 3,
    'bamboo_bark_glass_door'
  )
  custom(
    [
      'ABC'
    ],
    {
      A: 'minecraft:yellow_dye',
      B: 'mcwdoors:metal_windowed_door',
      C: 'minecraft:black_dye'
    },
    'mcwdoors:metal_warning_door', 1,
    'metal_warning_door'
  )
  custom(
    [
      'ABA',
      'ABA'
    ],
    {
      A: 'minecraft:bamboo_block',
      B: 'minecraft:bamboo'
    },
    'mcwfences:bamboo_fence', 3,
    'green_bamboo_fence'
  )
  custom(
    [
      'A',
      'B'
    ],
    {
      A: 'minecraft:bamboo_planks',
      B: 'mcwtrpdoors:bamboo_glass_trapdoor'
    },
    'mcwtrpdoors:bamboo_barn_trapdoor', 1,
    'bamboo_barn_trapdoor'
  )
  custom(
    [
      'ABA',
      'ABA'
    ],
    {
      A: 'minecraft:bamboo_block',
      B: 'minecraft:stick'
    },
    'mcwtrpdoors:bamboo_trapdoor', 4,
    'green_bamboo_trapdoor'
  )
  custom(
    [
      'ABA',
      'ABA'
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:glass_pane'
    },
    'mcwtrpdoors:metal_trapdoor', 4,
    'metal_glass_trapdoor'
  )
  custom(
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'minecraft:yellow_dye',
      B: 'mcwtrpdoors:metal_trapdoor',
      C: 'minecraft:black_dye'
    },
    'mcwtrpdoors:metal_warning_trapdoor', 1,
    'warning_trapdoor'
  )
  custom(
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'create:electron_tube',
      B: 'minecraft:compass',
      C: 'create:brass_sheet'
    },
    'naturescompass:naturescompass', 1,
    'smart_compass'
  )

  // Add bulk recipes
  global.CHAINS.forEach(entry => {
    const { name, inputNugget, inputIngot, output } = entry
    custom(
      [
        'A',
        'B',
        'A'
      ],
      {
        A: inputNugget,
        B: inputIngot
      },
      output, 3,
      name
    )
  })

  global.CHAIN_METALS.forEach(entry => {
    const { ingot, name } = entry
    custom(
      [
        'A',
        'B',
        'B'
      ],
      {
        A: '#minecraft:candles',
        B: `minecraft:${ingot}_ingot`
      },
      `mcwlights:${name}_candle_holder`, 1,
      `${metal}_candle_holder`
    )
    custom(
      [
        'ABA',
        ' B '
      ],
      {
        A: '#minecraft:candles',
        B: `minecraft:${ingot}_ingot`
      },
      `mcwlights:${name}_double_candle_holder`, 1,
      `${metal}_double_candle_holder`
    )
    custom(
      [
        ' A ',
        'ABA',
        ' B '
      ],
      {
        A: '#minecraft:candles',
        B: `minecraft:${ingot}_ingot`
      },
      `mcwlights:${name}_triple_candle_holder`, 1,
      `${metal}_triple_candle_holder`
    )
    custom(
      [
        'A',
        'B'
      ],
      {
        A: '#minecraft:candles',
        B: `minecraft:${ingot}_ingot`
      },
      `mcwlights:${name}_low_candle_holder`, 1,
      `${metal}_low_candle_holder`
    )
    custom(
      [
        'A ',
        'BB'
      ],
      {
        A: '#minecraft:candles',
        B: `minecraft:${ingot}_ingot`
      },
      `mcwlights:${name}_wall_candle_holder`, 1,
      `${metal}_wall_candle_holder`
    )
    custom(
      [
        'ABA',
        'ABA',
        'B B'
      ],
      {
        A: '#minecraft:candles',
        B: `minecraft:${ingot}_ingot`
      },
      `mcwlights:${name}_chandelier`, 1,
      `${metal}_chandelier`
    )
    custom(
      [
        'ABA',
        'ABA'
      ],
      {
        A: '#minecraft:candles',
        B: `minecraft:${ingot}_ingot`
      },
      `mcwlights:${name}_small_chandelier`, 1,
      `${metal}_small_chandelier`
    )
  })

  global.COLORS.forEach(entry => {
    eight_one(
      '#genesis:luminous_glass_blocks',
      `minecraft:${entry}_dye`,
      `luminousblocks:luminous_${entry}_stained_glass`, 8,
      `luminous_${entry}_stained_glass`
    )
    eight_one(
      '#genesis:luminous_glass_panes',
      `minecraft:${entry}_dye`,
      `luminousblocks:luminous_${entry}_stained_glass_pane`, 8,
      `luminous_${entry}_stained_glass_pane`
    )
    custom(
      [
        ' A ',
        'BCB',
        ' B '
      ],
      {
        A: '#minecraft:wooden_fences',
        B: `minecraft:${color}_wool`,
        C: 'minecraft:redstone_lamp'
      },
      `mcwlights:${color}_ceiling_light`, 3,
      `${color}_ceiling_light`
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
    custom(
      [
        ' A ',
        'BCB',
        ' D '
      ],
      {
        A: 'minecraft:iron_ingot',
        B: `minecraft:${entry}_slab`,
        C: 'create:propeller',
        D: 'minecraft:redstone_lamp'
      },
      `mcwlights:${entry}_ceiling_fan_light`, 2,
      `${entry}_ceiling_fan_light`
    )
  })

  global.FUNGUS_SETS.forEach(entry => {
    threeXtwo(
      `mincraft:stripped_${entry}_stem`,
      `decorative_blocks:${entry}_palisade`, 6,
      `${entry}_palisade`
    )
    custom(
      [
        ' A ',
        'BCB',
        ' D '
      ],
      {
        A: 'minecraft:iron_ingot',
        B: `minecraft:${entry}_slab`,
        C: 'create:propeller',
        D: 'minecraft:redstone_lamp'
      },
      `mcwlights:${entry}_ceiling_fan_light`, 2,
      `${entry}_ceiling_fan_light`
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

  global.TRAPDOOR_PRINTS.forEach(entry => {
    custom(
      [
        'A',
        'B',
        'A'
      ],
      {
        A: 'minecraft:bamboo_planks',
        B: `mcwtrpdoors:print_${entry}`
      },
      `mcwtrpdoors:bamboo_${entry}_trapdoor`, 1,
      `bamboo_${entry}_trapdoor`
    )
  })

  global.MCW_WOODS.forEach(entry => {
    const { input, name } = entry
    custom(
      [
        'ABA',
        'ABA'
      ],
      {
        A: `minecraft:${name}_planks`,
        B: 'minecraft:glass_pane'
      },
      `mcwtrpdoors:${name}_glass_trapdoor`, 4,
      `${name}_glass_trapdoor`
    )
    custom(
      [
        'ABA',
        'ABA'
      ],
      {
        A: input,
        B: 'minecraft:glass_pane'
      },
      `mcwtrpdoors:${name}_bark_trapdoor`, 4,
      `${name}_bark_trapdoor`
    )
    if (name != 'bamboo') {
      custom(
        [
          'ABA',
          'ABA'
        ],
        {
          A: input,
          B: 'minecraft:stick'
        },
        `mcwtrpdoors:${name}_ranch_trapdoor`, 4,
        `${name}_ranch_trapdoor`
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