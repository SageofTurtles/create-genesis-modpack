ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, output, recipeId) => {
    event.recipes.create.pressing(
      output,
      input
    ).id(`genesis:${recipeId}_pressing`)
  }

  // Add recipes
  add(
    'farmersdelight:tree_bark',
    'minecraft:paper',
    'paper'
  )
})