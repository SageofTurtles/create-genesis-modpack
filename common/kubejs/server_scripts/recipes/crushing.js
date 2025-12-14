ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, outputs, recipeId) => {
    event.recipes.create.crushing(
      outputs,
      input
    ).id(`genesis:${recipeId}_crushing`)
  }

  // Add bulk recipes
  global.CORALS.forEach(entry => {
    add(
      `minecraft:${entry}_coral_block`,
      Item.of('create_aquatic_ambitions:suspicious_rock').withChance(0.05),
      `${entry}_coral_block`
    )
  })
})