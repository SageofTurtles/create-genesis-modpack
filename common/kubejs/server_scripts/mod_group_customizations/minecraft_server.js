ServerEvents.tags('item', event => {
  event.add('genesis:tube_corals', /minecraft:tube_coral(?!_block)/)
  event.add('genesis:dead_tube_corals', /minecraft:dead_tube_coral(?!_block)/)
  event.add('genesis:brain_corals', /minecraft:brain_coral(?!_block)/)
  event.add('genesis:dead_brain_corals', /minecraft:dead_brain_coral(?!_block)/)
  event.add('genesis:bubble_corals', /minecraft:bubble_coral(?!_block)/)
  event.add('genesis:dead_bubble_corals', /minecraft:dead_bubble_coral(?!_block)/)
  event.add('genesis:fire_corals', /minecraft:fire_coral(?!_block)/)
  event.add('genesis:dead_fire_corals', /minecraft:dead_fire_coral(?!_block)/)
  event.add('genesis:horn_corals', /minecraft:horn_coral(?!_block)/)
  event.add('genesis:dead_horn_corals', /minecraft:dead_horn_coral(?!_block)/)
  event.add('genesis:froglights', /minecraft:(ochre|verdant|pearlescent)_froglight/)
})

ServerEvents.compostableRecipes(event => {
  event.add('minecraft:stick', 0.2)
  event.add('minecraft:poisonous_potato', 0.8)
})

