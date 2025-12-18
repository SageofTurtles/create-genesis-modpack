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

  // Add single-use recipes
  use(
    'immersive_aircraft:hull',
    'create_ironworks:steel_sheet',
    'immersive_aircraft:hull_reinforcement',
    'reinforced_hull'
  )
  use(
    'petrolsparts:differential',
    'createdeco:industrial_iron_ingot',
    'immersive_aircraft:industrial_gears',
    'industrial_gears'
  )
  use(
    'create:fluid_pipe',
    'create:sturdy_sheet',
    'immersive_aircraft:sturdy_pipes',
    'sturdy_piping'
  )

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

  global.MUSIC_DISCS.forEach(entry => {
    const { modid, disc } = entry
    keep(
      '#minecraft:music_discs',
      `${modid}:${disc}`,
      `${modid}:${disc}`,
      disc
    )
  })
})