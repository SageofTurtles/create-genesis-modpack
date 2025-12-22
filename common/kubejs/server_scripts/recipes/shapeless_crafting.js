ServerEvents.recipes(event => {
  // Define functions to create recipes
  const add = (recipeId, inputs, output, count) => {
    event.shapeless(
      Item.of(output, count),
      inputs
    ).id(`genesis:${recipeId}_shapeless`)
  }

  // Add individual recipes
  add('banking_guide', ['createdeco:gold_coin', 'create:sturdy_sheet', 'minecraft:paper'], 'numismatics:banking_guide', 1)
  add('brown_dye_from_orange', ['minecraft:orange_dye', 'minecraft:black_dye'], 'minecraft:brown_dye', 2)
  add('brown_dye_from_red_and_yellow', ['minecraft:red_dye', 'minecraft:yellow_dye', 'minecraft:black_dye'], 'minecraft:brown_dye', 3)
  add('copycat_iron_door', ['copycats:copycat_door', 'minecraft:redstone_torch'], 'copycats:copycat_iron_door', 1)
  add('copycat_iron_trapdoor', ['copycats:copycat_trapdoor', 'minecraft:redstone_torch'], 'copycats:copycat_iron_trapdoor', 1)
  add('globe_banner_pattern', ['minecraft:paper', 'supplementaries:globe_sepia'], 'minecraft:globe_banner_pattern', 1)
  add('lead', ['farmersdelight:rope', 'farmersdelight:rope'], 'minecraft:lead', 2)
  add('luminous_glass_from_glowstone_dust', ['minecraft:glass', 'minecraft:glowstone_dust'], 'luminousblocks:luminous_glass', 1)
  add('luminous_glass_from_prismarine_crystals', ['minecraft:glass', 'minecraft:prismarine_crystals'], 'luminousblocks:luminous_glass', 1)
  add('mycelium', ['minecraft:grass_block', '2x #forge:mushrooms'], 'minecraft:mycelium', 1)
  add('piglin_banner_pattern', ['minecraft:paper', 'minecraft:piglin_head'], 'minecraft:piglin_banner_pattern', 1)
  add('rooted_dirt', ['minecraft:dirt', 'minecraft:hanging_roots'], 'minecraft:rooted_dirt', 1)
  add('rope_and_nail', ['farmersdelight:rope', 'minecraft:iron_ingot'], 'comforts:rope_and_nail', 1)
  add('white_paper_lamp', ['#genesis:paper_lamps', 'minecraft:white_dye'], 'mcwlights:white_paper_lamp', 1)

  // Add bulk recipes
  global.ADDITIVE_DOORS.forEach(entry => {
    const { name, base, input, output } = entry
    add(name, [base, input], output, 1)
  })

  global.COLORS.forEach(entry => {
    add(`luminous_${entry}_stained_glass_from_glowstone_dust`, [`minecraft:${entry}_stained_glass`, 'minecraft:glowstone_dust'], `luminousblocks:luminous_${entry}_stained_glass`, 1)
    add(`luminous_${entry}_stained_glass_from_prismarine_crystals`, [`minecraft:${entry}_stained_glass`, 'minecraft:prismarine_crystals'], `luminousblocks:luminous_${entry}_stained_glass`, 1)
  })

  global.WOOD_TYPES.forEach(entry => {
    const { type, name, log, bark, stripped, stripped_bark, planks } = entry
    if (type == 'fungus') {
      add(`${name}_nylium`, ['minecraft:netherrack', `2x minecraft:${name}_fungus`], `minecraft:${name}_nylium`, 1)
    }
  })

  global.BANNER_PATTERNS.forEach(entry => {
    const { modid, pattern } = entry
    add(`${pattern}_duplicating`, [`${modid}:${pattern}`, 'minecraft:paper', 'supplementaries:antique_ink'], `${modid}:${pattern}`, 2)
  })
})