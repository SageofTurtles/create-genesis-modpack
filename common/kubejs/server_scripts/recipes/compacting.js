ServerEvents.recipes(event => {
  // Define functions to create recipes
  const cool = (recipeId, inputs, output, count) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      inputs
    ).id(`genesis:${recipeId}_compacting`)
  }
  const heat = (recipeId, inputs, output, count) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      inputs
    ).heated().id(`genesis:${recipeId}_compacting`)
  }
  const superheat = (recipeId, inputs, output, count) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      inputs
    ).superheated().id(`genesis:${recipeId}_compacting`)
  }
  const fluidSuperheat = (recipeId, inputs, output, amount) => {
    event.recipes.create.compacting(
      Fluid.of(output, amount),
      inputs
    ).superheated().id(`genesis:${recipeId}_compacting`)
  }

  // Add non-heated recipes
  cool(
    'andesite_block_from_molten',
    Fluid.of('createmetalwork:molten_andesite', 810),
    'minecraft:andesite', 1
  )
  cool(
    'calcite',
    [
      '2x minecraft:bone_meal',
      'kubejs:limesand',
      Fluid.lava(100)
    ],
    'minecraft:calcite', 1
  )
  cool(
    'diorite',
    [
      '2x minecraft:flint',
      'kubejs:limesand',
      Fluid.lava(100)
    ],
    'minecraft:diorite', 1
  )
  cool(
    'end_stone',
    [
      '2x minecraft:chorus_fruit',
      'minecraft:sandstone',
      Fluid.lava(100)
    ],
    'minecraft:end_stone', 1
  )
  cool(
    'magma_block',
    Fluid.lava(1000),
    'minecraft:magma_block', 1
  )
  cool(
    'experience_block',
    Fluid.of('create_enchantment_industry:experience', 27),
    'create:experience_block', 1
  )


  // Add heated scripts
  heat(
    [
      Fluid.lava(50),
      '4x minecraft:charcoal'
    ],
    'minecraft:coal', 1,
    'coal'
  )
  heat(
    '2x minecraft:stone',
    'minecraft:deepslate', 1,
    'deepslate'
  )
  heat(
    'tuff',
    [
      'minecraft:calcite',
      'minecraft:deepslate'
    ],
    'minecraft:tuff', 2
  )

  // Add superheated recipes
  superheat(
    'ancient_debris',
    [
      'minecraft:netherite_scrap',
      'minecraft:obsidian',
      Fluid.of('create_enchantment_industry:experience', 9)
    ],
    'minecraft:ancient_debris', 1
  )
  superheat(
    'rough_diamond',
    [
      Fluid.lava(500),
      '9x minecraft:coal_block'
    ],
    'kubejs:rough_diamond', 1
  )

  // Add fluid superheated recipes
  fluidSuperheat(
    'dragon_breath',
    '4x amendments:dragon_charge',
    'create_central_kitchen:dragon_breath', 250
  )

  // Add bulk recipes
  global.BASE_METALS.forEach(entry => {
    const { name, block, ingot, nugget } = entry
    cool(
      `${name}_ingot_from_molten`,
      Fluid.of(`createmetalwork:molten_${name}`, 90),
      ingot, 1
    )
  })

  global.ALLOYS.forEach(entry => {
    const { name, block, ingot, nugget, heat, base1, base2, amount } = entry
    cool(
      `${name}_ingot_from_molten`,
      Fluid.of(`createmetalwork:molten_${name}`, 90),
      ingot, 1
    )
  })

  global.OVERWORLD_ORES.forEach(entry => {
    const { name, modid, item, xp } = entry
    heat(
      name,
      [
        'minecraft:stone',
        item,
        Fluid.of('create_enchantment_industry:experience', xp)
      ],
      `${modid}:${name}`, 1
    )
    heat(
      `deepslate_${name}`,
      [
        'minecraft:deepslate',
        item,
        Fluid.of('create_enchantment_industry:experience', xp)
      ],
      `${modid}:deepslate_${name}`, 1
    )
  })

  global.NETHER_ORES.forEach(entry => {
    const { name, base, item, xp } = entry
    heat(
      name,
      [
        `minecraft:${base}`,
        item,
        Fluid.of('create_enchantment_industry:experience', xp)
      ],
      `minecraft:${name}`, 1
    )
  })
})