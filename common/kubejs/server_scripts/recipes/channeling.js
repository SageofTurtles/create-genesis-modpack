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

  // Add single-output recipes
  single(
    'leather',
    'minecraft:leather',
    'minecraft:scute'
  )

  // Add multiple-output recipes
  multi(
    'sponge',
    'minecraft:sponge',
    [
      { item: 'minecraft:wet_sponge' },
      { item: 'minecraft:wet_sponge', chance: 0.1 }
    ]
  )

  // Add bulk recipes
  global.OXIDIZATION_SETS.forEach(entry => {
    const { modid, block, pattern } = entry
    single(
      `${block}`,
      `${modid}:${block}`,
      `${modid}:exposed_${pattern}`
    )
    single(
      `exposed_${pattern}`,
      `${modid}:exposed_${pattern}`,
      `${modid}:weathered_${pattern}`
    )
    single(
      `weathered_${pattern}`,
      `${modid}:weathered_${pattern}`,
      `${modid}:oxidized_${pattern}`
    )
  })
})