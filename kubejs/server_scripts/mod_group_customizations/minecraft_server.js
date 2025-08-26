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
})