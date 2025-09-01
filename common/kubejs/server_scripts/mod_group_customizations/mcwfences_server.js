ServerEvents.recipes(event => {
  // Wired Fences
  event.replaceInput(
    { id: /mcwfences:.*_wired_fence/ },
    'minecraft:iron_bars',
    'createaddition:barbed_wire'
  )

  // Grass Topped Walls
  event.replaceInput(
    { id: /mcwfences:.*_grass_topped_wall/ },
    'minecraft:dirt',
    'minecraft:grass_block'
  )

  // Bamboo Fence
  event.shaped(
    '3x mcwfences:bamboo_fence',
    [
      'ABA',
      'ABA'
    ],
    {
      A: 'minecraft:bamboo_block',
      B: 'minecraft:bamboo'
    }
  ).id('mcwfences:bamboo_fence')

  // Iron Cheval de Frise
  event.replaceInput(
    { id: 'mcwfences:iron_cheval_de_frise' },
    'minecraft:iron_nugget',
    'createaddition:iron_rod'
  )
})