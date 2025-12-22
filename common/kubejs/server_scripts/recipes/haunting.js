ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, outputs) => {
    event.recipes.create.haunting(
      outputs,
      input
    ).id(`genesis:${recipeId}_haunting`)
  }

  // Add recipes
  add('cobblestone', 'minecraft:cobblestone', 'minecraft:infested_cobblestone')
  add('raw_meat', '#brewinandchewin:raw_meats', 'minecraft:rotten_flesh')
})