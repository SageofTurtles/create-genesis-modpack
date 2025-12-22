ServerEvents.recipes(event => {
  // Define function to create recipes
  const single = (recipeId, input, output) => {
    event.custom({
      type: 'create_aquatic_ambitions:channeling',
      ingredients: [{ item: input }],
      results: [{ item: output }]
    }).id(`genesis:${recipeId}_channeling`)
  }
  const multi = (recipeId, input, outputs) => {
    event.custom({
      type: 'create_aquatic_ambitions:channeling',
      ingredients: [{ item: input }],
      results: outputs
    }).id(`genesis:${recipeId}_channeling`)
  }

  // Add individual recipes
  multi('sponge', 'minecraft:sponge', [{ item: 'minecraft:wet_sponge' }, { item: 'minecraft:wet_sponge', chance: 0.1 }])
  single('leather', 'minecraft:leather', 'minecraft:scute')

  // Add bulk recipes
  global.COPPER_OXIDIZATION.forEach(entry => {
    const { modid, base, exposed, weathered, oxidized } = entry
    single(`${base}`, `${modid}:${base}`, `${modid}:${exposed}`)
    single(`${exposed}`, `${modid}:${exposed}`, `${modid}:${weathered}`)
    single(`${weathered}`, `${modid}:${weathered}`, `${modid}:${oxidized}`)
  })
})