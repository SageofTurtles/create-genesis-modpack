ServerEvents.recipes(event => {
  // Wood to Log recycling
  const woods = [
    { type: 'oak', log: 'log', bark: 'wood' },
    { type: 'spruce', log: 'log', bark: 'wood' },
    { type: 'birch', log: 'log', bark: 'wood' },
    { type: 'jungle', log: 'log', bark: 'wood' },
    { type: 'acacia', log: 'log', bark: 'wood' },
    { type: 'dark_oak', log: 'log', bark: 'wood' },
    { type: 'mangrove', log: 'log', bark: 'wood' },
    { type: 'cherry', log: 'log', bark: 'wood' },
    { type: 'crimson', log: 'stem', bark: 'hyphae' },
    { type: 'warped', log: 'stem', bark: 'hyphae' }
  ]

  woods.forEach(wood => {
    event.recipes.create.cutting(
      `minecraft:${wood.type}_${wood.log}`,
      `minecraft:${wood.type}_${wood.bark}`,
    ).id(`genesis:${wood.type}_${wood.log}_from_${wood.type}_${wood.bark}_cutting`)
    event.recipes.create.cutting(
      `minecraft:stripped_${wood.type}_${wood.log}`,
      `minecraft:stripped_${wood.type}_${wood.bark}`,
    ).id(`genesis:stripped_${wood.type}_${wood.log}_from_stripped_${wood.type}_${wood.bark}_cutting`)
  })
})