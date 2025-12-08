ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (fluid, item, output, recipeId) => {
    event.recipes.create.filling(
      Item.of(output),
      [fluid, item]
    ).id(`genesis:${recipeId}_filling`)
  }

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