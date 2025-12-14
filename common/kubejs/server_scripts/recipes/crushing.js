ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, outputs, recipeId) => {
    event.recipes.create.crushing(
      outputs,
      input
    ).id(`genesis:${recipeId}_crushing`)
  }

  // Add individual recipes
  add(
    '#create:stone_types/tuff',
    [
      Item.of('minecraft:flint').withChance(0.25),
      Item.of('create:zinc_nugget').withChance(0.12)
    ],
    'tuff'
  )

  // Add bulk recipes
  global.CORALS.forEach(entry => {
    add(
      `minecraft:${entry}_coral_block`,
      Item.of('create_aquatic_ambitions:suspicious_rock').withChance(0.05),
      `${entry}_coral_block`
    )
  })
})