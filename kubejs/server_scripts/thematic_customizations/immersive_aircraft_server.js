ServerEvents.recipes(event => {
  // Airship
  event.recipes.create.mechanical_crafting('immersive_aircraft:airship', [
    'SSSSS',
    ' R R ',
    ' AEP ',
    ' HHH '
  ], {
    S: 'immersive_aircraft:sail',
    R: 'farmersdelight:rope',
    H: 'immersive_aircraft:hull',
    A: '#create:seats',
    E: 'immersive_aircraft:engine',
    P: 'immersive_aircraft:propeller'
  }).id('immersive_aircraft:airship')

  // Cargo Airship
  event.recipes.create.mechanical_crafting('immersive_aircraft:cargo_airship', [
    'SSSSS',
    ' R R ',
    'CAEPC',
    'CHHHC'
  ], {
    S: 'immersive_aircraft:sail',
    R: 'farmersdelight:rope',
    H: 'immersive_aircraft:hull',
    A: '#create:seats',
    E: 'immersive_aircraft:engine',
    P: 'immersive_aircraft:propeller',
    C: 'minecraft:chest'
  }).id('immersive_aircraft:cargo_airship')

  // Warship
  event.recipes.create.mechanical_crafting('immersive_aircraft:warship', [
    'SSSSS',
    ' R R ',
    'PECEP',
    ' HHH '
  ], {
    S: 'immersive_aircraft:sail',
    R: 'farmersdelight:rope',
    H: 'immersive_aircraft:hull_reinforcement',
    C: 'immersive_aircraft:cargo_airship',
    E: 'immersive_aircraft:engine',
    P: 'immersive_aircraft:propeller'
  }).id('immersive_aircraft:warship')

  // Biplane
  event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
    '   S ',
    'S  S ',
    'HHAEP',
    'S  S ',
    '   S '
  ], {
    S: 'immersive_aircraft:sail',
    H: 'immersive_aircraft:hull',
    A: '#create:seats',
    E: 'immersive_aircraft:engine',
    P: 'immersive_aircraft:propeller'
  }).id('immersive_aircraft:biplane')

  // Economy Plane
  event.recipes.create.mechanical_crafting('man_of_many_planes:economy_plane', [
    '   S ',
    'S PS ',
    'HHESA',
    'S PS ',
    '   S '
  ], {
    S: 'immersive_aircraft:sail',
    H: 'immersive_aircraft:hull',
    A: '#create:seats',
    E: 'immersive_aircraft:eco_engine',
    P: 'immersive_aircraft:propeller'
  }).id('man_of_many_planes:economy_plane')

  // Scarlet Biplane
  event.recipes.create.mechanical_crafting('man_of_many_planes:scarlet_biplane', [
    '   D ',
    'D RD ',
    'HHAEP',
    'D RD ',
    '   D '
  ], {
    D: 'decorative_blocks:dark_oak_support',
    H: 'immersive_aircraft:hull',
    A: '#create:seats',
    E: 'immersive_aircraft:engine',
    P: 'immersive_aircraft:enhanced_propeller',
    R: 'minecraft:red_dye'
  }).id('man_of_many_planes:scarlet_biplane')

  // Basic Engine
  event.shaped(
    Item.of('immersive_aircraft:boiler', 1),
    [
      'S',
      'F',
      'B'
    ],
    {
      S: 'create:steam_engine',
      F: 'create:fluid_tank',
      B: 'create:blaze_burner'
    }
  ).id('immersive_aircraft:boiler')

  // Water Engine
  event.shaped(
    Item.of('immersive_aircraft:eco_engine', 1),
    [
      'IWI',
      'CBC'
    ],
    {
      I: 'create:iron_sheet',
      W: 'minecraft:water_bucket',
      C: 'create:copper_sheet',
      B: 'immersive_aircraft:boiler'
    }
  ).id('immersive_aircraft:eco_engine')

  // Engine
  event.shaped(
    Item.of('immersive_aircraft:engine', 1),
    [
      'BPB',
      'SOS'
    ],
    {
      O: 'immersive_aircraft:boiler',
      P: 'create:precision_mechanism',
      S: 'create:sturdy_sheet',
      B: 'create:brass_sheet'
    }
  ).id('immersive_aircraft:engine')

  // Brass Propeller
  event.shaped(
    Item.of('immersive_aircraft:enhanced_propeller', 1),
    [
      ' B ',
      'BPB',
      ' B '
    ],
    {
      P: 'create:propeller',
      B: 'create:brass_sheet'
    }
  ).id('immersive_aircraft:enhanced_propeller')

  // Gyrodyne
  event.recipes.create.mechanical_crafting('immersive_aircraft:gyrodyne', [
    ' P ',
    'SRS',
    'HAH'
  ], {
    S: 'immersive_aircraft:sail',
    H: 'immersive_aircraft:hull',
    A: '#create:seats',
    R: 'create:precision_mechanism',
    P: 'immersive_aircraft:propeller'
  }).id('immersive_aircraft:gyrodyne')

  // Gyroscope
  event.shaped(
    Item.of('immersive_aircraft:gyroscope', 1),
    [
      'ECE'
    ],
    {
      E: 'create:electron_tube',
      C: 'minecraft:compass'
    }
  ).id('immersive_aircraft:gyroscope')

  // Hull
  event.shaped(
    Item.of('immersive_aircraft:hull', 1),
    [
      'ALA',
      'ALA'
    ],
    {
      A: 'createdeco:andesite_sheet',
      L: '#minecraft:logs'
    }
  ).id('immersive_aircraft:hull')

  // Reinforced Hull
  event.recipes.create.deploying('immersive_aircraft:hull_reinforcement',
    [
      'immersive_aircraft:hull', 'create_ironworks:steel_sheet'
    ]
  ).id('immersive_aircraft:hull_reinforcement')

  // Improved Landing Gear
  event.shaped(
    Item.of('immersive_aircraft:improved_landing_gear', 1),
    [
      ' IH',
      'BSI',
      'BB '
    ],
    {
      S: 'create:shaft',
      B: 'create:belt_connector',
      I: 'createaddition:iron_rod',
      H: 'create:iron_sheet'
    }
  ).id('immersive_aircraft:improved_landing_gear')

  // Industrial Gears
  event.recipes.create.deploying('immersive_aircraft:industrial_gears',
    [
      'petrolsparts:differential', 'createdeco:industrial_iron_ingot'
    ]
  ).id('immersive_aircraft:industrial_gears')

  // Lava Engine
  event.shaped(
    Item.of('immersive_aircraft:nether_engine', 1),
    [
      'NLN',
      'SBS'
    ],
    {
      N: 'createdeco:netherite_sheet',
      L: 'minecraft:lava_bucket',
      S: 'create_ironworks:steel_sheet',
      B: 'immersive_aircraft:boiler'
    }
  ).id('immersive_aircraft:nether_engine')

  // Large Propeller
  event.shaped(
    Item.of('immersive_aircraft:propeller', 1),
    [
      ' I ',
      'IPI',
      ' I '
    ],
    {
      I: 'create:iron_sheet',
      P: 'create:propeller'
    }
  ).id('immersive_aircraft:propeller')

  // Quadrocopter
  event.recipes.create.mechanical_crafting('immersive_aircraft:quadrocopter', [
    'PAP',
    'WSW',
    'PBP'
  ], {
    P: 'create:propeller',
    A: 'create:andesite_alloy',
    W: '#minecraft:wooden_slabs',
    S: 'minecraft:scaffolding',
    B: 'immersive_aircraft:boiler'
  }).id('immersive_aircraft:quadrocopter')

  // Large Sail
  event.shaped(
    Item.of('immersive_aircraft:sail', 1),
    [
      'SSS',
      'SSS'
    ],
    {
      S: 'create:white_sail'
    }
  ).id('immersive_aircraft:sail')

  // Steel Boiler
  event.shaped(
    Item.of('immersive_aircraft:steel_boiler', 1),
    [
      'SES',
      'SFS',
      'SBS'
    ],
    {
      S: 'create_ironworks:steel_sheet',
      B: 'create:blaze_burner',
      F: 'create:fluid_tank',
      E: 'create:steam_engine'
    }
  ).id('immersive_aircraft:steel_boiler')

  // Sturdy Piping
  event.recipes.create.deploying('immersive_aircraft:sturdy_pipes',
    [
      'create:fluid_pipe', 'create:sturdy_sheet'
    ]
  ).id('immersive_aircraft:sturdy_pipes')
})
