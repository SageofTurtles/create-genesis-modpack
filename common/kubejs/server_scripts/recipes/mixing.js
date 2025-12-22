ServerEvents.recipes(event => {
  // Define functions to create recipes
  const cool = (recipeId, inputs, output, count) => {
    event.recipes.create.mixing(
      Item.of(output, count),
      inputs
    ).id(`genesis:${recipeId}_mixing`)
  }
  const heat = (recipeId, inputs, output, count) => {
    event.recipes.create.mixing(
      Item.of(output, count),
      inputs
    ).heated().id(`genesis:${recipeId}_mixing`)
  }
  const superheat = (recipeId, inputs, output, count) => {
    event.recipes.create.mixing(
      Item.of(output, count),
      inputs
    ).superheated().id(`genesis:${recipeId}_mixing`)
  }
  const fluidHeat = (recipeId, inputs, outputFluid, amount) => {
    event.recipes.create.mixing(
      Fluid.of(outputFluid, amount),
      inputs
    ).heated().id(`genesis:${recipeId}_mixing`)
  }
  const fluidSuperheat = (recipeId, inputs, outputFluid, amount) => {
    event.recipes.create.mixing(
      Fluid.of(outputFluid, amount),
      inputs
    ).superheated().id(`genesis:${recipeId}_mixing`)
  }

  // Add non-heated recipes
  cool('bacon_and_eggs', ['2x farmersdelight:cooked_bacon', '2x #forge:cooked_eggs', 'minecraft:bowl'], 'farmersdelight:bacon_and_eggs', 1)
  cool('cod_roll', ['2x farmersdelight:cod_slice', 'farmersdelight:cooked_rice'], 'farmersdelight:cod_roll', 2)
  cool('diorite', ['minecraft:cobblestone', 'minecraft:quartz'], 'minecraft:diorite', 1)
  cool('fruit_salad', ['minecraft:apple', '2x minecraft:melon_slice', '2x #forge:berries', 'farmersdelight:pumpkin_slice', 'minecraft:bowl'], 'farmersdelight:fruit_salad', 1)
  cool('grilled_salmon', ['#forge:cooked_fished/salmon', 'minecraft:sweet_berries', '#forge:crops/cabbage', '#forge:crops/onion', 'minecraft:bowl'], 'farmersdelight:grilled_salmon', 1)
  cool('mixed_salad', ['#forge:salad_ingredients', '#forge:crops/tomato', 'minecraft:beetroot', 'minecraft:bowl'], 'farmersdelight:mixed_salad', 1)
  cool('nether_salad', ['minecraft:crimson_fungus', 'minecraft:warped_fungus', 'minecraft:bowl'], 'farmersdelight:nether_salad', 1)
  cool('powder_snow_bucket', ['minecraft:bucket', 'minecraft:snow_block'], 'minecraft:powder_snow_bucket', 1)
  cool('roasted_mutton_chops', ['farmersdelight:cooked_mutton_chops', 'minecraft:beetroot', 'farmersdelight:cooked_rice', '#forge:crops/tomato', 'minecraft:bowl'], 'farmersdelight:roasted_mutton_chops', 1)
  cool('salmon_roll', ['2x farmersdelight:salmon_slice', 'farmersdelight:cooked_rice'], 'farmersdelight:salmon_roll', 2)
  cool('spectral_arrow', ['8x minecraft:arrow', Fluid.of('create:potion', 125, { Bottle: 'REGULAR', Potion: 'minecraft:night_vision' })], 'minecraft:spectral_arrow', 8)
  cool('steak_and_potatoes', ['minecraft:baked_potato', '#forge:cooked_beef', '#forge:crops/onion', 'farmersdelight:cooked_rice', 'minecraft:bowl'], 'farmersdelight:steak_and_potatoes', 1)
  cool('stuffed_potato', ['minecraft:baked_potato', '#forge:cooked_beef', '#forge:milk'], 'farmersdelight:stuffed_potato', 1)

  // Add heated recipes
  heat('glistering_melon_slice', ['minecraft:melon_slice', Fluid.of('createmetalwork:molten_gold', 60)], 'minecraft:glistering_melon_slice', 1)
  heat('golden_apple', ['minecraft:apple', Fluid.of('createmetalwork:molten_gold', 540)], 'minecraft:golden_apple', 1)
  heat('golden_carrot', ['minecraft:carrot', Fluid.of('createmetalwork:molten_gold', 60)], 'minecraft:golden_carrot', 1)
  heat('prismarine_alloy', [Fluid.of('createmetalwork:molten_copper', 90), '4x minecraft:prismarine_shard'], 'create_aquatic_ambitions:prismarine_alloy', 1)

  // Add superheated recipes
  superheat('dragon_charge', ['minecraft:popped_chorus_fruit', 'minecraft:gunpowder', 'create:cinder_flour', Fluid.lava(250)], 'amendments:dragon_charge', 1)
  superheat('enchanted_golden_apple', ['minecraft:golden_apple', Fluid.of('create_enchantment_industry:experience', 100), Fluid.of('create:potion', 125, { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' }), Fluid.of('create:potion', 125, { Bottle: 'REGULAR', Potion: 'minecraft:fire_resistance' })], 'minecraft:enchanted_golden_apple', 1)

  // Add heated fluid recipes
  fluidHeat('alloying_molten_andesite_alloy_from_iron', [Fluid.of('createmetalwork:molten_andesite', 405), Fluid.of('createmetalwork:molten_iron', 10)], 'createmetalwork:molten_andesite_alloy', 90)
  fluidHeat('alloying_molten_andesite_alloy_from_zinc', [Fluid.of('createmetalwork:molten_andesite', 405), Fluid.of('createmetalwork:molten_zinc', 10)], 'createmetalwork:molten_andesite_alloy', 90)
  fluidHeat('andesite_molten_from_block', 'minecraft:andesite', 'createmetalwork:molten_andesite', 810)
  fluidHeat('lava', '5x minecraft:cobblestone', 'minecraft:lava', 250)

  // Add bulk recipes
  global.BASE_METALS.forEach(entry => {
    const { name, block, ingot, nugget } = entry
    if (nugget != null) {
      fluidHeat(`${name}_molten_from_nugget`, nugget, `createmetalwork:molten_${name}`, 10)
    }
    fluidHeat(`${name}_molten_from_block`, block, `createmetalwork:molten_${name}`, 810)
    fluidHeat(`${name}_molten_from_ingot`, ingot, `createmetalwork:molten_${name}`, 90)
  })

  global.ALLOYS.forEach(entry => {
    const { name, block, ingot, nugget, heat, base1, base2, amount } = entry
    if (heat == 'low') {
      fluidHeat(`${name}_molten_from_block`, block, `createmetalwork:molten_${name}`, 810)
      fluidHeat(`${name}_molten_from_ingot`, ingot, `createmetalwork:molten_${name}`, 90)
      fluidHeat(`${name}_molten_from_nugget`, nugget, `createmetalwork:molten_${name}`, 10)
      fluidHeat(`alloying_molten_${name}`, [base1, base2], `createmetalwork:molten_${name}`, amount)
    } else if (heat == 'high') {
      fluidSuperheat(`${name}_molten_from_block`, block, `createmetalwork:molten_${name}`, 810)
      fluidSuperheat(`${name}_molten_from_ingot`, ingot, `createmetalwork:molten_${name}`, 90)
      fluidSuperheat(`${name}_molten_from_nugget`, nugget, `createmetalwork:molten_${name}`, 10)
      fluidSuperheat(`alloying_molten_${name}`, [base1, base2], `createmetalwork:molten_${name}`, amount)
    }
  })

  global.FROGLIGHTS.forEach(entry => {
    const { name, froglight, dye } = entry
    cool(name, ['minecraft:shroomlight', dye, Fluid.water(250)], froglight, 1)
  })
})