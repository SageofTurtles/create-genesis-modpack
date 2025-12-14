ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, output, count, recipeId) => {
    event.recipes.create.milling(
      Item.of(output, count),
      input
    ).id(`genesis:${recipeId}_millling`)
  }

  // Add recipes
  add(
    'create:limestone',
    'kubejs:limesand', 1,
    'limestone'
  )
  add(
    'create_aquatic_ambitions:spiky_shell',
    'minecraft:bone_meal', 4,
    'spiky_shell'
  )
})