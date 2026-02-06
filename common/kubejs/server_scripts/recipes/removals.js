// priority: 100

ServerEvents.recipes(event => {
  // Define functions to remove recipes
  const id = (recipeId) => {
    event.remove({ id: recipeId })
  }
  const output = (result) => {
    event.remove({ output: result })
  }
  const input = (ingredient) => {
    event.remove({ input: ingredient })
  }
  const mod = (modid) => {
    event.remove({ mod: modid })
  }
  const custom = (parameters) => {
    event.remove(parameters)
  }

  // Remove recipes for blacklisted items
  global.REMOVED_ITEMS.forEach(entry => {
    input(entry)
    output(entry)
  })

  global.REMOVED_REGEX_ITEMS.forEach(entry => {
    input(entry)
    output(entry)
  })

  // Remove recipes by ID
  id('apotheosis:book')
  id('create_aquatic_ambitions:channeling/sponge')
  id('create_aquatic_ambitions:compacting/calcite')
  id('create_aquatic_ambitions:crushing/prismarine_bricks_to_lapis_and_copper')
  id('create_aquatic_ambitions:milling/limestone')
  id('create_aquatic_ambitions:mixing/prismarine_alloy')
  id('create_central_kitchen:sequenced_assembly/hamburger')
  id('create_ironworks:materials/tin/tin_ingot_from_crushing_raw_tin')
  id('create_jetpack:jetpack')
  id('create_jetpack:netherite_jetpack_upgrade_from_netherite')
  id('create_jetpack:netherite_jetpack')
  id('create:compacting/diorite_from_flint')
  id('create:crafting/appliances/netherite_backtank_from_netherite')
  id('create:crafting/materials/prismarine_alloy')
  id('create:crushing/nether_wart_block')
  id('create:crushing/tuff_recycling')
  id('create:crushing/tuff')
  id('create:filling/calcite')
  id('create:haunting/blackstone')
  id('create:industrial_iron_block_from_ingots_iron_stonecutting')
  id('create:mixing/brass_ingot')
  id('create:mixing/lava_from_cobble')
  id('create:rose_quartz_block_from_rose_quartz_stonecutting')
  id('create:smelting/veridium')
  id('create:weathered_iron_block_from_ingots_iron_stonecutting')
  id('create:weathered_iron_window')
  id('farmersdelight:honey_cookie')
  id('farmersdelight:paper_from_tree_bark')
  id('farmersdelight:rope')
  id('minecraft:cake')
  id('minecraft:dispenser')
  id('minecraft:dropper')
  id('minecraft:leather_horse_armor')
  id('minecraft:lever')
  id('minecraft:netherite_ingot')
  id('minecraft:observer')
  id('minecraft:piston')
  id('minecraft:scaffolding')
  id('railways:stonecutting/riveted_locometal')
  id('shieldmechanics:shields')
  id('sliceanddice:filling/hot_cocoa_from_fluid')
  id('terralith:cobblestone_from_stone_slab')

  // Remove recipes by regex ID
  id(/.*netherite_diving_(helmet|leggings|boots)_from_netherite$/)
  id(/brewinandchewin:(emptying|filling)\/create\/(milk|potion|honey|water|kombucha).*/)
  id(/copperandtuffbackport:.*chiseled_copper_from_(?:waxed_)?(?:weathered_|exposed_|oxidized_)?copper_(?:block_)?stonecutting$/)
  id(/create_aquatic_ambitions:channeling\/.*copper/)
  id(/create_central_kitchen:crafting\/.*/)
  id(/create_ironworks:compat\/.*/)
  id(/create_ironworks:materials\/plates\/.*sheet2$/)
  id(/create_ironworks:materials\/tin\/crushed.*/)
  id(/(create|bits_n_bobs):.*_slab_recycling$/)
  id(/create:crafting\/materials\/.*_coral_block$/)
  id(/create:mixing\/(charcoal|coal)_deepslate$/)
  id(/create:splashing\/(gravel|red_sand)$/)
  id(/createdeco:.*_hull$/)
  id(/minecraft:.*cut_copper.*_stonecutting$/)
  id(/petrolsparts:crafting\/double_cardan_shaft_(2|3|4)$/)
  id(/railways:mechanical_crafting\/.*/)

  // Remove recipes by mod ID
  mod('createmetalwork')
  mod('immersive_aircraft')
  mod('man_of_many_planes')

  // Remove recipes by input item ID
  input('mcwbridges:bridge_lantern')
  input('mcwbridges:bridge_torch')

  // Remove recipes by output item ID
  output('amendments:dragon_charge')
  output('cmparallelpipes:pipe_wrench')
  output('comforts:rope_and_nail')
  output('create_aquatic_ambitions:prismarine_alloy_rod')
  output('create_connected:kinetic_battery')
  output('create_connected:sequenced_pulse_generator')
  output('create:copper_shingles')
  output('create:copper_tiles')
  output('create:empty_blaze_burner')
  output('create:industrial_iron_window')
  output('create:ornate_iron_window')
  output('create:peculiar_bell')
  output('createaddition:electrum_amulet')
  output('createrailwaysnavigator:navigator')
  output('decorative_blocks:bar_panel')
  output('decorative_blocks:rocky_dirt')
  output('mcwbridges:bridge_lantern')
  output('mcwbridges:bridge_torch')
  output('mcwfences:bamboo_fence')
  output('mcwlights:copper_chain')
  output('mcwlights:golden_chain')
  output('mcwwindows:bamboo_shutter')
  output('minecraft:bell')
  output('minecraft:chain')
  output('minecraft:ender_eye')
  output('minecraft:ice')
  output('minecraft:lead')
  output('minecraft:lightning_rod')
  output('minecraft:netherite_upgrade_smithing_template')
  output('minecraft:snow')
  output('naturescompass:natures_compass')
  output('numismatics:banking_guide')
  output('smallships:cannon_ball')
  output('supplementaries:cage')
  output('supplementaries:flower_box')
  output('supplementaries:key')

  // Remove recipes by output regex
  output(/.*_trapdoor/)
  output(/.*button$/)
  output(/.*copycat.*/)
  output(/.*pressure_plate$/)
  output(/create:.*rose_quartz_tiles/)
  output(/createdeco:.*_sheet_metal$/)
  output(/createrailwaysnavigator:advanced_display.*/)
  output(/decorative_blocks:.*_palisade$/)
  output(/decorative_blocks:.*_seat$/)
  output(/decorative_blocks:.*_support$/)
  output(/luminousblocks:.*_glass$/)
  output(/mcwbridges:(iron|bamboo|dry_bamboo)_bridge_pier$/)
  output(/mcwdoors:(oak|spruce|birch|jungle|acacia|dark_oak|crimson|warped|mangrove|cherry|bamboo|metal|jail|store).*_door$/)
  output(/mcwlights:.*_candle_holder$/)
  output(/mcwlights:.*_ceiling_fan_light$/)
  output(/mcwlights:.*_ceiling_light$/)
  output(/mcwlights:.*_chandelier$/)
  output(/mcwroofs:(oak|spruce|birch|jungle|acacia|dark_oak|mangrove|cherry|bamboo|crimson|warped|thatch|grass).*/)
  output(/mcwroofs:gutter_(middle|base)$/)
  output(/packedup:.*book_bundle_slab.*/)
  output(/sophisticatedbackpacks:(filter|advanced_filter|tank|battery|pump)_upgrade$/)
  output(/supplementaries:timber_(frame|brace|cross_brace)$/)

  // Remove recipes by custom parameters
  custom({ id: /createaddition:charging\/.*/, not: { id: /.*channeling$/ } })
  custom({ mod: 'create_ironworks', type: 'create:mixing' })
  custom({ output: /.*_door$/, not: { mod: 'mcwdoors' } })
  custom({ type: 'create:compacting', output: 'create:experience_block' })
  custom({ type: 'create:mixing', output: 'create:andesite_alloy' })
  custom({ type: 'minecraft:crafting_shaped', output: /mcwlights:.*lantern$/ })
  custom({ type: 'minecraft:stonecutting', output: /.*copper_grate$/ })
  custom({ type: 'minecraft:stonecutting', output: /mcwfences:.*railing.*/ })

  global.COPPER_OXIDIZATION.forEach(entry => {
    const { modid, base, exposed, weathered, oxidized } = entry
    custom([
      { type: 'create:deploying', output: `${modid}:${base}` },
      { type: 'create:deploying', output: `${modid}:${exposed}` },
      { type: 'create:deploying', output: `${modid}:${weathered}` },
      { type: 'create:deploying', output: `${modid}:${oxidized}` },
      { type: 'create:deploying', output: `${modid}:waxed_${base}` },
      { type: 'create:deploying', output: `${modid}:waxed_${exposed}` },
      { type: 'create:deploying', output: `${modid}:waxed_${weathered}` },
      { type: 'create:deploying', output: `${modid}:waxed_${oxidized}` }
    ])
  })

  global.STONECUTTING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab, wall } = entry
    custom([
      { type: 'create:cutting', output: slab },
      { type: 'minecraft:crafting_shaped', output: slab },
      { type: 'minecraft:stonecutting', output: slab }
    ])
    if (stairs != null) {
      custom([
        { type: 'create:cutting', output: stairs },
        { type: 'minecraft:crafting_shaped', output: stairs },
        { type: 'minecraft:stonecutting', output: stairs }
      ])
    }
    if (wall != null) {
      custom([
        { type: 'minecraft:crafting_shaped', output: wall },
        { type: 'minecraft:stonecutting', output: wall }
      ])
    }
  })

  global.SAWING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab } = entry
    custom([
      { type: 'create:cutting', output: slab },
      { type: 'minecraft:crafting_shaped', output: slab },
      { type: 'minecraft:stonecutting', output: slab }
    ])
    custom([
      { type: 'create:cutting', output: stairs },
      { type: 'minecraft:crafting_shaped', output: stairs },
      { type: 'minecraft:stonecutting', output: stairs }
    ])
  })
})