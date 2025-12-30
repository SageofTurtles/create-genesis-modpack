ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, outputs) => {
    event.recipes.create.splashing(
      outputs,
      input
    ).id(`genesis:${recipeId}_washing`)
  }

  // Add recipes
  add('gravel', 'minecraft:gravel', [Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:iron_nugget').withChance(0.06)])
  add('limesand', 'kubejs:limesand', [Item.of('minecraft:clay_ball').withChance(0.25), Item.of('create_ironworks:tin_nugget').withChance(0.06)])
  add('luminous_glass_blocks', '#genesis:luminous_glass_blocks', 'luminousblocks:luminous_glass')
  add('luminous_glass_panes', '#genesis:luminous_glass_panes', 'luminousblocks:luminous_glass_pane')
  add('red_sand', 'minecraft:red_sand', [Item.of('minecraft:gold_nugget', 3).withChance(0.06), Item.of('minecraft:dead_bush').withChance(0.05)])
  add('wool_carpets', '#minecraft:wool_carpets', 'minecraft:white_carpet')
})