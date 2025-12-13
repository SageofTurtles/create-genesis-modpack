ServerEvents.recipes(event => {
  // Define functions to create recipes
  const add = (inputs, output, count, recipeId) => {
    event.shapeless(
      Item.of(output, count),
      inputs
    ).id(`genesis:${recipeId}_shapeless`)
  }

  // Add individual recipes
  add(
    [
      'createdeco:gold_coin',
      'create:sturdy_sheet',
      'minecraft:paper'
    ],
    'numismatics:banking_guide', 1,
    'banking_guide'
  )
  add(
    [
      'farmersdelight:rope',
      'farmersdelight:rope'
    ],
    'minecraft:lead', 2,
    'lead'
  )
  add(
    [
      'farmersdelight:rope',
      'minecraft:iron_ingot'
    ],
    'comforts:rope_and_nail', 1,
    'rope_and_nail'
  )

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