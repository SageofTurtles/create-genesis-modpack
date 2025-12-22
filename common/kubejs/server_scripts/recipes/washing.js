ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, outputs) => {
    event.recipes.create.splashing(
      outputs,
      input
    ).id(`genesis:${recipeId}_washing`)
  }

  // Add recipes
  add('limesand', 'kubejs:limesand', [Item.of('create_ironworks:tin_nugget').withChance(0.12), Item.of('minecraft:clay_ball').withChance(0.2)])
  add('luminous_glass_blocks', '#genesis:luminous_glass_blocks', 'luminousblocks:luminous_glass')
  add('luminous_glass_panes', '#genesis:luminous_glass_panes', 'luminousblocks:luminous_glass_pane')
  add('wool_carpets', '#minecraft:wool_carpets', 'minecraft:white_carpet')
})