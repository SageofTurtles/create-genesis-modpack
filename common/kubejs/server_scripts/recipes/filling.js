ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (fluid, item, output, recipeId) => {
    event.recipes.create.filling(
      Item.of(output),
      [fluid, item]
    ).id(`genesis:${recipeId}_filling`)
  }

  // Add individual recipes
  add(
    Fluid.of('create:potion', 500, { Bottle: "REGULAR", Potion: 'minecraft:strong_regeneration' }),
    'minecraft:amethyst_block',
    'minecraft:budding_amethyst',
    'budding_amethyst'
  )
  add(
    Fluid.of('create_enchantment_industry:ink', 250),
    'kubejs:empty_ink_sac',
    'minecraft:ink_sac', 1,
    'ink_sac'
  )
  add(
    Fluid.of('sliceanddice:fertilizer', 25),
    'minecraft:grass_block',
    'minecraft:podzol',
    'podzol'
  )
  add(
    Fluid.water(250),
    'minecraft:clay',
    'minecraft:pointed_dripstone',
    'pointed_dripstone'
  )

  // Add bulk recipes
  global.WILD_CROPS.forEach(entry => {
    const { tame, wild } = entry
    add(
      Fluid.of('sliceanddice:fertilizer', 250),
      tame,
      `farmersdelight:${wild}`,
      wild
    )
  })
})