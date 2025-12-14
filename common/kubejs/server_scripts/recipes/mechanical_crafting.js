ServerEvents.recipes(event => {
  // Define functions to create recipes
  const custom = (pattern, keys, output, count, recipeId) => {
    event.recipes.create.mechanical_crafting(
      Item.of(output, count),
      pattern,
      keys
    ).id(`genesis:${recipeId}_mechanical_crafting`)
  }

  // Add recipes
  custom(
    [
      ' ABA ',
      'ACDCA',
      'AEFEA',
      ' G G '
    ],
    {
      A: 'create:brass_sheet',
      B: 'create:shaft',
      C: 'create:precision_mechanism',
      D: 'create:copper_backtank',
      E: 'create:propeller',
      F: 'create_ironworks:steel_armor_chestplate',
      G: 'create:chute'
    },
    'create_jetpack:jetpack', 1,
    'jetpack'
  )
  custom(
    [
      ' ABA ',
      'ACDCA',
      'AEFEA',
      ' G G '
    ],
    {
      A: 'create:brass_sheet',
      B: 'create:shaft',
      C: 'create:precision_mechanism',
      D: 'create:netherite_backtank',
      E: 'create:propeller',
      F: 'create_ironworks:steel_armor_chestplate',
      G: 'create:chute'
    },
    'create_jetpack:netherite_jetpack', 1,
    'netherite_jetpack'
  )
})