ServerEvents.recipes(event => {
  // Short Sight
  event.shaped(
    Item.of('cgm:short_scope', 1),
    [
      'N',
      'S'
    ],
    {
      N: 'createdeco:industrial_iron_nugget',
      S: 'createdeco:industrial_iron_sheet'
    }
  ).id('genesis:short_scope')

  // Medium Scope
  event.recipes.create.deploying(
    'cgm:medium_scope',
    [
      'minecraft:spyglass',
      'create:brass_sheet'
    ]
  ).id('genesis:medium_scope')

  // Long Scope
  event.recipes.create.deploying(
    'cgm:long_scope',
    [
      'cgm:medium_scope',
      'create:framed_glass'
    ]
  ).id('genesis:long_scope')

  // Dynamite
  event.recipes.create.cutting(
    '3x cgm:grenade',
    'minecraft:tnt'
  ).id('genesis:grenade')

  // Stun Grenade
  event.shapeless(
    Item.of('cgm:stun_grenade', 1),
    [
      'cgm:grenade',
      'minecraft:glowstone_dust'
    ]
  ).id('genesis:stun_grenade')

  // Silencer
  event.recipes.create.deploying(
    'cgm:silencer',
    [
      'create:iron_sheet',
      'minecraft:sponge'
    ]
  ).id('genesis:silencer')

  // Wooden Stock
  event.shaped(
    Item.of('cgm:tactical_stock', 1),
    [
      'L',
      'L',
      'B'
    ], {
      L: '#forge:stripped_logs',
      B: 'create:brass_sheet'
    }
  ).id('genesis:tactical_stock')

  // Weighted Stock
  event.shaped(
    Item.of('cgm:weighted_stock', 1),
    [
      'L',
      'S',
      'B'
    ], {
      L: '#forge:stripped_logs',
      S: 'cgm:tactical_stock',
      B: 'create:brass_sheet'
    }
  ).id('genesis:weighted_stock')

  // Light Stock
  event.shaped(
    Item.of('cgm:light_stock', 1),
    [
      'I',
      'P',
      'B'
    ], {
      I: 'createaddition:iron_rod',
      P: '#minecraft:planks',
      B: 'create:brass_sheet'
    }
  ).id('genesis:light_stock')

  // Pistol Foregrip
  event.shaped(
    Item.of('cgm:specialised_grip', 1),
    [
      'B',
      'L'
    ], {
      B: 'create:brass_sheet',
      L: '#forge:stripped_logs'
    }
  ).id('genesis:specialised_grip')

  // Angled Foregrip
  event.recipes.create.cutting(
    'cgm:light_grip',
    'cgm:specialised_grip'
  ).id('genesis:light_grip')
})