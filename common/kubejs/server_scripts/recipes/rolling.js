ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, inputItem, outputItem, outputCount) => {
    event.custom({
      type: 'createaddition:rolling',
      input: {
        item: inputItem
      },
      result: {
        item: outputItem,
        count: outputCount
      }
    }).id(`genesis:${recipeId}_rolling`)
  }

  // Add recipes
  add('leather', 'minecraft:leather', 'kubejs:empty_ink_sac', 2)
  add('prismarine_alloy', 'create_aquatic_ambitions:prismarine_alloy', 'create_aquatic_ambitions:prismarine_alloy_rod', 2)
})