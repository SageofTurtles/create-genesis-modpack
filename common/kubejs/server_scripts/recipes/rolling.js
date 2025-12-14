ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, output, outputCount, recipeId) => {
    event.custom({
      type: 'createaddition:rolling',
      input: {
        item: input
      },
      result: {
        item: output,
        count: outputCount
      }
    }).id(`genesis:${recipeId}_rolling`)
  }

  // Add recipes
  add(
    'minecraft:leather',
    'kubejs:empty_ink_sac', 2,
    'leather'
  )
  add(
    'create_aquatic_ambitions:prismarine_alloy',
    'create_aquatic_ambitions:prismarine_alloy_rod', 2,
    'prismarine_alloy'
  )
})