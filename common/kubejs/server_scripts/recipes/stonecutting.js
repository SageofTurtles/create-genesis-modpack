ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, output, count, recipeId) => {
    event.stonecutting(
      Item.of(output, count),
      input
    ).id(`genesis:${recipeId}_stonecutting`)
  }

  // Add bulk recipes
  global.STONECUTTING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab, wall } = entry
    add(
      block,
      slab, 2,
      `${name}_slab`
    )
    if (stairs != null) {
      add(
        block,
        stairs, 1,
        `${name}_stairs`
      )
    }
    if (wall != null) {
      add(
        block,
        wall, 1,
        `${name}_wall`
      )
    }
  })
})