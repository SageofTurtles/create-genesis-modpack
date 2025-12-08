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

  // Add bulk recipes
  global.OXIDIZATION_SETS.forEach(entry => {
    const { modid, block, pattern } = entry
    axe(
      `${modid}:waxed_oxidized_${pattern}`,
      `${modid}:oxidized_${pattern}`,
      `unwaxing_oxidized_${pattern}`
    )
    axe(
      `${modid}:waxed_weathered_${pattern}`,
      `${modid}:weathered_${pattern}`,
      `unwaxing_weathered_${pattern}`
    )
    axe(
      `${modid}:waxed_exposed_${pattern}`,
      `${modid}:exposed_${pattern}`,
      `unwaxing_exposed_${pattern}`
    )
    axe(
      `${modid}:waxed_${block}`,
      `${modid}:${block}`,
      `unwaxing_${block}`
    )
  })
})