ServerEvents.recipes(event => {
  // Fruit Salad mixing recipe
  event.recipes.create.mixing(
    'farmersdelight:fruit_salad',
    [
      'minecraft:apple',
      'minecraft:melon_slice',
      'minecraft:melon_slice',
      '#forge:berries',
      '#forge:berries',
      'farmersdelight:pumpkin_slice',
      'minecraft:bowl'
    ]
  ).id('genesis:fruit_salad_mixing')

  // Mixed Salad mixing recipe
  event.recipes.create.mixing(
    'farmersdelight:mixed_salad',
    [
      '#forge:salad_ingredients',
      '#forge:crops/tomato',
      'minecraft:beetroot',
      'minecraft:bowl'
    ]
  ).id('genesis:mixed_salad_mixing')

  // Nether Salad mixing recipe
  event.recipes.create.mixing(
    'farmersdelight:nether_salad',
    [
      'minecraft:crimson_fungus',
      'minecraft:warped_fungus',
      'minecraft:bowl'
    ]
  ).id('genesis:nether_salad_mixing')

  // Stuffed Potato mixing recipe
  event.recipes.create.mixing(
    'farmersdelight:stuffed_potato',
    [
      'minecraft:baked_potato',
      '#forge:cooked_beef',
      '#forge:milk'
    ]
  ).id('genesis:stuffed_potato_mixing')

  // Salmon Roll mixing recipe
  event.recipes.create.mixing(
    '2x farmersdelight:salmon_roll',
    [
      'farmersdelight:salmon_slice',
      'farmersdelight:salmon_slice',
      'farmersdelight:cooked_rice'
    ]
  ).id('genesis:salmon_roll_mixing')

  // Cod Roll mixing recipe
  event.recipes.create.mixing(
    '2x farmersdelight:cod_roll',
    [
      'farmersdelight:cod_slice',
      'farmersdelight:cod_slice',
      'farmersdelight:cooked_rice'
    ]
  ).id('genesis:cod_roll_mixing')

  // Bacon and Eggs mixing recipe
  event.recipes.create.mixing(
    'farmersdelight:bacon_and_eggs',
    [
      'farmersdelight:cooked_bacon',
      'farmersdelight:cooked_bacon',
      '#forge:cooked_eggs',
      '#forge:cooked_eggs',
      'minecraft:bowl'
    ]
  ).id('genesis:bacon_and_eggs_mixing')

  // Roasted Mutton Chops mixing recipe
  event.recipes.create.mixing(
    'farmersdelight:roasted_mutton_chops',
    [
      'farmersdelight:cooked_mutton_chops',
      'minecraft:beetroot',
      'farmersdelight:cooked_rice',
      '#forge:crops/tomato',
      'minecraft:bowl'
    ]
  ).id('genesis:roasted_mutton_chops_mixing')

  // Steak and Potatoes mixing recipe
  event.recipes.create.mixing(
    'farmersdelight:steak_and_potatoes',
    [
      'minecraft:baked_potato',
      'minecraft:cooked_beef',
      '#forge:crops/onion',
      'farmersdelight:cooked_rice',
      'minecraft:bowl'
    ]
  ).id('genesis:steak_and_potatoes_mixing')

  // Grilled Salmon mixing recipe
  event.recipes.create.mixing(
    'farmersdelight:grilled_salmon',
    [
      '#forge:cooked_fishes/salmon',
      'minecraft:sweet_berries',
      '#forge:crops/cabbage',
      '#forge:crops/onion',
      'minecraft:bowl'
    ]
  ).id('genesis:grilled_salmon_mixing')

  // Cabinets
  const woodTypes = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove',
    'cherry',
    'bamboo',
    'crimson',
    'warped'
  ]

  woodTypes.forEach(wood => {
    event.shaped(
      `4x farmersdelight:${wood}_cabinet`,
      [
        'PP',
        'DD',
        'PP'
      ],
      {
        P: `minecraft:${wood}_planks`,
        D: 'mcwfurnitures:cabinet_door'
      }
    ).id(`farmersdelight:${wood}_cabinet`)
  })

  // Canvas
  event.replaceInput(
    { id: 'farmersdelight:canvas' },
    'farmersdelight:straw',
    '#supplementaries:straw'
  )

  // Honey Cookie
  event.shaped(
    '8x farmersdelight:honey_cookie',
    [
      'WHW'
    ],
    {
      W: 'create:wheat_flour',
      H: 'minecraft:honey_bottle'
    }
  ).id('farmersdelight:honey_cookie')
})