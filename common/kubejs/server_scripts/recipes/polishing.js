ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, output) => {
    event.recipes.create.sandpaper_polishing(
      output,
      input
    ).id(`genesis:${recipeId}_polishing`)
  }

  // Add recipes
  add('diamrough_diamondond', 'kubejs:rough_diamond', 'minecraft:diamond')
})