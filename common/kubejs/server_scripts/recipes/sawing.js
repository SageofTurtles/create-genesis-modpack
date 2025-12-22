ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, output, count) => {
    event.recipes.create.cutting(
      Item.of(output, count),
      input
    ).id(`genesis:${recipeId}_sawing`)
  }

  // Add bulk recipes
  global.SAWING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab } = entry
    add(`${name}_slab`, block, slab, 2)
    add(`${name}_stairs`, block, stairs, 1)
  })

  global.WOOD_TYPES.forEach(entry => {
    const { type, name, log, bark, stripped, stripped_bark, planks } = entry
    if (type != 'bamboo') {
      add(`${name}_log`, bark, log, 1)
      add(`stripped_${name}_log`, stripped_bark, stripped, 1)
    }
  })
})