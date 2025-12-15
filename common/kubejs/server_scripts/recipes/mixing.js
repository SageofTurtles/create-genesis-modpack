ServerEvents.recipes(event => {
  // Define functions to create recipes
  const cool = (inputs, output, count, recipeId) => {
    event.recipes.create.mixing(
      Item.of(output, count),
      inputs
    ).id(`genesis:${recipeId}_mixing`)
  }
  const heat = (inputs, output, count, recipeId) => {
    event.recipes.create.mixing(
      Item.of(output, count),
      inputs
    ).heated().id(`genesis:${recipeId}_mixing`)
  }
  const superheat = (inputs, output, count, recipeId) => {
    event.recipes.create.mixing(
      Item.of(output, count),
      inputs
    ).superheated().id(`genesis:${recipeId}_mixing`)
  }
  const fluidCool = (inputs, output, amount, recipeId) => {
    event.recipes.create.mixing(
      Fluid.of(output, amount),
      inputs
    ).id(`genesis:${recipeId}_mixing`)
  }
  const fluidHeat = (inputs, output, amount, recipeId) => {
    event.recipes.create.mixing(
      Fluid.of(output, amount),
      inputs
    ).heated().id(`genesis:${recipeId}_mixing`)
  }
  const fluidSuperheat = (inputs, output, amount, recipeId) => {
    event.recipes.create.mixing(
      Fluid.of(output, amount),
      inputs
    ).superheated().id(`genesis:${recipeId}_mixing`)
  }

  // Add item non-heated recipes
  cool(
    [
      'minecraft:apple',
      '2x minecraft:melon_slice',
      '2x #forge:berries',
      'farmersdelight:pumpkin_slice',
      'minecraft:bowl'
    ],
    'farmersdelight:fruit_salad', 1,
    'fruit_salad'
  )
  cool(
    [
      '#forge:salad_ingredients',
      '#forge:crops/tomato',
      'minecraft:beetroot',
      'minecraft:bowl'
    ],
    'farmersdelight:mixed_salad', 1,
    'mixed_salad'
  )
  cool(
    [
      'minecraft:crimson_fungus',
      'minecraft:warped_fungus',
      'minecraft:bowl'
    ],
    'farmersdelight:nether_salad', 1,
    'nether_salad'
  )
  cool(
    [
      'minecraft:baked_potato',
      '#forge:cooked_beef',
      '#forge:milk'
    ],
    'farmersdelight:stuffed_potato', 1,
    'stuffed_potato'
  )
  cool(
    [
      '2x farmersdelight:salmon_slice',
      'farmersdelight:cooked_rice'
    ],
    'farmersdelight:salmon_roll', 2,
    'salmon_roll'
  )
  cool(
    [
      '2x farmersdelight:cod_slice',
      'farmersdelight:cooked_rice'
    ],
    'farmersdelight:cod_roll', 2,
    'cod_roll'
  )
  cool(
    [
      '2x farmersdelight:cooked_bacon',
      '2x #forge:cooked_eggs',
      'minecraft:bowl'
    ],
    'farmersdelight:bacon_and_eggs', 1,
    'bacon_and_eggs'
  )
  cool(
    [
      'farmersdelight:cooked_mutton_chops',
      'minecraft:beetroot',
      'farmersdelight:cooked_rice',
      '#forge:crops/tomato',
      'minecraft:bowl'
    ],
    'farmersdelight:roasted_mutton_chops', 1,
    'roasted_mutton_chops'
  )
  cool(
    [
      'minecraft:baked_potato',
      '#forge:cooked_beef',
      '#forge:crops/onion',
      'farmersdelight:cooked_rice',
      'minecraft:bowl'
    ],
    'farmersdelight:steak_and_potatoes', 1,
    'steak_and_potatoes'
  )
  cool(
    [
      '#forge:cooked_fished/salmon',
      'minecraft:sweet_berries',
      '#forge:crops/cabbage',
      '#forge:crops/onion',
      'minecraft:bowl'
    ],
    'farmersdelight:grilled_salmon', 1,
    'grilled_salmon'
  )

  // Add item heated recipes
  heat(
    [
      Fluid.of('createmetalwork:molten_copper', 90),
      '4x minecraft:prismarine_shard'
    ],
    'create_aquatic_ambitions:prismarine_alloy', 1,
    'prismarine_alloy'
  )

  // Add item superheated recipes
  superheat(
    [
      'minecraft:popped_chorus_fruit',
      'minecraft:gunpowder',
      'create:cinder_flour',
      Fluid.lava(250)
    ],
    'amendments:dragon_charge', 1,
    'dragon_charge'
  )

  // Add fluid heated recipes
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
  fluidHeat(
    '5x minecraft:cobblestone',
    'minecraft:lava', 250,
    'lava'
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