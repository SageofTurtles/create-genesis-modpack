ServerEvents.recipes(event => {
  // Bamboo Shoji Door
  event.shaped(
    '3x mcwdoors:bamboo_japanese_door',
    [
      'PP',
      'PP',
      'BB'
    ],
    {
      P: 'minecraft:paper',
      B: 'minecraft:bamboo_planks'
    }
  ).id('mcwdoors:bamboo_japanese_door')

  // Bamboo Shoji Whole Door
  event.shaped(
    '3x mcwdoors:bamboo_japanese2_door',
    [
      'PP',
      'PP',
      'BB'
    ],
    {
      P: 'minecraft:paper',
      B: 'minecraft:bamboo_slab'
    }
  ).id('mcwdoors:bamboo_japanese2_door')

  // Bamboo Barn Door
  event.shaped(
    '2x mcwdoors:bamboo_barn_door',
    [
      'SS',
      'BB',
      'BB'
    ],
    {
      S: 'minecraft:stick',
      B: 'minecraft:bamboo_planks'
    }
  ).id('mcwdoors:bamboo_barn_door')

  // Bamboo Barn Glassed Door
  event.shaped(
    '3x mcwdoors:bamboo_barn_glass_door',
    [
      'GG',
      'BB',
      'BB'
    ],
    {
      G: 'minecraft:glass_pane',
      B: 'minecraft:bamboo_planks'
    }
  ).id('mcwdoors:bamboo_barn_glass_door')

  // Bamboo Modern Door
  event.shaped(
    '3x mcwdoors:bamboo_modern_door',
    [
      'BG',
      'BB',
      'BG'
    ],
    {
      G: 'minecraft:glass_pane',
      B: 'minecraft:bamboo_planks'
    }
  ).id('mcwdoors:bamboo_modern_door')

  // Bamboo Glass Door
  event.shaped(
    '3x mcwdoors:bamboo_glass_door',
    [
      'BG',
      'GG',
      'BG'
    ],
    {
      G: 'minecraft:glass_pane',
      B: 'minecraft:bamboo_planks'
    }
  ).id('mcwdoors:bamboo_glass_door')

  // Bamboo Stable Door
  event.shaped(
    '3x mcwdoors:bamboo_stable_door',
    [
      'II',
      'BB',
      'BB'
    ],
    {
      I: 'minecraft:iron_bars',
      B: 'minecraft:bamboo_planks'
    }
  ).id('mcwdoors:bamboo_stable_door')

  // Bamboo Western Door
  event.shaped(
    '3x mcwdoors:bamboo_western_door',
    [
      '  P',
      'PSP',
      'PPP'
    ],
    {
      S: 'minecraft:bamboo_slab',
      P: 'minecraft:bamboo_planks'
    }
  ).id('mcwdoors:bamboo_western_door')

  // Bamboo Glass Door
  event.shaped(
    '3x mcwdoors:bamboo_bark_glass_door',
    [
      'BG',
      'GG',
      'BG'
    ],
    {
      G: 'minecraft:glass_pane',
      B: 'minecraft:bamboo_block'
    }
  ).id('mcwdoors:bamboo_bark_glass_door')

  // Print Doors
  const prints = [
    'bamboo_cottage_door',
    'bamboo_classic_door',
    'bamboo_beach_door',
    'bamboo_paper_door',
    'bamboo_four_panel_door',
    'bamboo_tropical_door',
    'bamboo_mystic_door',
    'bamboo_nether_door',
    'bamboo_swamp_door',
    'bamboo_waffle_door',
    'bamboo_whispering_door'
  ]

  prints.forEach(print => {
    event.replaceInput(
      { id: `mcwdoors:${print}` },
      'minecraft:bamboo',
      'minecraft:bamboo_planks'
    )
  })

  // Metal Reinforced Door
  event.replaceInput(
    { id: 'mcwdoors:metal_reinforced_door' },
    'minecraft:iron_nugget',
    'createdeco:industrial_iron_nugget'
  )

  // Metal Warning Door
  event.shaped(
    'mcwdoors:metal_warning_door',
    [
      'YDB'
    ],
    {
      Y: 'minecraft:yellow_dye',
      D: 'mcwdoors:metal_windowed_door',
      B: 'minecraft:black_dye'
    }
  ).id('mcwdoors:metal_warning_door')

  // Iron Portcullis
  event.replaceInput(
    { id: 'mcwdoors:iron_portcullis' },
    'minecraft:iron_bars',
    'createdeco:industrial_iron_ingot'
  )

  // Mangrove Bamboo Door
  event.replaceInput(
    { id: 'mcwdoors:mangrove_bamboo_door' },
    'minecraft:bamboo',
    'minecraft:mangrove_planks'
  )
})