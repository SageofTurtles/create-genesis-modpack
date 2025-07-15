ServerEvents.recipes(event => {
  // Cage
  event.shaped(
    Item.of('supplementaries:cage'),
    [
      'SSS',
      'R R',
      'SSS'
    ],
    {
      S: 'create:iron_sheet',
      R: 'createaddition:iron_rod'
    }
  ).id('supplementaries:cage')

  // Antique Ink
  event.recipes.create.filling(
    'supplementaries:antique_ink',
    [
      Fluid.of('create_enchantment_industry:ink', 250),
      'minecraft:glass_bottle'
    ]
  ).id('genesis:antique_ink')

  // Quiver
  event.shaped(
    Item.of('supplementaries:quiver', 1),
    [
      'L L',
      'L L',
      ' L '
    ],
    {
      L: 'minecraft:leather'
    }
  ).id('genesis:quiver')

  // Globe
  event.shaped(
    Item.of('supplementaries:globe', 1),
    [
      ' R ',
      'GPB',
      ' S '
    ],
    {
      R: 'createaddition:gold_rod',
      G: 'minecraft:green_dye',
      P: '#minecraft:planks',
      B: 'minecraft:blue_dye',
      S: 'create:golden_sheet'
    }
  ).id('genesis:globe')

  // Slice Map
  event.replaceInput(
    { id: 'supplementaries:slice_map' },
    'supplementaries:altimeter',
    'minecraft:black_dye'
  )

  // Sack
  event.replaceInput(
    { id: 'supplementaries:sack' },
    '#forge:crops/flax',
    'farmersdelight:canvas'
  )

  // Key
  event.shaped(
    'supplementaries:key',
    [
      'I',
      'N',
      'N'
    ],
    {
      I: 'create_ironworks:bronze_ingot',
      N: 'create_ironworks:bronze_nugget'
    }
  ).id('supplementaries:key')
})