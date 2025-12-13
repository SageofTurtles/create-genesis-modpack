ServerEvents.recipes(event => {
  // Define functions to create recipes
  const cool = (inputs, output, count, recipeId) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      inputs
    ).id(`genesis:${recipeId}_compacting`)
  }
  const heat = (inputs, output, count, recipeId) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      inputs
    ).heated().id(`genesis:${recipeId}_compacting`)
  }
  const superheat = (inputs, output, count, recipeId) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      inputs
    ).superheated().id(`genesis:${recipeId}_compacting`)
  }
  const fluidCool = (inputs, output, amount, recipeId) => {
    event.recipes.create.compacting(
      Fluid.of(output, amount),
      inputs
    ).id(`genesis:${recipeId}_compacting`)
  }
  const fluidHeat = (inputs, output, amount, recipeId) => {
    event.recipes.create.compacting(
      Fluid.of(output, amount),
      inputs
    ).heated().id(`genesis:${recipeId}_compacting`)
  }
  const fluidSuperheat = (inputs, output, amount, recipeId) => {
    event.recipes.create.compacting(
      Fluid.of(output, amount),
      inputs
    ).superheated().id(`genesis:${recipeId}_compacting`)
  }

  // Add non-heated recipes
  cool(
    Fluid.of('createmetalwork:molten_andesite', 810),
    'minecraft:andesite', 1,
    'andesite_block_from_molten'
  )
  cool(
    [
      '2x minecraft:bone_meal',
      'kubejs:limesand',
      Fluid.lava(100)
    ],
    'minecraft:calcite', 1,
    'calcite'
  )
  cool(
    [
      '2x minecraft:flint',
      'kubejs:limesand',
      Fluid.lava(100)
    ],
    'minecraft:diorite', 1,
    'diorite'
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
    [
      'minecraft:calcite',
      'minecraft:deepslate'
    ],
    'minecraft:tuff', 2,
    'tuff'
  )

  // Add superheated recipes
  superheat(
    [
      'minecraft:netherite_scrap',
      'minecraft:obsidian',
      Fluid.of('create_enchantment_industry:experience', 9)
    ],
    'minecraft:ancient_debris', 1,
    'ancient_debris'
  )
  superheat(
    [
      Fluid.lava(500),
      '9x minecraft:coal_block'
    ],
    'kubejs:rough_diamond', 1,
    'rough_diamond'
  )

  // Add fluid superheated recipes
  fluidSuperheat(
    '4x amendments:dragon_charge',
    'create_central_kitchen:dragon_breath', 250,
    'dragon_breath'
  )

  // Add bulk recipes
  global.BASE_METALS.forEach(entry => {
    const { name, block, ingot, nugget } = entry
    cool(
      Fluid.of(`createmetalwork:molten_${name}`, 90),
      ingot, 1,
      `${name}_ingot_from_molten`
    )
  })

  global.ALLOYS.forEach(entry => {
    const { name, block, ingot, nugget, heat, base1, base2, amount } = entry
    cool(
      Fluid.of(`createmetalwork:molten_${name}`, 90),
      ingot, 1,
      `${name}_ingot_from_molten`
    )
  })

  global.OVERWORLD_ORES.forEach(entry => {
    const { name, modid, item, xp } = entry
    heat(
      [
        'minecraft:stone',
        item,
        Fluid.of('create_enchantment_industry:experience', xp)
      ],
      `${modid}:${name}`, 1,
      name
    )
    heat(
      [
        'minecraft:deepslate',
        item,
        Fluid.of('create_enchantment_industry:experience', xp)
      ],
      `${modid}:deepslate_${name}`, 1,
      `deepslate_${name}`
    )
  })

  global.NETHER_ORES.forEach(entry => {
    const { name, base, item, xp } = entry
    heat(
      [
        `minecraft:${base}`,
        item,
        Fluid.of('create_enchantment_industry:experience', xp)
      ],
      `minecraft:${name}`, 1,
      name
    )
  })
})