ServerEvents.recipes(event => {
  // Wood to Log recycling
  const woods = [
    { type: 'oak', log: 'log', bark: 'wood' },
    { type: 'spruce', log: 'log', bark: 'wood' },
    { type: 'birch', log: 'log', bark: 'wood' },
    { type: 'jungle', log: 'log', bark: 'wood' },
    { type: 'acacia', log: 'log', bark: 'wood' },
    { type: 'dark_oak', log: 'log', bark: 'wood' },
    { type: 'mangrove', log: 'log', bark: 'wood' },
    { type: 'cherry', log: 'log', bark: 'wood' },
    { type: 'crimson', log: 'stem', bark: 'hyphae' },
    { type: 'warped', log: 'stem', bark: 'hyphae' }
  ]

  woods.forEach(wood => {
    event.recipes.create.cutting(
      `minecraft:${wood.type}_${wood.log}`,
      `minecraft:${wood.type}_${wood.bark}`,
    ).id(`genesis:${wood.type}_${wood.log}_from_${wood.type}_${wood.bark}_cutting`)
    event.recipes.create.cutting(
      `minecraft:stripped_${wood.type}_${wood.log}`,
      `minecraft:stripped_${wood.type}_${wood.bark}`,
    ).id(`genesis:stripped_${wood.type}_${wood.log}_from_stripped_${wood.type}_${wood.bark}_cutting`)
  })

  // Diorite
  event.recipes.create.mixing(
    `minecraft:diorite`,
    [
      'minecraft:cobblestone',
      'minecraft:quartz'
    ]
  ).id('genesis:diorite_mixing')

  // Infested Cobblestone
  event.recipes.create.haunting(
    'minecraft:infested_cobblestone',
    'minecraft:cobblestone'
  ).id('genesis:cobblestone_haunting')

  // End Stone
  event.recipes.create.compacting(
    'minecraft:end_stone',
    [
      '2x minecraft:chorus_fruit',
      'minecraft:sandstone',
      Fluid.of('minecraft:lava', 100)
    ]
  ).id('genesis:end_stone')

  // Carpet washing
  event.recipes.create.splashing(
    'minecraft:white_carpet',
    '#minecraft:wool_carpets'
  ).id('genesis:carpet_washing')

  // Podzol
  event.recipes.create.filling(
    'minecraft:podzol',
    [
      'minecraft:grass_block',
      Fluid.of('sliceanddice:fertilizer', 25)
    ]
  ).id('genesis:podzol')

  // Mycelium
  event.shapeless(
    'minecraft:mycelium',
    [
      'minecraft:grass_block',
      '#forge:mushrooms',
      '#forge:mushrooms'
    ]
  ).id('genesis:mycelium')

  // Rooted Dirt
  event.shapeless(
    'minecraft:rooted_dirt',
    [
      'minecraft:dirt',
      'minecraft:hanging_roots'
    ]
  ).id('genesis:rooted_dirt')

  // Snow Layers
  event.shapeless(
    '8x minecraft:snow',
    'minecraft:snow_block'
  ).id('minecraft:snow')

  // Pointed Dripstone
  event.recipes.create.filling(
    'minecraft:pointed_dripstone',
    [
      'minecraft:clay',
      Fluid.of('minecraft:water', 500)
    ]
  ).id('genesis:pointed_dripstone')

  // Magma Block
  event.recipes.create.compacting(
    'minecraft:magma_block',
    Fluid.of('minecraft:lava', 1000)
  ).id('genesis:magma_block')

  // Crying Obsidian
  event.shaped(
    '8x minecraft:crying_obsidian',
    [
      'OOO',
      'OTO',
      'OOO'
    ],
    {
      O: 'minecraft:obsidian',
      T: 'minecraft:ghast_tear'
    }
  ).id('genesis:crying_obsidian')

  // Netherite Scrap
  let incomplete = 'kubejs:unfinished_netherite_scrap'
  event.recipes.create.sequenced_assembly(
    'minecraft:netherite_scrap',
    'minecraft:echo_shard',
    [
      event.recipes.create.filling(incomplete, [
        incomplete,
        Fluid.of('createbigcannons:molten_steel', 180)
      ]),
      event.recipes.createDeploying(incomplete, [
        incomplete,
        'minecraft:nether_star'
      ]),
      event.recipes.create.filling(incomplete, [
        incomplete,
        Fluid.of('create:potion', 250, { Bottle: 'LINGERING', Potion: 'minecraft:strong_strength' })
      ]),
      event.recipes.create.filling(incomplete, [
        incomplete,
        Fluid.of('create:potion', 250, { Bottle: 'LINGERING', Potion: 'minecraft:long_fire_resistance' })
      ]),
      event.recipes.create.filling(incomplete, [
        incomplete,
        Fluid.of('create:potion', 250, { Bottle: 'LINGERING', Potion: 'minecraft:strong_regeneration' })
      ]),
      event.recipes.create.pressing(incomplete, incomplete)
    ]
  ).transitionalItem(incomplete).loops(3)
    .id('genesis:netherite_scrap_sequenced_assembly')

  // Crimson Nylium
  event.shapeless(
    'minecraft:crimson_nylium',
    [
      'minecraft:netherrack',
      'minecraft:crimson_fungus'
    ]
  ).id('genesis:crimson_nylium')

  // Warped Nylium
  event.shapeless(
    'minecraft:warped_nylium',
    [
      'minecraft:netherrack',
      'minecraft:warped_fungus'
    ]
  ).id('genesis:warped_nylium')

  // Remove Nether Wart Block crushing
  event.remove({ id: 'create:crushing/nether_wart_block' })

  // Remove duplicate Shield recipe
  event.remove({ id: 'shieldmechanics:shields' })

  // Remove duplicate Cake recipe conflict with Farmer's Delight
  event.remove({ id: 'minecraft:cake' })

  // Remove default recipes with Terralith alternatives
  event.remove({ id: 'minecraft:lever' })
  event.remove({ id: 'minecraft:piston' })
  event.remove({ id: 'minecraft:dispenser' })
  event.remove({ id: 'minecraft:dropper' })
  event.remove({ id: 'minecraft:observer' })

  // Coral Blocks
  const corals = [
    'tube',
    'brain',
    'bubble',
    'fire',
    'horn'
  ]

  corals.forEach(type => {
    event.shaped(
      `minecraft:${type}_coral_block`,
      [
        'CC',
        'CC'
      ],
      {
        C: `#genesis:${type}_corals`
      }
    ).id(`create:crafting/materials/${type}_coral_block`)

    event.shaped(
      `minecraft:dead_${type}_coral_block`,
      [
        'CC',
        'CC'
      ],
      {
        C: `#genesis:dead_${type}_corals`
      }
    ).id(`genesis:dead_${type}_coral_block`)
  })

  // Carved Pumpkin
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:pumpkin"
      }
    ],
    result: [
      {
        item: "minecraft:carved_pumpkin"
      },
      {
        chance: 0.25,
        item: "minecraft:pumpkin_seeds"
      }
    ],
    tool: {
      tag: "forge:tools/knives"
    }
  }).id('genesis:carved_pumpkin')

  // Bee Nest
  event.shaped(
    'minecraft:bee_nest',
    [
      'HHH',
      'LLL',
      'HHH'
    ],
    {
      H: 'minecraft:honeycomb',
      L: '#minecraft:logs'
    }
  ).id('genesis:bee_nest')

  // Froglights
  const froglightColors = [
    { type: 'ochre', color: 'yellow' },
    { type: 'verdant', color: 'green' },
    { type: 'pearlescent', color: 'purple' }
  ]

  froglightColors.forEach(item => {
    event.shaped(
      `8x minecraft:${item.type}_froglight`,
      [
        'FFF',
        'FDF',
        'FFF'
      ],
      {
        F: '#genesis:froglights',
        D: `minecraft:${item.color}_dye`
      }
    ).id(`genesis:${item.type}_froglight_dyeing`)

    event.recipes.create.mixing(
      `minecraft:${item.type}_froglight`,
      [
        'minecraft:shroomlight',
        `minecraft:${item.color}_dye`,
        Fluid.of('minecraft:water', 250)
      ]
    ).id(`genesis:${item.type}_froglight_mixing`)
  })

  // Cobweb
  event.shaped(
    '2x minecraft:cobweb',
    [
      ' S ',
      'S S',
      ' S '
    ],
    {
      S: 'minecraft:string'
    }
  ).id('genesis:cobweb')

  // Blaze Rod
  event.custom({
    type: "createaddition:charging",
    input: {
      item: "createaddition:electrum_rod",
      count: 1
    },
    result: {
      item: "minecraft:blaze_rod",
      count: 1
    },
    energy: 4000,
    maxChargeRate: 200
  }).id('genesis:blaze_rod_from_charging')

  // Lightning Rod
  event.shaped(
    'minecraft:lightning_rod',
    [
      'I',
      'R',
      'R'
    ],
    {
      I: 'minecraft:copper_ingot',
      R: 'createaddition:copper_rod'
    }
  ).id('minecraft:lightning_rod')

  // Dispenser
  event.shaped(
    'minecraft:dispenser',
    [
      ' SR',
      'SDR',
      ' SR'
    ],
    {
      S: 'minecraft:stick',
      R: 'minecraft:string',
      D: 'minecraft:dropper'
    }
  ).id('genesis:dispenser_stackable_recipe')

  // Powder Snow Bucket
  event.recipes.create.mixing(
    'minecraft:powder_snow_bucket',
    [
      'minecraft:bucket',
      'minecraft:snow_block'
    ]
  ).id('genesis:powder_snow_bucket')

  // Saddle
  event.shaped(
    'minecraft:saddle',
    [
      '  L',
      'LLL',
      'RIR'
    ],
    {
      L: 'minecraft:leather',
      R: 'farmersdelight:rope',
      I: 'minecraft:iron_ingot'
    }
  ).id('genesis:saddle')

  // Spawner
  event.recipes.create.mechanical_crafting(
    'minecraft:spawner',
    [
      ' NNN ',
      'N E N',
      'NESEN',
      'N E N',
      ' NNN '
    ],
    {
      N: 'createdeco:netherite_sheet',
      E: 'minecraft:ender_eye',
      S: 'minecraft:nether_star'
    }
  ).id('genesis:spawner')

  // Chainmail Armor
  event.shaped(
    'minecraft:chainmail_helmet',
    [
      'III',
      'ILI'
    ],
    {
      I: 'minecraft:iron_nugget',
      L: 'minecraft:leather_helmet'
    }
  ).id('genesis:chainmail_helmet')
  event.shaped(
    'minecraft:chainmail_chestplate',
    [
      'ILI',
      'III',
      'III'
    ],
    {
      I: 'minecraft:iron_nugget',
      L: 'minecraft:leather_chestplate'
    }
  ).id('genesis:chainmail_chestplate')
  event.shaped(
    'minecraft:chainmail_leggings',
    [
      'III',
      'ILI',
      'I I'
    ],
    {
      I: 'minecraft:iron_nugget',
      L: 'minecraft:leather_leggings'
    }
  ).id('genesis:chainmail_leggings')
  event.shaped(
    'minecraft:chainmail_boots',
    [
      'ILI',
      'I I'
    ],
    {
      I: 'minecraft:iron_nugget',
      L: 'minecraft:leather_boots'
    }
  ).id('genesis:chainmail_boots')

  // Leather Horse Armor
  event.shaped(
    'minecraft:leather_horse_armor',
    [
      ' WL',
      'LLL',
      'R R'
    ],
    {
      W: '#minecraft:wool',
      L: 'minecraft:leather',
      R: 'farmersdelight:rope'
    }
  ).id('minecraft:leather_horse_armor')

  // Iron Horse Armor
  event.shaped(
    'minecraft:iron_horse_armor',
    [
      'III',
      'ILI'
    ],
    {
      I: 'minecraft:iron_ingot',
      L: 'minecraft:leather_horse_armor'
    }
  ).id('genesis:iron_horse_armor')

  // Golden Horse Armor
  event.shaped(
    'minecraft:golden_horse_armor',
    [
      'GGG',
      'GLG'
    ],
    {
      G: 'minecraft:gold_ingot',
      L: 'minecraft:leather_horse_armor'
    }
  ).id('genesis:golden_horse_armor')

  // Diamond Horse Armor
  event.shaped(
    'minecraft:diamond_horse_armor',
    [
      'DDD',
      'DLD'
    ],
    {
      D: 'minecraft:diamond',
      L: 'minecraft:leather_horse_armor'
    }
  ).id('genesis:diamond_horse_armor')

  // Music Disc conversions
  const discs = [
    'minecraft:music_disc_13',
    'minecraft:music_disc_cat',
    'minecraft:music_disc_blocks',
    'minecraft:music_disc_chirp',
    'minecraft:music_disc_far',
    'minecraft:music_disc_mall',
    'minecraft:music_disc_mellohi',
    'minecraft:music_disc_stal',
    'minecraft:music_disc_strad',
    'minecraft:music_disc_ward',
    'minecraft:music_disc_11',
    'minecraft:music_disc_wait',
    'minecraft:music_disc_otherside',
    'minecraft:music_disc_5',
    'minecraft:music_disc_pigstep',
    'minecraft:music_disc_relic',
    'create_connected:music_disc_elevator',
    'create_connected:music_disc_interlude',
    'furniture:cphs_pride',
    'furniture:letsdo_theme',
    'create_confectionery:the_bright_side'
  ]

  discs.forEach(disc => {
    event.recipes.create.deploying(
      disc,
      [
        '#minecraft:music_discs',
        disc
      ]
    ).keepHeldItem()
  })

  // Banner Pattern duplication
  const patterns = [
    'minecraft:flower_banner_pattern',
    'minecraft:creeper_banner_pattern',
    'minecraft:skull_banner_pattern',
    'minecraft:mojang_banner_pattern',
    'minecraft:globe_banner_pattern',
    'minecraft:piglin_banner_pattern',
    'supplementaries:dragon_banner_pattern'
  ]

  patterns.forEach(pattern => {
    event.shapeless(
      Item.of(pattern, 2),
      [
        pattern,
        'minecraft:paper',
        'supplementaries:antique_ink'
      ]
    )
  })

  // Pottery Sherd duplication
  const sherds = [
    'angler',
    'archer',
    'arms_up',
    'blade',
    'brewer',
    'burn',
    'danger',
    'explorer',
    'friend',
    'heart',
    'heartbreak',
    'howl',
    'miner',
    'mourner',
    'plenty',
    'prize',
    'sheaf',
    'shelter',
    'skull',
    'snort'
  ]

  sherds.forEach(sherd => {
    event.shaped(
      `2x minecraft:${sherd}_pottery_sherd`,
      [
        'NCN',
        'CSC',
        'NCN'
      ],
      {
        N: 'createaddition:electrum_nugget',
        C: 'minecraft:clay_ball',
        S: `minecraft:${sherd}_pottery_sherd`
      }
    ).id(`genesis:${sherd}_pottery_sherd_duplication`)
  })

  // Spectral Arrows
  event.recipes.create.mixing(
    '8x minecraft:spectral_arrow',
    [
      '8x minecraft:arrow',
      Fluid.of('create:potion', 50, { Bottle: 'REGULAR', Potion: 'minecraft:night_vision' })
    ]
  ).id('genesis:spectral_arrow')

  // Golden Apple
  event.recipes.create.mixing(
    'minecraft:golden_apple',
    [
      'minecraft:apple',
      Fluid.of('createmetalwork:molten_gold', 540)
    ]
  ).heated().id('genesis:golden_apple_from_mixing')

  // Enchanted Golden Apple
  event.recipes.create.mixing(
    'minecraft:enchanted_golden_apple',
    [
      'minecraft:golden_apple',
      Fluid.of('create_enchantment_industry:experience', 100),
      Fluid.of('create:potion', 125, { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' }),
      Fluid.of('create:potion', 125, { Bottle: 'REGULAR', Potion: 'minecraft:fire_resistance' })
    ]
  ).superheated().id('genesis:enchanted_golden_apple')

  // Golden Carrot
  event.recipes.create.mixing(
    'minecraft:golden_carrot',
    [
      'minecraft:carrot',
      Fluid.of('createmetalwork:molten_gold', 60)
    ]
  ).heated().id('genesis:golden_carrot_from_mixing')

  // Glistering Melon Slice
  event.recipes.create.mixing(
    'minecraft:glistering_melon_slice',
    [
      'minecraft:melon_slice',
      Fluid.of('createmetalwork:molten_gold', 60)
    ]
  ).heated().id('genesis:glistering_melon_slice_from_mixing')

  // Globe Banner Pattern
  event.shapeless(
    'minecraft:globe_banner_pattern',
    [
      'minecraft:paper',
      'supplementaries:globe_sepia'
    ]
  ).id('genesis:globe_banner_pattern')

  // Piglin Banner Pattern
  event.shapeless(
    'minecraft:piglin_banner_pattern',
    [
      'minecraft:paper',
      'minecraft:piglin_head'
    ]
  ).id('genesis:piglin_banner_pattern')

  // Rotten Flesh
  event.recipes.create.haunting(
    'minecraft:rotten_flesh',
    '#brewinandchewin:raw_meats'
  ).id('genesis:rotten_flesh_from_raw_meats')

  // Honeycomb
  event.shapeless(
    '4x minecraft:honeycomb',
    'minecraft:honeycomb_block'
  ).id('genesis:honeycomb_from_honeycomb_block')

  // Scute
  event.custom({
    type: "create_aquatic_ambitions:channeling",
    ingredients: [
      { item: 'minecraft:leather' }
    ],
    results: [
      { item: 'minecraft:scute' }
    ]
  }).id('genesis:scute_from_channeling')

  // Brown Dye
  event.shapeless(
    '2x minecraft:brown_dye',
    [
      'minecraft:orange_dye',
      'minecraft:black_dye'
    ]
  ).id('genesis:brown_dye_from_orange_dye')

  event.shapeless(
    '3x minecraft:brown_dye',
    [
      'minecraft:red_dye',
      'minecraft:yellow_dye',
      'minecraft:black_dye'
    ]
  ).id('genesis:brown_dye_from_primary_color_dyes')

  // Paper
  event.recipes.create.pressing(
    'minecraft:paper',
    'farmersdelight:tree_bark'
  ).id('genesis:paper_from_pressing_tree_bark')

  event.shaped(
    '3x minecraft:paper',
    [
      'TTT'
    ],
    {
      T: 'farmersdelight:tree_bark'
    }
  ).id('farmersdelight:paper_from_tree_bark')

  // Torchflower milling
  event.recipes.create.milling(
    [
      '2x minecraft:orange_dye',
      Item.of('minecraft:green_dye').withChance(0.25),
      Item.of('minecraft:purple_dye').withChance(0.1)
    ],
    'minecraft:torchflower'
  ).id('genesis:torchflower_milling')

  // Pitcher Plant milling
  event.recipes.create.milling(
    [
      '2x minecraft:cyan_dye',
      Item.of('minecraft:blue_dye').withChance(0.25),
      Item.of('minecraft:magenta_dye').withChance(0.1)
    ],
    'minecraft:pitcher_plant'
  ).id('genesis:pitcher_plant_milling')

  // Pink Petals milling
  event.recipes.create.milling(
    [
      'minecraft:pink_dye',
      Item.of('minecraft:pink_dye').withChance(0.25),
      Item.of('minecraft:green_dye').withChance(0.1)
    ],
    'minecraft:pink_petals'
  ).id('genesis:pink_petals_milling')
})