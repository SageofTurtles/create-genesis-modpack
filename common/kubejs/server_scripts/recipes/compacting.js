ServerEvents.recipes(event => {
  // Define functions to create recipes
  const cool = (input, output, count, recipeId) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      input
    ).id(`genesis:${recipeId}_compacting`)
  }
  const heat = (input, output, count, recipeId) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      input
    ).heated().id(`genesis:${recipeId}_compacting`)
  }
  const superheat = (input, output, count, recipeId) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      input
    ).superheated().id(`genesis:${recipeId}_compacting`)
  }

  // Add non-heated recipes
  cool(
    Fluid.of('createmetalwork:molten_andesite', 810),
    'minecraft:andesite', 1,
    'andesite_block_from_molten'
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