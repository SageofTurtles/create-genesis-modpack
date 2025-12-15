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
  custom(
    [
      'ABA',
      'CDC',
      'CEC',
      'ACA'
    ],
    {
      A: 'create:andesite_alloy',
      B: 'create:transmitter',
      C: 'create:iron_sheet',
      D: '#forge:glass_panes/colorless',
      E: 'create:precision_mechanism'
    },
    'createrailwaysnavigator:navigator', 1,
    'navigator'
  )
  custom(
    [
      'AAAAA',
      ' B B ',
      ' CDE ',
      ' FFF '
    ],
    {
      A: 'immersive_aircraft:sail',
      B: 'farmersdelight:rope',
      C: '#create:seats',
      D: 'immersive_aircraft:engine',
      E: 'immersive_aircraft:propeller',
      F: 'immersive_aircraft:hull'
    },
    'immersive_aircraft:airship', 1,
    'airship'
  )
  custom(
    [
      'AAAAA',
      'BC CB',
      'BDEFB',
      ' GGG '
    ],
    {
      A: 'immersive_aircraft:sail',
      B: 'minecraft:chest',
      C: 'farmersdelight:rope',
      D: '#create:seats',
      E: 'immersive_aircraft:engine',
      F: 'immersive_aircraft:propeller',
      G: 'immersive_aircraft:hull'
    },
    'immersive_aircraft:cargo_airship', 1,
    'cargo_airship'
  )
  custom(
    [
      'AAAAA',
      ' B B ',
      'CDECD',
      ' FFF '
    ],
    {
      A: 'immersive_aircraft:sail',
      B: 'farmersdelight:rope',
      C: 'immersive_aircraft:propeller',
      D: 'immersive_aircraft:engine',
      E: 'immersive_aircraft:cargo_airship',
      F: 'immersive_aircraft:hull_reinforcement'
    },
    'immersive_aircraft:warship', 1,
    'warship'
  )
  custom(
    [
      '   A ',
      'A  A ',
      'BBCDE',
      'A  A  ',
      '   A '
    ],
    {
      A: 'immersive_aircraft:sail',
      B: 'immersive_aircraft:hull',
      C: '#create:seats',
      D: 'immersive_aircraft:engine',
      E: 'immersive_aircraft:propeller'
    },
    'immersive_aircraft:biplane', 1,
    'biplane'
  )
  custom(
    [
      '   A ',
      'ABBCD',
      'A EEE',
      'ABBCD',
      '   A '
    ],
    {
      A: 'immersive_aircraft:sail',
      B: 'immersive_aircraft:hull',
      C: 'immersive_aircraft:engine',
      D: 'immersive_aircraft:propeller',
      E: '#create:seats'
    },
    'immersive_aircraft:bamboo_hopper', 1,
    'seaplane'
  )
  custom(
    [
      '   A ',
      'A BA ',
      'CCDAE',
      'A BA ',
      '   A '
    ],
    {
      A: 'immersive_aircraft:sail',
      B: 'immersive_aircraft:propeller',
      C: 'immersive_aircraft:hull',
      D: 'immersive_aircraft:eco_engine',
      E: '#create:seats'
    },
    'man_of_many_planes:economy_plane', 1,
    'economy_plane'
  )
  custom(
    [
      '   A ',
      'A BA ',
      'CCDEF',
      'A BA ',
      '   A '
    ],
    {
      A: 'decorative_blocks:dark_oak_support',
      B: 'minecraft:red_dye',
      C: 'immersive_aircraft:hull',
      D: '#create:seats',
      E: 'immersive_aircraft:engine',
      F: 'immersive_aircraft:enhanced_propeller'
    },
    'man_of_many_planes:scarlet_biplane', 1,
    'scarlet_biplane'
  )
})