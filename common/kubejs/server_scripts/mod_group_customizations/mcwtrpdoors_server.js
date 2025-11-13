ServerEvents.recipes(event => {
  // Mesh Trapdoor Print
  event.shaped(
    '4x mcwtrpdoors:print_bamboo',
    [
      ' P ',
      'PBP',
      ' P '
    ],
    {
      P: 'minecraft:paper',
      B: 'minecraft:bamboo_trapdoor'
    }
  ).id('mcwtrpdoors:print_bamboo')

  // Bamboo Barn Trapdoor
  event.shaped(
    'mcwtrpdoors:bamboo_barn_trapdoor',
    [
      'P',
      'T'
    ],
    {
      P: 'minecraft:bamboo_planks',
      T: 'mcwtrpdoors:bamboo_glass_trapdoor'
    }
  ).id('mcwtrpdoors:bamboo_barn_trapdoor')

  // Print Bamboo Trapdoors
  const prints = [
    'barred',
    'beach',
    'classic',
    'cottage',
    'four_panel',
    'mystic',
    'paper',
    'tropical',
    'swamp',
    'blossom'
  ]

  prints.forEach(print => {
    event.shaped(
      `mcwtrpdoors:bamboo_${print}_trapdoor`,
      [
        'B',
        'P',
        'B'
      ],
      {
        B: 'minecraft:bamboo_planks',
        P: `mcwtrpdoors:print_${print}`
      }
    ).id(`mcwtrpdoors:bamboo_${print}_trapdoor`)
  })

  // Glass Trapdoors
  const glassTypes = [
    { wood: 'oak', var: 'log' },
    { wood: 'spruce', var: 'log' },
    { wood: 'birch', var: 'log' },
    { wood: 'jungle', var: 'log' },
    { wood: 'acacia', var: 'log' },
    { wood: 'dark_oak', var: 'log' },
    { wood: 'mangrove', var: 'log' },
    { wood: 'cherry', var: 'log' },
    { wood: 'crimson', var: 'stem' },
    { wood: 'warped', var: 'stem' },
    { wood: 'bamboo', var: 'block' }
  ]

  glassTypes.forEach(type => {
    event.shaped(
      `4x mcwtrpdoors:${type.wood}_glass_trapdoor`,
      [
        'PGP',
        'PGP'
      ],
      {
        P: `minecraft:${type.wood}_planks`,
        G: 'minecraft:glass_pane'
      }
    ).id(`mcwtrpdoors:${type.wood}_glass_trapdoor`)

    event.shaped(
      `4x mcwtrpdoors:${type.wood}_bark_trapdoor`,
      [
        'PGP',
        'PGP'
      ],
      {
        P: `minecraft:${type.wood}_${type.var}`,
        G: 'minecraft:glass_pane'
      }
    ).id(`mcwtrpdoors:${type.wood}_bark_trapdoor`)
  })

  // Green Bamboo Trapdoor
  event.shaped(
    '4x mcwtrpdoors:bamboo_trapdoor',
    [
      'BSB',
      'BSB'
    ],
    {
      B: 'minecraft:bamboo_block',
      S: 'minecraft:stick'
    }
  ).id('mcwtrpdoors:bamboo_trapdoor')

  // Ranch Trapdoors
  const ranchTypes = [
    { wood: 'oak', var: 'log' },
    { wood: 'spruce', var: 'log' },
    { wood: 'birch', var: 'log' },
    { wood: 'jungle', var: 'log' },
    { wood: 'acacia', var: 'log' },
    { wood: 'dark_oak', var: 'log' },
    { wood: 'mangrove', var: 'log' },
    { wood: 'cherry', var: 'log' },
    { wood: 'crimson', var: 'stem' },
    { wood: 'warped', var: 'stem' }
  ]

  ranchTypes.forEach(type => {
    event.shaped(
      `4x mcwtrpdoors:${type.wood}_ranch_trapdoor`,
      [
        'WSW',
        'WSW'
      ],
      {
        S: 'minecraft:stick',
        W: `minecraft:${type.wood}_${type.var}`
      }
    ).id(`mcwtrpdoors:${type.wood}_ranch_trapdoor`)
  })

  // Bamboo Whispering Trapdoor
  event.shaped(
    '4x mcwtrpdoors:bamboo_whispering_trapdoor',
    [
      ' B ',
      'BPB',
      ' B '
    ],
    {
      B: 'minecraft:bamboo_planks',
      P: 'mcwtrpdoors:print_whispering'
    }
  ).id('mcwtrpdoors:bamboo_whispering_trapdoor')

  // Bamboo Barrel Trapdoor
  event.replaceInput(
    { id: 'mcwtrpdoors:bamboo_barrel_trapdoor' },
    'minecraft:bamboo',
    'minecraft:bamboo_planks'
  )

  // Metal Glass Trapdoor
  event.shaped(
    '4x mcwtrpdoors:metal_trapdoor',
    [
      'IGI',
      'IGI'
    ],
    {
      I: 'minecraft:iron_ingot',
      G: 'minecraft:glass_pane'
    }
  ).id('mcwtrpdoors:metal_trapdoor')

  // Warning Trapdoor
  event.shaped(
    'mcwtrpdoors:metal_warning_trapdoor',
    [
      'Y',
      'T',
      'B'
    ],
    {
      Y: 'minecraft:yellow_dye',
      B: 'minecraft:black_dye',
      T: 'mcwtrpdoors:metal_trapdoor'
    }
  ).id('mcwtrpdoors:metal_warning_trapdoor')
})