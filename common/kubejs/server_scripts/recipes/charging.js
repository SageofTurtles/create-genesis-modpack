ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, output, recipeId) => {
    event.custom({
      type: 'createaddition:charging',
      ingredients: [{ item: input }],
      results: [{ item: output }],
      energy: 4000,
      maxChargeRate: 200
    }).id(`genesis:${recipeId}_charging`)
  }

  // Add individual recipes
  add(
    'createaddition:electrum_rod',
    'minecraft:blaze_rod',
    'blaze_rod'
  )

  // Add bulk recipes
  global.OXIDIZATION_SETS.forEach(entry => {
    const { modid, block, pattern } = entry
    add(
      `${modid}:oxidized_${pattern}`,
      `${modid}:weathered_${pattern}`,
      `weathered_${pattern}`
    )
    add(
      `${modid}:weathered_${pattern}`,
      `${modid}:exposed_${pattern}`,
      `exposed_${pattern}`
    )
    add(
      `${modid}:exposed_${pattern}`,
      `${modid}:${block}`,
      `${block}`
    )
  })
})