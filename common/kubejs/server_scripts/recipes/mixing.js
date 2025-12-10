ServerEvents.recipes(event => {
  // Define functions to create recipes
  const cool = (input, output, count, recipeId) => {
    event.recipes.create.mixing(
      Item.of(output, count),
      input
    ).id(`genesis:${recipeId}_mixing`)
  }
  const heat = (input, output, count, recipeId) => {
    event.recipes.create.mixing(
      Item.of(output, count),
      input
    ).heated().id(`genesis:${recipeId}_mixing`)
  }
  const superheat = (input, output, count, recipeId) => {
    event.recipes.create.mixing(
      Item.of(output, count),
      input
    ).superheated().id(`genesis:${recipeId}_mixing`)
  }
  const fluidCool = (input, output, amount, recipeId) => {
    event.recipes.create.mixing(
      Fluid.of(output, amount),
      input
    ).id(`genesis:${recipeId}_mixing`)
  }
  const fluidHeat = (input, output, amount, recipeId) => {
    event.recipes.create.mixing(
      Fluid.of(output, amount),
      input
    ).heated().id(`genesis:${recipeId}_mixing`)
  }
  const fluidSuperheat = (input, output, amount, recipeId) => {
    event.recipes.create.mixing(
      Fluid.of(output, amount),
      input
    ).superheated().id(`genesis:${recipeId}_mixing`)
  }

  // Add fluid mixing recipes
  fluidHeat(
    'minecraft:andesite',
    'createmetalwork:molten_andesite', 810,
    'andesite_molten_from_block'
  )
  fluidHeat(
    [
      Fluid.of('createmetalwork:molten_andesite', 405),
      Fluid.of('createmetalwork:molten_iron', 10)
    ],
    'createmetalwork:molten_andesite_alloy', 90,
    'alloying_molten_andesite_alloy_from_iron'
  )
  fluidHeat(
    [
      Fluid.of('createmetalwork:molten_andesite', 405),
      Fluid.of('createmetalwork:molten_zinc', 10)
    ],
    'createmetalwork:molten_andesite_alloy', 90,
    'alloying_molten_andesite_alloy_from_zinc'
  )


  // Add bulk recipes
  global.BASE_METALS.forEach(entry => {
    const { name, block, ingot, nugget } = entry
    if (nugget != null) {
      fluidHeat(
        nugget,
        `createmetalwork:molten_${name}`, 10,
        `${name}_molten_from_nugget`
      )
    }
    fluidHeat(
      ingot,
      `createmetalwork:molten_${name}`, 90,
      `${name}_molten_from_ingot`
    )
    fluidHeat(
      block,
      `createmetalwork:molten_${name}`, 810,
      `${name}_molten_from_block`
    )
  })

  global.ALLOYS.forEach(entry => {
    const { name, block, ingot, nugget, heat, base1, base2, amount } = entry
    if (heat == 'low') {
      fluidHeat(
        nugget,
        `createmetalwork:molten_${name}`, 10,
        `${name}_molten_from_nugget`
      )
      fluidHeat(
        ingot,
        `createmetalwork:molten_${name}`, 90,
        `${name}_molten_from_ingot`
      )
      fluidHeat(
        block,
        `createmetalwork:molten_${name}`, 810,
        `${name}_molten_from_block`
      )
      fluidHeat(
        [base1, base2],
        `createmetalwork:molten_${name}`, amount,
        `alloying_molten_${name}`
      )
    } else if (heat == 'high') {
      fluidSuperheat(
        nugget,
        `createmetalwork:molten_${name}`, 10,
        `${name}_molten_from_nugget`
      )
      fluidSuperheat(
        ingot,
        `createmetalwork:molten_${name}`, 90,
        `${name}_molten_from_ingot`
      )
      fluidSuperheat(
        block,
        `createmetalwork:molten_${name}`, 810,
        `${name}_molten_from_block`
      )
      fluidSuperheat(
        [base1, base2],
        `createmetalwork:molten_${name}`, amount,
        `alloying_molten_${name}`
      )
    }
  })
})