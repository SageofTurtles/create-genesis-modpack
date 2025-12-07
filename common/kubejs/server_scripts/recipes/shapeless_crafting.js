ServerEvents.recipes(event => {
  // Define functions to create recipes
  const add = (inputs, output, count, recipeId) => {
    event.shapeless(
      Item.of(output, count),
      inputs
    ).id(`genesis:${recipeId}`)
  }

  // Add bulk recipes
  global.ADDITIVE_DOORS.forEach(entry => {
    const { name, base, input, output } = entry
    add(
      [base, input],
      output,
      name
    )
  })
})