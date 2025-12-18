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

  global.LOG_SETS.forEach(entry => {
    add(
      `minecraft:${entry}_wood`,
      `minecraft:${entry}_log`, 1,
      `${entry}_log`
    )
    add(
      `minecraft:stripped_${entry}_wood`,
      `minecraft:stripped_${entry}_log`, 1,
      `stripped_${entry}_log`
    )
  })

  global.FUNGUS_SETS.forEach(entry => {
    add(
      `minecraft:${entry}_hyphae`,
      `minecraft:${entry}_stem`, 1,
      `${entry}_stem`
    )
    add(
      `minecraft:stripped_${entry}_hyphae`,
      `minecraft:stripped_${entry}_stem`, 1,
      `stripped_${entry}_stem`
    )
  })
})