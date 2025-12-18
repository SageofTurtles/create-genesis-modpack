ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, output) => {
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
    'blaze_rod',
    'createaddition:electrum_rod',
    'minecraft:blaze_rod'
  )

  // Add bulk recipes
  global.OXIDIZATION_SETS.forEach(entry => {
    const { modid, block, pattern } = entry
    add(
      `weathered_${pattern}`,
      `${modid}:oxidized_${pattern}`,
      `${modid}:weathered_${pattern}`
    )
    add(
      `exposed_${pattern}`,
      `${modid}:weathered_${pattern}`,
      `${modid}:exposed_${pattern}`
    )
    add(
      `${block}`,
      `${modid}:exposed_${pattern}`,
      `${modid}:${block}`
    )
  })
})