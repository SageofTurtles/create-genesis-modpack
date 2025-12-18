ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, output, recipeId) => {
    event.recipes.create.haunting(
      output,
      input
    ).id(`genesis:${recipeId}_haunting`)
  }

  // Add recipes
  add(
    'minecraft:cobblestone',
    'minecraft:infested_cobblestone',
    'cobblestone'
  )
  add(
    '#brewinandchewin:raw_meats',
    'minecraft:rotten_flesh',
    'rotten_flesh'
  )
})