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
      ' 121 ',
      '13431',
      '15651',
      ' 7 7 '
    ],
    {
      1: 'create:brass_sheet',
      2: 'create:shaft',
      3: 'create:precision_mechanism',
      4: 'create:copper_backtank',
      5: 'create:propeller',
      6: 'create_ironworks:steel_armor_chestplate',
      7: 'create:chute'
    },
    'create_jetpack:jetpack', 1,
    'jetpack'
  )
  custom(
    [
      ' 121 ',
      '13431',
      '15651',
      ' 7 7 '
    ],
    {
      1: 'create:brass_sheet',
      2: 'create:shaft',
      3: 'create:precision_mechanism',
      4: 'create:netherite_backtank',
      5: 'create:propeller',
      6: 'create_ironworks:steel_armor_chestplate',
      7: 'create:chute'
    },
    'create_jetpack:netherite_jetpack', 1,
    'netherite_jetpack'
  )
})