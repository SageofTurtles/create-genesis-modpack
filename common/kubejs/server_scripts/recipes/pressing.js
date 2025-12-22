ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, output) => {
    event.recipes.create.pressing(
      output,
      input
    ).id(`genesis:${recipeId}_pressing`)
  }

  // Add recipes
  add('tree_bark', 'farmersdelight:tree_bark', 'minecraft:paper')
})