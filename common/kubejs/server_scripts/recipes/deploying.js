ServerEvents.recipes(event => {
  // Define function to create recipes
  const consumeItem = (recipeId, baseItem, heldItem, output) => {
    event.recipes.create.deploying(
      Item.of(output),
      [baseItem, heldItem]
    ).id(`genesis:${recipeId}_deploying`)
  }
  const keepItem = (recipeId, baseItem, heldItem, output) => {
    event.recipes.create.deploying(
      Item.of(output),
      [baseItem, heldItem]
    ).keepHeldItem().id(`genesis:${recipeId}_deploying`)
  }

  // Add individual recipes
  consumeItem('industrial_gears', 'petrolsparts:differential', 'createdeco:industrial_iron_ingot', 'immersive_aircraft:industrial_gears')
  consumeItem('reinforced_hull', 'immersive_aircraft:hull', 'create_ironworks:steel_sheet', 'immersive_aircraft:hull_reinforcement')
  consumeItem('sturdy_piping', 'create:fluid_pipe', 'create:sturdy_sheet', 'immersive_aircraft:sturdy_pipes')

  // Add bulk recipes
  global.COPPER_OXIDIZATION.forEach(entry => {
    const { modid, base, exposed, weathered, oxidized } = entry
    keepItem(`waxed_${base}`, `${modid}:${base}`, 'minecraft:honeycomb_block', `${modid}:waxed_${base}`)
    keepItem(`waxed_${exposed}`, `${modid}:${exposed}`, 'minecraft:honeycomb_block', `${modid}:waxed_${exposed}`)
    keepItem(`waxed_${weathered}`, `${modid}:${weathered}`, 'minecraft:honeycomb_block', `${modid}:waxed_${weathered}`)
    keepItem(`waxed_${oxidized}`, `${modid}:${oxidized}`, 'minecraft:honeycomb_block', `${modid}:waxed_${oxidized}`)
  })

  global.MUSIC_DISCS.forEach(entry => {
    const { modid, disc } = entry
    keepItem(disc, '#minecraft:music_discs', `${modid}:${disc}`, `${modid}:${disc}`)
  })
})