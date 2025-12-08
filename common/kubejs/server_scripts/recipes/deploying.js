ServerEvents.recipes(event => {
  // Define function to create recipes
  const use = (baseItem, heldItem, output, recipeId) => {
    event.recipes.create.deploying(
      Item.of(output),
      [baseItem, heldItem]
    ).id(`genesis:${recipeId}_deploying`)
  }
  const keep = (baseItem, heldItem, output, recipeId) => {
    event.recipes.create.deploying(
      Item.of(output),
      [baseItem, heldItem]
    ).keepHeldItem().id(`genesis:${recipeId}_deploying`)
  }

  // Add bulk recipes
  global.OXIDIZATION_SETS.forEach(entry => {
    const { modid, block, pattern } = entry
    keep(
      `${modid}:${block}`,
      'minecraft:honeycomb_block',
      `${modid}:waxed_${block}`,
      `waxed_${block}`
    )
    keep(
      `${modid}:exposed_${pattern}`,
      'minecraft:honeycomb_block',
      `${modid}:waxed_exposed_${pattern}`,
      `waxed_exposed_${pattern}`
    )
    keep(
      `${modid}:weathered_${pattern}`,
      'minecraft:honeycomb_block',
      `${modid}:waxed_weathered_${pattern}`,
      `waxed_weathered_${pattern}`
    )
    keep(
      `${modid}:oxidized_${pattern}`,
      'minecraft:honeycomb_block',
      `${modid}:waxed_oxidized_${pattern}`,
      `waxed_oxidized_${pattern}`
    )
  })
})