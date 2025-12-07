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
  id(/create:.*_slab_recycling$/)
  id(/create:crafting\/materials\/.*_coral_block$/)
  id(/create:mixing\/(charcoal|coal)_deepslate$/)
  id(/createdeco:.*_hull$/)
  id(/minecraft:.*cut_copper.*_stonecutting$/)
  id(/petrolsparts:crafting\/double_cardan_shaft_(2|3|4)$/)
  id(/railways:mechanical_crafting\/.*/)

  // Remove recipes by mod ID
  mod('createmetalwork')
  mod('immersive_aircraft')
  mod('man_of_many_planes')

  // Remove recipes by output item ID
  output('amendments:dragon_charge')
  output('comforts:rope_and_nail')
  output('create_connected:kinetic_battery')
  output('create_connected:sequenced_pulse_generator')
  output('create:copper_shingles')
  output('create:copper_tiles')
  output('create:empty_blaze_burner')
  output('create:industrial_iron_window')
  output('create:ornate_iron_window')
  output('create:peculiar_bell')
  output('create:prismarine_alloy_rod')
  output('createrailwaysnavigator:navigator')
  output('decorative_blocks:bar_panel')
  output('decorative_blocks:rocky_dirt')
  output('mcwbridges:bridge_lantern')
  output('mcwbridges:bridge_torch')
  output('mcwdoors:metal_warning_door')
  output('mcwfences:bamboo_fence')
  output('mcwlights:copper_chain')
  output('mcwlights:golden_chain')
  output('mcwtrpdoors:bamboo_trapdoor')
  output('mcwtrpdoors:metal_trapdoor')
  output('mcwtrpdoors:metal_warning_trapdoor')
  output('mcwtrpdoors:print_bamboo')
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
  output('smallships:cannon_ball')
  output('supplementaries:cage')
  output('supplementaries:flower_box')
  output('supplementaries:key')

  // Remove recipes by output regex
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
  output(/mcwdoors:bamboo_(japanese|japanese2|bark_glass|barn|barn_glass|beach|classic|cottage|four_panel|glass|modern|mystic|nether|paper|stable|swamp|tropical|western|waffle|whispering)_door$/)
  output(/mcwlights:.*_candle_holder$/)
  output(/mcwlights:.*_ceiling_fan_light$/)
  output(/mcwlights:.*_ceiling_light$/)
  output(/mcwlights:.*_chandelier$/)
  output(/mcwroofs:(oak|spruce|birch|jungle|acacia|dark_oak|mangrove|cherry|bamboo|crimson|warped|thatch|grass).*/)
  output(/mcwroofs:gutter_(middle|base)$/)
  output(/mcwtrpdoors:.*_(glass|bark|ranch)_trapdoor$/)
  output(/mcwtrpdoors:bamboo_(barn|barred|barrel|beach|classic|cottage|four_panel|mystic|paper|tropical|swamp|blossom|whispering)_trapdoor$/)
  output(/packedup:.*book_bundle_slab.*/)
  output(/sophisticatedbackpacks:(filter|advanced_filter|tank|battery|pump)_upgrade$/)
  output(/supplementaries:timber_(frame|brace|cross_brace)$/)

  // Remove recipes by custom parameters
  custom({
    id: /createaddition:charging\/.*/,
    not: { id: /.*channeling$/ }
  })

  custom({
    type: 'minecraft:stonecutting',
    output: /mcwfences:.*railing.*/
  })

  custom({
    mod: 'create_ironworks',
    type: 'create:mixing'
  })

  custom({
    type: 'create:compacting',
    output: 'create:experience_block'
  })

  custom({
    type: 'create:mixing',
    output: 'create:andesite_alloy'
  })

  custom({
    output: /.*_door$/,
    not: { mod: 'mcwdoors' }
  })

  custom({
    output: /.*_trapdoor$/,
    not: { mod: 'mcwtrpdoors' }
  })

  global.OXIDIZATION_SETS.forEach(entry => {
    const { modid, block, pattern } = entry
    custom([
      {
        type: 'create:deploying',
        output: `${modid}:${block}`
      },
      {
        type: 'create:deploying',
        output: `${modid}:exposed_${pattern}`
      },
      {
        type: 'create:deploying',
        output: `${modid}:weathered_${pattern}`
      },
      {
        type: 'create:deploying',
        output: `${modid}:oxidized_${pattern}`
      },
      {
        type: 'create:deploying',
        output: `${modid}:waxed_${block}`
      },
      {
        type: 'create:deploying',
        output: `${modid}:waxed_exposed_${pattern}`
      },
      {
        type: 'create:deploying',
        output: `${modid}:waxed_weathered_${pattern}`
      },
      {
        type: 'create:deploying',
        output: `${modid}:waxed_oxidized_${pattern}`
      }
    ])
  })

  global.STONECUTTING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab, wall } = entry
    custom([
      {
        type: 'minecraft:crafting_shaped',
        output: slab
      },
      {
        type: 'minecraft:stonecutting',
        output: slab
      },
      {
        type: 'create:cutting',
        output: slab
      },
    ])
    if (stairs != null) {
      custom([
        {
          type: 'minecraft:crafting_shaped',
          output: stairs
        },
        {
          type: 'minecraft:stonecutting',
          output: stairs
        },
        {
          type: 'create:cutting',
          output: stairs
        },
      ])
    }
    if (wall != null) {
      custom([
        {
          type: 'minecraft:crafting_shaped',
          output: wall
        },
        {
          type: 'minecraft:stonecutting',
          output: wall
        }
      ])
    }
  })

  global.SAWING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab } = entry
    custom([
      {
        type: 'minecraft:crafting_shaped',
        output: slab
      },
      {
        type: 'minecraft:stonecutting',
        output: slab
      },
      {
        type: 'create:cutting',
        output: slab
      },
    ])
    custom([
      {
        type: 'minecraft:crafting_shaped',
        output: stairs
      },
      {
        type: 'minecraft:stonecutting',
        output: stairs
      },
      {
        type: 'create:cutting',
        output: stairs
      },
    ])
  })
})