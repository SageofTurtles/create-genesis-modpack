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

  // Mirrored recipe for Cannon Welder
  event.remove({ id: 'createbigcannons:cannon_welder_mirrored' })

  // Machine Gun Round
  event.replaceInput(
    { id: 'createbigcannons:machine_gun_round' },
    'create:copper_nugget',
    'createbigcannons:cast_iron_nugget'
  )

  // Empty Powder Charge
  event.replaceInput(
    { id: 'createbigcannons:empty_powder_charge' },
    '#minecraft:wool',
    'farmersdelight:canvas'
  )

  // Cartridge Sheets
  event.remove({ id: 'createbigcannons:big_cannon_sheet_inexpensive' })
  event.remove({ id: 'createbigcannons:cutting/autocannon_cartridge_sheet_copper' })
  event.remove({ id: 'createbigcannons:cutting/autocannon_cartridge_sheet_iron' })
  event.remove({ id: 'createbigcannons:cutting/autocannon_cartridge_sheet_gold' })

})