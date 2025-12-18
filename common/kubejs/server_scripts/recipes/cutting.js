ServerEvents.recipes(event => {
  // Define function to create recipes
  const axe = (input, output, recipeId) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [{ item: input }],
      results: [{ item: output }],
      tool: {
        type: 'farmersdelight:tool_action',
        action: 'axe_dig'
      }
    }).id(`genesis:${recipeId}_cutting`)
  }
  const knife = (input, outputArray, recipeId) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [{ item: input }],
      results: outputArray,
      tool: {
        tag: 'forge:tools/knives'
      }
    }).id(`genesis:${recipeId}_cutting`)
  }

  // Add recipes
  knife(
    'minecraft:pumpkin',
    [
      { item: 'minecraft:carved_pumpkin' },
      {
        item: 'minecraft:pumpkin_seeds',
        chance: 0.25
      }
    ],
    'pumpkin'
  )

  // Add bulk recipes
  global.OXIDIZATION_SETS.forEach(entry => {
    const { modid, block, pattern } = entry
    axe(
      `${modid}:waxed_oxidized_${pattern}`,
      `${modid}:oxidized_${pattern}`,
      `oxidized_${pattern}`
    )
    axe(
      `${modid}:waxed_weathered_${pattern}`,
      `${modid}:weathered_${pattern}`,
      `weathered_${pattern}`
    )
    axe(
      `${modid}:waxed_exposed_${pattern}`,
      `${modid}:exposed_${pattern}`,
      `exposed_${pattern}`
    )
    axe(
      `${modid}:waxed_${block}`,
      `${modid}:${block}`,
      `${block}`
    )
  })
})