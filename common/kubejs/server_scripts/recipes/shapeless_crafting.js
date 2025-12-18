ServerEvents.recipes(event => {
  // Define functions to create recipes
  const add = (inputs, output, count, recipeId) => {
    event.shapeless(
      Item.of(output, count),
      inputs
    ).id(`genesis:${recipeId}_shapeless`)
  }

  // Add individual recipes
  add(
    [
      'createdeco:gold_coin',
      'create:sturdy_sheet',
      'minecraft:paper'
    ],
    'numismatics:banking_guide', 1,
    'banking_guide'
  )
  add(
    [
      'farmersdelight:rope',
      'farmersdelight:rope'
    ],
    'minecraft:lead', 2,
    'lead'
  )
  add(
    [
      'farmersdelight:rope',
      'minecraft:iron_ingot'
    ],
    'comforts:rope_and_nail', 1,
    'rope_and_nail'
  )
  add(
    [
      'copycats:copycat_door',
      'minecraft:redstone_torch'
    ],
    'copycats:copycat_iron_door', 1,
    'copycat_iron_door'
  )
  add(
    [
      'copycats:copycat_trapdoor',
      'minecraft:redstone_torch'
    ],
    'copycats:copycat_iron_trapdoor', 1,
    'copycat_iron_trapdoor'
  )
  add(
    [
      'minecraft:glass',
      'minecraft:glowstone_dust'
    ],
    'luminousblocks:luminous_glass', 1,
    'luminous_glass_from_glowstone_dust'
  )
  add(
    [
      'minecraft:glass',
      'minecraft:prismarine_crystals'
    ],
    'luminousblocks:luminous_glass', 1,
    'luminous_glass_from_prismarine_crystals'
  )
  add(
    [
      '#genesis:paper_lamps',
      'minecraft:white_dye'
    ],
    'mcwlights:white_paper_lamp', 1,
    'white_paper_lamp'
  )
  add(
    [
      'minecraft:grass_block',
      '2x #forge:mushrooms'
    ],
    'minecraft:mycelium', 1,
    'mycelium'
  )
  add(
    [
      'minecraft:dirt',
      'minecraft:hanging_roots'
    ],
    'minecraft:rooted_dirt', 1,
    'rooted_dirt'
  )
  add(
    [
      'minecraft:paper',
      'supplementaries:globe_sepia'
    ],
    'minecraft:globe_banner_pattern', 1,
    'globe_banner_pattern'
  )
  add(
    [
      'minecraft:paper',
      'minecraft:piglin_head'
    ],
    'minecraft:piglin_banner_pattern', 1,
    'piglin_banner_pattern'
  )
  add(
    [
      'minecraft:orange_dye',
      'minecraft:black_dye'
    ],
    'minecraft:brown_dye', 2,
    'brown_dye_from_orange'
  )
  add(
    [
      'minecraft:red_dye',
      'minecraft:yellow_dye',
      'minecraft:black_dye'
    ],
    'minecraft:brown_dye', 3,
    'brown_dye_from_red_and_yellow'
  )

  // Add bulk recipes
  global.ADDITIVE_DOORS.forEach(entry => {
    const { name, base, input, output } = entry
    add(
      [base, input],
      output,
      name
    )
  })

  global.COLORS.forEach(entry => {
    add(
      [
        `minecraft:${entry}_stained_glass`,
        'minecraft:glowstone_dust'
      ],
      `luminousblocks:luminous_${entry}_stained_glass`, 1,
      `luminous_${entry}_stained_glass_from_glowstone_dust`
    )
    add(
      [
        `minecraft:${entry}_stained_glass`,
        'minecraft:prismarine_crystals'
      ],
      `luminousblocks:luminous_${entry}_stained_glass`, 1,
      `luminous_${entry}_stained_glass_from_prismarine_crystals`
    )
  })

  global.FUNGUS_SETS.forEach(entry => {
    add(
      [
        'minecraft:netherrack',
        `2x minecraft:${entry}_fungus`
      ],
      `minecraft:${entry}_nylium`, 1,
      `${entry}_nylium`
    )
  })

  global.BANNER_PATTERNS.forEach(entry => {
    const { modid, pattern } = entry
    add(
      [
        `${modid}:${pattern}`,
        'minecraft:paper',
        'supplementaries:antique_ink'
      ],
      `${modid}:${pattern}`, 2,
      pattern
    )
  })
})