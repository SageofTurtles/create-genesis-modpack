ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, output, recipeId) => {
    event.recipes.create.sandpaper_polishing(
      output,
      input
    ).id(`genesis:${recipeId}_polishing`)
  }

  // Add recipes
  add(
    'kubejs:rough_diamond',
    'minecraft:diamond',
    'rough_diamond'
  )
})