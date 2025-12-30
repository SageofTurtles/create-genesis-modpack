ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, output) => {
    event.smelting(
      output,
      input
    ).id(`genesis:${recipeId}_smelting`)
  }

  // Add recipes
  add('rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:leather')
})