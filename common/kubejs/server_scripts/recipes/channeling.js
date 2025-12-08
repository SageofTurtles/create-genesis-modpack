ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, output, recipeId) => {
    event.custom({
      type: 'create_aquatic_ambitions:channeling',
      ingredients: [{ item: input }],
      results: [{ item: output }]
    }).id(`genesis:${recipeId}_channeling`)
  }

  // Add bulk recipes
  global.OXIDIZATION_SETS.forEach(entry => {
    const { modid, block, pattern } = entry
    add(
      `${modid}:${block}`,
      `${modid}:exposed_${pattern}`,
      `exposed_${pattern}`
    )
    add(
      `${modid}:exposed_${pattern}`,
      `${modid}:weathered_${pattern}`,
      `weathered_${pattern}`
    )
    add(
      `${modid}:weathered_${pattern}`,
      `${modid}:oxidized_${pattern}`,
      `oxidized_${pattern}`
    )
  })
})