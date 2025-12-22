ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, output, count) => {
    event.recipes.create.milling(
      Item.of(output, count),
      input
    ).id(`genesis:${recipeId}_millling`)
  }

  // Add recipes
  add('limestone', 'create:limestone', 'kubejs:limesand', 1)
  add('spiky_shell', 'create_aquatic_ambitions:spiky_shell', 'minecraft:bone_meal', 4)
})