ServerEvents.recipes(event => {
  // Log Cannon End
  event.replaceInput(
    { id: 'createbigcannons:log_cannon_end' },
    '#minecraft:wooden_buttons',
    '#minecraft:planks'
  )

  // Ram Rod
  event.shaped(
    Item.of('createbigcannons:ram_rod', 1),
    [
      'S',
      'P',
      'P'
    ],
    {
      S: '#minecraft:wooden_slabs',
      P: 'create:piston_extension_pole'
    }
  ).id('createbigcannons:ram_rod')

  // Worm
  event.shaped(
    Item.of('createbigcannons:worm', 1),
    [
      'I',
      'P',
      'P'
    ],
    {
      I: 'minecraft:iron_bars',
      P: 'create:piston_extension_pole'
    }
  ).id('createbigcannons:worm')

})