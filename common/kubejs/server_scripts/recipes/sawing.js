ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, output, count, recipeId) => {
    event.recipes.create.cutting(
      Item.of(output, count),
      input
    ).id(`genesis:${recipeId}_sawing`)
  }

  // Add bulk recipes
  global.SAWING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab } = entry
    add(
      block,
      slab, 2,
      `${name}_slab`
    )
    add(
      block,
      stairs, 1,
      `${name}_stairs`
    )
  })
})