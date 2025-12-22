ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, output) => {
    event.custom({
      type: 'createaddition:charging',
      input: [{ item: input }],
      result: [{ item: output }],
      energy: 4000,
      maxChargeRate: 200
    }).id(`genesis:${recipeId}_charging`)
  }

  // Add individual recipes
  add('electrum_rod', 'createaddition:electrum_rod', 'minecraft:blaze_rod')

  // Add bulk recipes
  global.COPPER_OXIDIZATION.forEach(entry => {
    const { modid, base, exposed, weathered, oxidized } = entry
    add(`${exposed}`, `${modid}:${exposed}`, `${modid}:${base}`)
    add(`${weathered}`, `${modid}:${weathered}`, `${modid}:${exposed}`)
    add(`${oxidized}`, `${modid}:${oxidized}`, `${modid}:${weathered}`)
  })
})