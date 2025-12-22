ServerEvents.recipes(event => {
  // Define function to create recipes
  const axe = (recipeId, input, output) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [{ item: input }],
      result: [{ item: output }],
      tool: {
        type: 'farmersdelight:tool_action',
        action: 'axe_dig'
      }
    }).id(`genesis:${recipeId}_cutting`)
  }
  const knife = (recipeId, input, outputs) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [{ item: input }],
      result: outputs,
      tool: {
        tag: 'forge:tools/knives'
      }
    }).id(`genesis:${recipeId}_cutting`)
  }

  // Add individual recipes
  knife('pumpkin', 'minecraft:pumpkin', [{ item: 'minecraft:carved_pumpkin' }, { item: 'minecraft:pumpkin_seeds', chance: 0.25 }])

  // Add bulk recipes
  global.COPPER_OXIDIZATION.forEach(entry => {
    const { modid, base, exposed, weathered, oxidized } = entry
    axe(`waxed_${base}`, `${modid}:waxed_${base}`, `${modid}:${base}`)
    axe(`waxed_${exposed}`, `${modid}:waxed_${exposed}`, `${modid}:${exposed}`)
    axe(`waxed_${weathered}`, `${modid}:waxed_${weathered}`, `${modid}:${weathered}`)
    axe(`waxed_${oxidized}`, `${modid}:waxed_${oxidized}`, `${modid}:${oxidized}`)
  })
})