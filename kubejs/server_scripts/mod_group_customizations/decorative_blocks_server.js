ServerEvents.recipes(event => {
  // Wood blocks
  const woodTypes = [
    { log: 'acacia_log', type: 'acacia' },
    { log: 'bamboo_block', type: 'bamboo' },
    { log: 'birch_log', type: 'birch' },
    { log: 'cherry_log', type: 'cherry' },
    { log: 'crimson_stem', type: 'crimson' },
    { log: 'dark_oak_log', type: 'dark_oak' },
    { log: 'jungle_log', type: 'jungle' },
    { log: 'mangrove_log', type: 'mangrove' },
    { log: 'oak_log', type: 'oak' },
    { log: 'spruce_log', type: 'spruce' },
    { log: 'warped_stem', type: 'warped' }
  ]

  woodTypes.forEach(wood => {
    event.shaped(
      Item.of(`decorative_blocks:${wood.type}_seat`, 2),
      [
        'S',
        'F'
      ],
      {
        S: `minecraft:${wood.type}_slab`,
        F: `minecraft:${wood.type}_fence`
      }
    ).id(`decorative_blocks:${wood.type}_seat`)

    event.shaped(
      Item.of(`decorative_blocks:${wood.type}_support`, 4),
      [
        'WW',
        'W '
      ],
      {
        W: `minecraft:${wood.type}_planks`
      }
    ).id(`decorative_blocks:${wood.type}_support`)

    event.shaped(
      Item.of(`decorative_blocks:${wood.type}_palisade`, 6),
      [
        'LLL',
        'LLL'
      ],
      {
        L: `minecraft:stripped_${wood.log}`
      }
    ).id(`decorative_blocks:${wood.type}_palisade`)
  })

  // Bar Panel
  event.shaped(
    '2x decorative_blocks:bar_panel',
    [
      'BB',
      'BB'
    ],
    {
      B: 'minecraft:iron_bars'
    }
  ).id('decorative_blocks:bar_panel')
})