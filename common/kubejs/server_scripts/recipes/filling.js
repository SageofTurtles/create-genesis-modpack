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