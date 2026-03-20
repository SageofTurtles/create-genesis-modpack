ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, output) => {
    event.recipes.create.sandpaper_polishing(
      output,
      input
    ).id(`genesis:${recipeId}_polishing`)
  }

  // Add individual recipes
  add('diamond', 'kubejs:rough_diamond', 'minecraft:diamond')

  // Add bulk recipes
  global.LOCOMETAL.forEach(entry => {
    const { tag, colorless } = entry
    add(tag, `#railways:palettes/dye_groups/${tag}`, `railways:${colorless}`)
  })
})