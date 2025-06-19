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
  event.recipes.create.cutting(
    'createbigcannons:empty_machine_gun_round',
    'createbigcannons:autocannon_cartridge_sheet'
  ).id('createbigcannons:cutting/empty_machine_gun_round')
  event.remove({ id: 'createbigcannons:machine_gun_round' })
  let incomplete = 'kubejs:incomplete_machine_gun_round'
  event.recipes.create.sequenced_assembly(
    '3x createbigcannons:machine_gun_round',
    'createbigcannons:empty_machine_gun_round',
    [
      event.recipes.createDeploying(incomplete, [incomplete, 'minecraft:gunpowder']),
      event.recipes.createDeploying(incomplete, [incomplete, 'createbigcannons:cast_iron_ingot']),
      event.recipes.create.pressing(incomplete, incomplete)
    ]
  ).transitionalItem('createbigcannons:partially_assembled_machine_gun_round').loops(1)
    .id('createbigcannons:sequenced_assembly/assembling_machine_gun_round')

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
  event.recipes.create.cutting(
    '3x createbigcannons:autocannon_cartridge_sheet',
    'create:brass_sheet'
  ).id('createbigcannons:cutting/autocannon_cartridge_sheet_brass')
  event.recipes.create.compacting(
    '2x createbigcannons:big_cartridge_sheet',
    '4x create:brass_sheet'
  ).heated().id('createbigcannons:big_cartridge_sheet')

  // Powder Charge
  event.recipes.create.deploying(
    'createbigcannons:powder_charge',
    [
      'createbigcannons:empty_powder_charge',
      'createbigcannons:packed_gunpowder'
    ]
  ).id('createbigcannons:powder_charge')

  // Recoil Spring
  event.custom({
    "type": "createaddition:rolling",
    "input": {
      "item": "createaddition:iron_wire"
    },
    "result": {
      "item": "createbigcannons:recoil_spring",
      "count": 1
    }
  }).id('genesis:recoil_spring')

})