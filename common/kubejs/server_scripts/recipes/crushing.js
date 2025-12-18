ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, outputs) => {
    event.recipes.create.crushing(
      outputs,
      input
    ).id(`genesis:${recipeId}_crushing`)
  }

  // Add individual recipes
  add(
    'tuff',
    '#create:stone_types/tuff',
    [
      Item.of('minecraft:flint').withChance(0.25),
      Item.of('create:zinc_nugget').withChance(0.12)
    ]
  )
  add(
    'flint_block',
    'supplementaries:flint_block',
    Item.of('minecraft:gravel').withChance(0.85)
  )

  // Add bulk recipes
  global.CORALS.forEach(entry => {
    add(
      `${entry}_coral_block`,
      `minecraft:${entry}_coral_block`,
      Item.of('create_aquatic_ambitions:suspicious_rock').withChance(0.05)
    )
  })
})