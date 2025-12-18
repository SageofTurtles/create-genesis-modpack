ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, output, recipeId) => {
    event.recipes.create.splashing(
      output,
      input
    ).id(`genesis:${recipeId}_washing`)
  }

  // Add recipes
  add(
    'kubejs:limesand',
    [
      Item.of('create_ironworks:tin_nugget').withChance(0.12),
      Item.of('minecraft:clay_ball').withChance(0.2)
    ],
    'limesand'
  )
  add(
    '#genesis:luminous_glass_blocks',
    'luminousblocks:luminous_glass',
    'luminous_glass'
  )
  add(
    '#genesis:luminous_glass_panes',
    'luminousblocks:luminous_glass_pane',
    'luminous_glass_pane'
  )
  add(
    '#minecraft:wool_carpets',
    'minecraft:white_carpet',
    'wool_carpets'
  )
})