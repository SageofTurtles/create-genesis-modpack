ServerEvents.recipes(event => {
  // Define functions to create recipes
  const custom = (recipeId, pattern, keys, output, count) => {
    event.shaped(
      Item.of(output, count),
      pattern,
      keys
    ).id(`genesis:${recipeId}_shaped`)
  }
  const one_by_one = (recipeId, input, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['A'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const one_by_two = (recipeId, input, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['A', 'A'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const one_by_three = (recipeId, input, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['A', 'A', 'A'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const two_by_one = (recipeId, input, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['AA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const two_by_two = (recipeId, input, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['AA', 'AA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const two_by_three = (recipeId, input, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['AA', 'AA', 'AA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const three_by_one = (recipeId, input, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['AAA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const three_by_two = (recipeId, input, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['AAA', 'AAA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const three_by_three = (recipeId, input, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['AAA', 'AAA', 'AAA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const eight = (recipeId, input, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['AAA', 'A A', 'AAA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const eight_one = (recipeId, edgeInput, centerInput, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['AAA', 'ABA', 'AAA'],
      { A: edgeInput, B: centerInput }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const four_one = (recipeId, edgeInput, centerInput, output, count) => {
    event.shaped(
      Item.of(output, count),
      [' A ', 'ABA', ' A '],
      { A: edgeInput, B: centerInput }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const stair = (recipeId, input, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['A  ', 'AA ', 'AAA'],
      { A: input }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const A_B_B = (recipeId, inputA, inputB, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['A', 'B', 'B'],
      { A: inputA, B: inputB }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const A_B_C = (recipeId, inputA, inputB, inputC, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['A', 'B', 'C'],
      { A: inputA, B: inputB, C: inputC }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const A_B = (recipeId, inputA, inputB, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['A', 'B'],
      { A: inputA, B: inputB }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const A_BCB_D = (recipeId, inputA, inputB, inputC, inputD, output, count) => {
    event.shaped(
      Item.of(output, count),
      [' A ', 'BCB', ' D '],
      { A: inputA, B: inputB, C: inputC, D: inputD }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const A_BCB_DDD = (recipeId, inputA, inputB, inputC, inputD, output, count) => {
    event.shaped(
      Item.of(output, count),
      [' A ', 'BCB', 'DDD'],
      { A: inputA, B: inputB, C: inputC, D: inputD }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const AAA_ABA = (recipeId, inputA, inputB, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['AAA', 'ABA'],
      { A: inputA, B: inputB }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const ABA_ABA = (recipeId, inputA, inputB, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['ABA', 'ABA'],
      { A: inputA, B: inputB }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const ABA_CDC = (recipeId, inputA, inputB, inputC, inputD, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['ABA', 'CDC'],
      { A: inputA, B: inputB, C: inputC, D: inputD }
    ).id(`genesis:${recipeId}_shaped`)
  }
  const ABA = (recipeId, inputA, inputB, output, count) => {
    event.shaped(
      Item.of(output, count),
      ['ABA'],
      { A: inputA, B: inputB }
    ).id(`genesis:${recipeId}_shaped`)
  }

  // Add single-input recipes
  eight('copycat_block_from_byte', 'copycats:copycat_byte', 'copycats:copycat_block', 1)
  eight('copycat_block_from_corner_slice', 'copycats:copycat_corner_slice', 'copycats:copycat_block', 1)
  eight('copycat_block_from_layer', 'copycats:copycat_layer', 'copycats:copycat_block', 1)
  eight('copycat_block_from_slice', 'copycats:copycat_slice', 'copycats:copycat_block', 1)
  eight('copycat_block_from_slope_layer', 'copycats:copycat_slope_layer', 'copycats:copycat_block', 1)
  eight('copycat_block_from_vertical_slice', 'copycats:copycat_vertical_slice', 'copycats:copycat_block', 1)
  one_by_one('advanced_display_from_slab', 'createrailwaysnavigator:advanced_display_slab', 'createrailwaysnavigator:advanced_display', 1)
  one_by_one('advanced_display_slab_from_advanced_display', 'createrailwaysnavigator:advanced_display', 'createrailwaysnavigator:advanced_display_slab', 1)
  one_by_one('bridge_lantern', 'minecraft:lantern', 'mcwbridges:bridge_lantern', 1)
  one_by_one('bridge_torch', 'minecraft:torch', 'mcwbridges:bridge_torch', 1)
  one_by_one('copycat_half_layer_from_stacked', 'copycats:copycat_stacked_half_layer', 'copycats:copycat_half_layer', 1)
  one_by_one('copycat_half_layer_from_vertical', 'copycats:copycat_vertical_half_layer', 'copycats:copycat_half_layer', 1)
  one_by_one('copycat_slice_to_horizontal', 'copycats:copycat_slice', 'copycats:copycat_vertical_slice', 1)
  one_by_one('copycat_slice_to_vertical', 'copycats:copycat_vertical_slice', 'copycats:copycat_slice', 1)
  one_by_one('copycat_slope_to_horizontal', 'copycats:copycat_slope', 'copycats:copycat_vertical_slope', 1)
  one_by_one('copycat_slope_to_vertical', 'copycats:copycat_vertical_slope', 'copycats:copycat_slope', 1)
  one_by_one('copycat_stairs_to_horizontal', 'copycats:copycat_stairs', 'copycats:copycat_vertical_stairs', 1)
  one_by_one('copycat_stairs_to_vertical', 'copycats:copycat_vertical_stairs', 'copycats:copycat_stairs', 1)
  one_by_one('copycat_step_to_horizontal', 'create:copycat_step', 'copycats:copycat_vertical_step', 1)
  one_by_one('copycat_step_to_vertical', 'copycats:copycat_vertical_step', 'create:copycat_step', 1)
  one_by_one('honeycomb', 'minecraft:honeycomb_block', 'minecraft:honeycomb', 4)
  one_by_one('lantern', 'mcwbridges:bridge_lantern', 'minecraft:lantern', 1)
  one_by_one('polished_blackstone_button', 'minecraft:polished_blackstone', 'minecraft:polished_blackstone_button', 8)
  one_by_one('rose_quartz', 'create:rose_quartz_block', 'create:rose_quartz', 9)
  one_by_one('snow', 'minecraft:snow_block', 'minecraft:snow', 8)
  one_by_one('stone_button', 'minecraft:stone', 'minecraft:stone_button', 8)
  one_by_one('torch', 'mcwbridges:bridge_torch', 'minecraft:torch', 1)
  one_by_three('bamboo_shutter', 'minecraft:bamboo_trapdoor', 'mcwwindows:bamboo_shutter', 3)
  one_by_three('downspout', 'create:iron_sheet', 'mcwroofs:gutter_middle', 3)
  one_by_three('rope_from_flax', 'supplementaries:flax', 'farmersdelight:rope', 2)
  one_by_three('rope_from_straw', 'farmersdelight:straw', 'farmersdelight:rope', 2)
  one_by_three('rope_from_string', 'minecraft:string', 'farmersdelight:rope', 1)
  one_by_two('copycat_vertical_half_layer', 'copycats:copycat_half_layer', 'copycats:copycat_vertical_half_layer', 2)
  three_by_one('gutter', 'create:iron_sheet', 'mcwroofs:gutter_base', 3)
  three_by_one('paper', 'farmersdelight:tree_bark', 'minecraft:paper', 3)
  three_by_three('rose_quartz_block', 'create:rose_quartz', 'create:rose_quartz_block', 1)
  two_by_one('advanced_display_block_from_advanced_display', 'createrailwaysnavigator:advanced_display', 'createrailwaysnavigator:advanced_display_block', 1)
  two_by_one('advanced_display_block_from_slab', 'createrailwaysnavigator:advanced_display_slab', 'createrailwaysnavigator:advanced_display_block', 1)
  two_by_one('advanced_display_block_from_sloped', 'createrailwaysnavigator:advanced_display_sloped', 'createrailwaysnavigator:advanced_display_block', 1)
  two_by_one('advanced_display_panel_from_half_panel', 'createrailwaysnavigator:advanced_display_half_panel', 'createrailwaysnavigator:advanced_display_panel', 1)
  two_by_one('copycat_block_from_slab', 'copycats:copycat_slab', 'copycats:copycat_block', 1)
  two_by_one('copycat_block_from_slope', 'copycats:copycat_slope', 'copycats:copycat_block', 1)
  two_by_one('copycat_block_from_vertical_slope', 'copycats:copycat_vertical_slope', 'copycats:copycat_block', 1)
  two_by_one('copycat_panel_from_half_panel', 'copycats:copycat_half_panel', 'create:copycat_panel', 1)
  two_by_one('copycat_stacked_half_layer', 'copycats:copycat_half_layer', 'copycats:copycat_stacked_half_layer', 2)
  two_by_one('heavy_weighted_pressure_plate', 'minecraft:iron_ingot', 'minecraft:heavy_weighted_pressure_plate', 2)
  two_by_one('light_weighted_pressure_plate', 'minecraft:gold_ingot', 'minecraft:light_weighted_pressure_plate', 2)
  two_by_one('polished_blackstone_pressure_plate', 'minecraft:polished_blackstone', 'minecraft:polished_blackstone_pressure_plate', 8)
  two_by_one('stone_pressure_plate', 'minecraft:stone', 'minecraft:stone_pressure_plate', 8)
  two_by_two('advanced_display_block_from_panel', 'createrailwaysnavigator:advanced_display_panel', 'createrailwaysnavigator:advanced_display_block', 1)
  two_by_two('advanced_display_block_from_small', 'createrailwaysnavigator:advanced_display_small', 'createrailwaysnavigator:advanced_display_block', 1)
  two_by_two('andesite_sheet_metal', 'createdeco:andesite_sheet', 'createdeco:andesite_sheet_metal', 1)
  two_by_two('bar_panel', 'minecraft:iron_bars', 'decorative_blocks:bar_panel', 2)
  two_by_two('brass_sheet_metal', 'create:brass_sheet', 'createdeco:brass_sheet_metal', 1)
  two_by_two('copper_sheet_metal', 'create:copper_sheet', 'createdeco:copper_sheet_metal', 1)
  two_by_two('copycat_block_from_beam', 'copycats:copycat_beam', 'copycats:copycat_block', 3)
  two_by_two('copycat_block_from_flat_pane', 'copycats:copycat_flat_pane', 'copycats:copycat_block', 1)
  two_by_two('copycat_block_from_pane', 'copycats:copycat_pane', 'copycats:copycat_block', 1)
  two_by_two('copycat_block_from_panel', 'create:copycat_panel', 'copycats:copycat_block', 1)
  two_by_two('copycat_block_from_stairs', 'copycats:copycat_stairs', 'copycats:copycat_block', 3)
  two_by_two('copycat_block_from_step', 'create:copycat_step', 'copycats:copycat_block', 1)
  two_by_two('copycat_block_from_vertical_stairs', 'copycats:copycat_vertical_stairs', 'copycats:copycat_block', 3)
  two_by_two('copycat_block_from_vertical_step', 'copycats:copycat_vertical_step', 'copycats:copycat_block', 1)
  two_by_two('copycat_layer_from_half_layer', 'copycats:copycat_half_layer', 'copycats:copycat_layer', 2)
  two_by_two('copycat_layer_from_stacked_half_layer', 'copycats:copycat_stacked_half_layer', 'copycats:copycat_layer', 2)
  two_by_two('copycat_layer_from_vertical_half_layer', 'copycats:copycat_vertical_half_layer', 'copycats:copycat_layer', 2)
  two_by_two('copycat_panel_from_byte_panel', 'copycats:copycat_byte_panel', 'create:copycat_panel', 1)
  two_by_two('industrial_iron_sheet_metal', 'createdeco:industrial_iron_sheet', 'createdeco:industrial_iron_sheet_metal', 1)
  two_by_two('iron_sheet_metal', 'create:iron_sheet', 'createdeco:iron_sheet_metal', 1)
  two_by_two('large_sail', 'create:white_sail', 'immersive_aircraft:sail', 1)
  two_by_two('zinc_sheet_metal', 'createdeco:zinc_sheet', 'createdeco:zinc_sheet_metal', 1)

  // Add multiple-input recipes
  eight_one('copycat_fluid_pipe', 'create:fluid_pipe', 'copycats:copycat_block', 'copycats:copycat_fluid_pipe', 8)
  eight_one('copycat_shaft', 'create:shaft', 'copycats:copycat_block', 'copycats:copycat_shaft', 8)
  eight_one('copycat_stone_button', '#minecraft:stone_buttons', 'copycats:copycat_block', 'copycats:copycat_stone_button', 8)
  eight_one('copycat_wooden_button', '#minecraft:wooden_buttons', 'copycats:copycat_block', 'copycats:copycat_wooden_button', 8)
  eight_one('crying_obsidian', 'minecraft:obsidian', 'minecraft:ghast_tear', 'minecraft:crying_obsidian', 8)
  eight_one('safe', 'create_ironworks:steel_ingot', '#minecraft:shulker_boxes', 'supplementaries:safe', 1)
  four_one('brass_propeller', 'create:brass_sheet', 'create:propeller', 'immersive_aircraft:enhanced_propeller', 1)
  four_one('cannon_ball', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'smallships:cannon_ball', 1)
  four_one('copycat_cogwheel', 'create:cogwheel', 'copycats:copycat_block', 'copycats:copycat_cogwheel', 4)
  four_one('copycat_heavy_weighted_pressure_plate', 'minecraft:heavy_weighted_pressure_plate', 'copycats:copycat_block', 'copycats:copycat_heavy_weighted_pressure_plate', 4)
  four_one('copycat_large_cogwheel', 'create:large_cogwheel', 'copycats:copycat_block', 'copycats:copycat_large_cogwheel', 4)
  four_one('copycat_light_weighted_pressure_plate', 'minecraft:light_weighted_pressure_plate', 'copycats:copycat_block', 'copycats:copycat_light_weighted_pressure_plate', 4)
  four_one('copycat_stone_pressure_plate', '#genesis:stone_pressure_plates', 'copycats:copycat_block', 'copycats:copycat_stone_pressure_plate', 4)
  four_one('copycat_wooden_pressure_plate', '#minecraft:wooden_pressure_plates', 'copycats:copycat_block', 'copycats:copycat_wooden_pressure_plate', 4)
  four_one('large_propeller', 'create:iron_sheet', 'create:propeller', 'immersive_aircraft:propeller', 1)
  four_one('timber_frame', 'minecraft:stick', '#minecraft:planks', 'supplementaries:timber_frame', 2)

  // Add common pattern recipes
  A_B_B('key', 'create_ironworks:bronze_ingot', 'create_ironworks:bronze_nugget', 'supplementaries:key', 1)
  A_B_B('lightning_rod', 'minecraft:copper_ingot', 'createaddition:copper_rod', 'minecraft:lightning_rod', 1)
  A_B_C('basic_engine', 'create:steam_engine', 'create:fluid_tank', 'create:blaze_burner', 'immersive_aircraft:boiler', 1)
  A_B_C('rotary_cannon', 'kubejs:gatling_gun_base', 'createaddition:copper_rod', 'create:copper_sheet', 'immersive_aircraft:rotary_cannon', 1)
  A_B_C('smart_compass', 'create:electron_tube', 'minecraft:compass', 'create:brass_sheet', 'naturescompass:naturescompass', 1)
  A_B('electronic_gyroscope', 'createrailwaysnavigator:advanced_display_half_panel', 'immersive_aircraft:gyroscope', 'immersive_aircraft:gyroscope_hud', 1)
  A_BCB_D('kinetic_battery', 'create:electron_tube', 'create:shaft', 'createaddition:modular_accumulator', 'create:stockpile_switch', 'create_connected:kinetic_battery', 2)
  A_BCB_DDD('advanced_filter_upgrade', 'minecraft:diamond', 'minecraft:gold_ingot', 'sophisticatedbackpacks:filter_upgrade', 'minecraft:redstone', 'sophisticatedbackpacks:advanced_filter_upgrade', 1)
  A_BCB_DDD('filter_upgrade', 'create:filter', 'minecraft:string', 'sophisticatedbackpacks:upgrade_base', 'minecraft:redstone', 'sophisticatedbackpacks:filter_upgrade', 1)
  A_BCB_DDD('pump_upgrade', 'create:mechanical_pump', 'minecraft:string', 'sophisticatedbackpacks:upgrade_base', 'minecraft:redstone', 'sophisticatedbackpacks:pump_upgrade', 1)
  A_BCB_DDD('sequenced_pulse_generator', 'create:electron_tube', 'minecraft:redstone_torch', 'create:brass_sheet', '#bookshelf:stones', 'create_connected:sequenced_pulse_generator', 1)
  AAA_ABA('chainmail_helmet', 'minecraft:iron_nugget', 'minecraft:leather_helmet', 'minecraft:chainmail_helmet', 1)
  AAA_ABA('diamond_horse_armor', 'minecraft:diamond', 'minecraft:leather_horse_armor', 'minecraft:diamond_horse_armor', 1)
  AAA_ABA('golden_horse_armor', 'minecraft:gold_ingot', 'minecraft:leather_horse_armor', 'minecraft:golden_horse_armor', 1)
  AAA_ABA('iron_horse_armor', 'minecraft:iron_ingot', 'minecraft:leather_horse_armor', 'minecraft:iron_horse_armor', 1)
  ABA_ABA('green_bamboo_fence', 'minecraft:bamboo_block', 'minecraft:bamboo', 'mcwfences:bamboo_fence', 3)
  ABA_ABA('hull', 'createdeco:andesite_sheet', '#minecraft:logs', 'immersive_aircraft:hull', 1)
  ABA_CDC('engine', 'create:brass_sheet', 'create:precision_mechanism', 'create:sturdy_sheet', 'immersive_aircraft:boiler', 'immersive_aircraft:engine', 1)
  ABA_CDC('lava_engine', 'createdeco:netherite_sheet', 'minecraft:lava_bucket', 'create_ironworks:steel_sheet', 'immersive_aircraft:boiler', 'immersive_aircraft:nether_engine', 1)
  ABA_CDC('water_engine', 'create:iron_sheet', 'minecraft:water_bucket', 'create:copper_sheet', 'immersive_aircraft:boiler', 'immersive_aircraft:eco_engine', 1)
  ABA('bamboo_bridge_pier', 'minecraft:bamboo_block', 'minecraft:bamboo', 'mcwbridges:bamboo_bridge_pier', 3)
  ABA('dry_bamboo_bridge_pier', 'minecraft:stripped_bamboo_block', 'minecraft:bamboo', 'mcwbridges:dry_bamboo_bridge_pier', 3)
  ABA('gyroscope', 'create:electron_tube', 'minecraft:compass', 'immersive_aircraft:gyroscope', 1)
  ABA('honey_cookie', 'create:dough', 'minecraft:honey_bottle', 'farmersdelight:honey_cookie', 8)
  ABA('iron_bridge_pier', 'minecraft:iron_ingot', 'minecraft:iron_bars', 'mcwbridges:iron_bridge_pier', 3)

  // Add custom pattern recipes
  custom('advanced_display_block', ['ABA', 'CCC', 'ABA'], { A: 'create:andesite_alloy', B: 'create:sturdy_sheet', C: 'create:display_board' }, 'createrailwaysnavigator:advanced_display_block', 4)
  custom('advanced_gyroscope', [' A ', 'BCB'], { A: 'createrailwaysnavigator:advanced_display_panel', B: 'immersive_aircraft:gyroscope', C: 'minecraft:clock' }, 'immersive_aircraft:gyroscope_dials', 1)
  custom('aerial_telescope', [' A ', ' B ', 'B B'], { A: 'minecraft:spyglass', B: 'createaddition:copper_rod' }, 'immersive_aircraft:telescope', 1)
  custom('battery_upgrade', ['ABA', 'CDC', 'ABA'], { A: 'minecraft:redstone', B: 'createaddition:modular_accumulator', C: 'createaddition:connector', D: 'sophisticatedbackpacks:upgrade_base' }, 'sophisticatedbackpacks:battery_upgrade', 1)
  custom('bee_nest', ['AAA', 'BBB', 'AAA'], { A: 'minecraft:honeycomb', B: '#minecraft:logs' }, 'minecraft:bee_nest', 1)
  custom('bell', [' A ', 'BCB', 'B B'], { A: 'create_ironworks:bronze_block', B: 'minecraft:stick', C: 'create_ironworks:bronze_ingot' }, 'minecraft:bell', 1)
  custom('bomb_bay', ['AAA', 'B B', 'AAA'], { A: 'create_ironworks:steel_block', B: 'createdeco:industrial_iron_trapdoor' }, 'immersive_aircraft:bomb_bay', 1)
  custom('cage', ['AAA', 'B B', 'AAA'], { A: 'create:iron_sheet', B: 'createaddition:iron_rod' }, 'supplementaries:cage', 1)
  custom('chainmail_boots', ['ABA', 'A A'], { A: 'minecraft:iron_nugget', B: 'minecraft:leather_boots' }, 'minecraft:chainmail_boots', 1)
  custom('chainmail_chestplate', ['ABA', 'AAA', 'AAA'], { A: 'minecraft:iron_nugget', B: 'minecraft:leather_chestplate' }, 'minecraft:chainmail_chestplate', 1)
  custom('chainmail_leggings', ['AAA', 'ABA', 'A A'], { A: 'minecraft:iron_nugget', B: 'minecraft:leather_leggings' }, 'minecraft:chainmail_leggings', 1)
  custom('cobweb', [' A ', 'A A', ' A '], { A: 'minecraft:string' }, 'minecraft:cobweb', 2)
  custom('copycat_headstock_link_and_pin', [' A ', 'BBB'], { A: '#railways:deco_couplers', B: 'create:copycat_panel' }, 'railways:copycat_headstock_link_and_pin', 1)
  custom('dispenser', [' AB', 'ACB', ' AB'], { A: 'minecraft:stick', B: 'minecraft:string', C: 'minecraft:dropper' }, 'minecraft:dispenser', 1)
  custom('empty_blaze_burner', ['AAA', 'A A', 'BCB'], { A: 'createaddition:iron_rod', B: 'create:iron_sheet', C: 'minecraft:netherrack' }, 'create:empty_blaze_burner', 1)
  custom('flower_box', ['ABA', ' A '], { A: '#minecraft:planks', B: 'minecraft:dirt' }, 'supplementaries:flower_box', 2)
  custom('globe', [' A ', 'BCD', ' E '], { A: 'createaddition:gold_rod', B: 'minecraft:green_dye', C: '#minecraft:planks', D: 'minecraft:blue_dye', E: 'create:golden_sheets' }, 'supplementaries:globe', 1)
  custom('gyrodyne', [' A ', 'BCB', 'DED'], { A: 'immersive_aircraft:propeller', B: 'immersive_aircraft:sail', C: 'create:precision_mechanism', D: 'immersive_aircraft:hull', E: '#create:seats' }, 'immersive_aircraft:gyrodyne', 1)
  custom('heavy_crossbow', ['ABA', ' C ', ' D '], { A: '#minecraft:logs', B: 'minecraft:crossbow', C: 'createaddition:iron_rod', D: 'create:sturdy_sheet' }, 'immersive_aircraft:heavy_crossbow', 1)
  custom('improved_landing_gear', [' AB', 'CDA', 'CC '], { A: 'createaddition:iron_rod', B: 'create:iron_sheet', C: 'create:belt_connector', D: 'create:shaft' }, 'immersive_aircraft:improved_landing_gear', 1)
  custom('industrial_iron_window', ['ABA', 'BCB'], { A: 'minecraft:iron_nugget', B: 'createdeco:industrial_iron_ingot', C: '#forge:glass_colorless' }, 'create:industrial_iron_window', 2)
  custom('inert_ender_eye', [' A ', 'BCD', ' E '], { A: 'create_aquatic_ambitions:spiky_shell', B: 'create:powdered_obsidian', C: 'minecraft:ender_pearl', D: 'createaddition:diamond_grit', E: 'minecraft:blaze_powder' }, 'kubejs:inert_ender_eye', 1)
  custom('leather_horse_armor', [' AB', 'BBB', 'C C'], { A: '#minecraft:wool', B: 'minecraft:leather', C: 'farmersdelight:rope' }, 'minecraft:leather_horse_armor', 1)
  custom('ornate_iron_window', [' A ', 'ABA'], { A: 'minecraft:iron_nugget', B: '#forge:glass_colorless' }, 'create:ornate_iron_window', 1)
  custom('peculiar_bell', [' A ', 'BCB', 'B B'], { A: 'create:brass_block', B: 'minecraft:stick', C: 'create:brass_ingot' }, 'create:peculiar_bell', 1)
  custom('quadrocopter', ['ABA', 'CDC', 'AEA'], { A: 'create:propeller', B: 'create:andesite_alloy', C: '#minecraft:wooden_slabs', D: 'minecraft:scaffolding', E: 'immersive_aircraft:boiler' }, 'immersive_aircraft:quadrocopter', 1)
  custom('quiver', ['A A', 'A A', ' A '], { A: 'minecraft:leather' }, 'supplementaries:quiver', 1)
  custom('rocky_dirt', ['AB', 'BA'], { A: 'minecraft:dir', B: 'minecraft:cobblestone' }, 'decorative_blocks:rocky_dirt', 4)
  custom('saddle', ['  A', 'AAA', 'BCB'], { A: 'minecraft:leather', B: 'farmersdelight:rope', C: 'minecraft:iron_ingot' }, 'minecraft:saddle', 1)
  custom('steel_boiler', ['ABA', 'ACA', 'ADA'], { A: 'create_ironworks:steel_sheet', B: 'create:steam_engine', C: 'create:fluid_tank', D: 'create:blaze_burner' }, 'immersive_aircraft:steel_boiler', 1)
  custom('tank_upgrade', [' A ', 'BCB', ' A '], { A: 'create:fluid_tank', B: '#forge:glass', C: 'sophisticatedbackpacks:upgrade_base' }, 'sophisticatedbackpacks:tank_upgrade', 1)
  custom('timber_brace', ['A  ', 'ABA', '  A'], { A: 'minecraft:stick', B: '#minecraft:planks' }, 'supplementaries:timber_brace', 2)
  custom('timber_cross_brace', ['A A', ' B ', 'A A'], { A: 'minecraft:stick', B: '#minecraft:planks' }, 'supplementaries:timber_cross_brace', 2)

  // Add bulk recipes
  global.CHAINS.forEach(entry => {
    const { name, inputNugget, inputIngot, output } = entry
    custom(name, ['A', 'B', 'A'], { A: inputNugget, B: inputIngot }, output, 3)
  })

  global.CHAIN_METALS.forEach(entry => {
    const { ingot, name } = entry
    A_B_B(`${name}_candle_holder`, '#minecraft:candles', ingot, `mcwlights:${name}_candle_holder`, 1)
    A_B(`${name}_low_candle_holder`, '#minecraft:candles', ingot, `mcwlights:${name}_low_candle_holder`, 1)
    ABA_ABA(`${name}_small_chandelier`, '#minecraft:candles', ingot, `mcwlights:${name}_small_chandelier`, 1)
    custom(`${name}_chandelier`, ['ABA', 'ABA', 'B B'], { A: '#minecraft:candles', B: ingot }, `mcwlights:${name}_chandelier`, 1)
    custom(`${name}_double_candle_holder`, ['ABA', ' B '], { A: '#minecraft:candles', B: ingot }, `mcwlights:${name}_double_candle_holder`, 1)
    custom(`${name}_triple_candle_holder`, [' A ', 'ABA', ' B '], { A: '#minecraft:candles', B: ingot }, `mcwlights:${name}_triple_candle_holder`, 1)
    custom(`${name}_wall_candle_holder`, ['A ', 'BB'], { A: '#minecraft:candles', B: ingot }, `mcwlights:${name}_wall_candle_holder`, 1)
  })

  global.COLORS.forEach(entry => {
    custom(`${entry}_ceiling_light`, [' A ', 'BCB', ' B '], { A: '#minecraft:wooden_fences', B: `minecraft:${entry}_wool`, C: 'minecraft:redstone_lamp' }, `mcwlights:${entry}_ceiling_light`, 3)
    eight_one(`luminous_${entry}_stained_glass_pane`, '#genesis:luminous_glass_panes', `minecraft:${entry}_dye`, `luminousblocks:luminous_${entry}_stained_glass_pane`, 8)
    eight_one(`luminous_${entry}_stained_glass`, '#genesis:luminous_glass_blocks', `minecraft:${entry}_dye`, `luminousblocks:luminous_${entry}_stained_glass`, 8)
  })

  global.COLORS_PFX.forEach(entry => {
    three_by_one(`${entry}book_bundle_pile_from_slab`, `packedup:${entry}book_bundle_slab`, `packedup:${entry}book_pile`, 6)
    three_by_one(`${entry}book_bundle_slab_from_block`, `packedup:${entry}book_bundle`, `packedup:${entry}book_bundle_slab`, 6)
    two_by_one(`${entry}book_bundle_block_from_slab`, `packedup:${entry}book_bundle_slab`, `packedup:${entry}book_bundle`, 1)
    two_by_one(`${entry}book_bundle_slab_from_pile`, `packedup:${entry}book_pile`, `packedup:${entry}book_bundle_slab`, 1)
  })

  global.WOOD_TYPES.forEach(entry => {
    const { type, name, log, bark, stripped, stripped_bark, planks } = entry
    A_B(`${name}_seat`, `minecraft:${name}_slab`, `minecraft:${name}_fence`, `decorative_blocks:${name}_seat`, 2)
    custom(`${name}_support`, ['AA', 'A '], { A: planks }, `decorative_blocks:${name}_support`, 4)
    one_by_one(`${name}_button`, planks, `minecraft:${name}_button`, 8)
    three_by_two(`${name}_palisade`, stripped, `decorative_blocks:${name}_palisade`, 6)
    two_by_one(`${name}_pressure_plate`, planks, `minecraft:${name}_pressure_plate`, 8)
    if (type != 'bamboo') {
      A_BCB_D(`${name}_ceiling_fan_light`, 'minecraft:iron_ingot', `minecraft:${name}_slab`, 'create:propeller', 'minecraft:redstone_lamp', `mcwlights:${name}_ceiling_fan_light`, 2)
    }
  })

  global.SAWING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab } = entry
    stair(`${name}_stairs`, block, stairs, 8)
    three_by_one(`${name}_slab`, block, slab, 6)
    two_by_one(`${name}_block_from_slab`, slab, block, 1)
    two_by_two(`${name}_block_from_stairs`, stairs, block, 3)
  })

  global.STONECUTTING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab, wall } = entry
    three_by_one(`${name}_slab`, block, slab, 6)
    two_by_one(`${name}_block_from_slab`, slab, block, 1)
    if (stairs != null) {
      stair(`${name}_stairs`, block, stairs, 8)
      two_by_two(`${name}_block_from_stairs`, stairs, block, 3)
    }
    if (wall != null) {
      three_by_two(`${name}_wall`, block, wall, 6)
    }
  })

  global.BASIC_DOORS.forEach(entry => {
    const { name, input, door, trapdoor } = entry
    three_by_two(`${name}_trapdoor`, input, trapdoor, 4)
    two_by_three(`${name}_door`, input, door, 3)
  })

  global.INGOT_DOORS.forEach(entry => {
    const { name, input, door, trapdoor } = entry
    two_by_three(`${name}_door`, input, door, 1)
    two_by_two(`${name}_trapdoor`, input, trapdoor, 1)
  })

  global.CORALS.forEach(entry => {
    two_by_two(`${entry}_coral_block`, `#genesis:${entry}_corals`, `minecraft:${entry}_coral_block`, 1)
    two_by_two(`dead_${entry}_coral_block`, `#genesis:dead_${entry}_corals`, `minecraft:dead_${entry}_coral_block`, 1)
  })

  global.FROGLIGHTS.forEach(entry => {
    const { name, froglight, dye } = entry
    eight_one(name, '#genesis:froglights', dye, froglight, 8)
  })

  global.POTTERY_SHERDS.forEach(entry => {
    custom(`${entry}_pottery_sherd`, ['ABA', 'BCB', 'ABA'], { A: 'createaddition:electrum_ingot', B: 'minecraft:clay_ball', C: `minecraft:${entry}_pottery_sherd` }, `minecraft:${entry}_pottery_sherd`, 2)
  })
})