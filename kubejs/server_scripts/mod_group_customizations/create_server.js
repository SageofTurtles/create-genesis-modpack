ServerEvents.recipes(event => {
  // Empty Blaze Burner
  event.shaped(
    'create:empty_blaze_burner',
    [
      'RRR',
      'R R',
      'SNS'
    ],
    {
      R: 'createaddition:iron_rod',
      S: 'create:iron_sheet',
      N: 'minecraft:netherrack'
    }
  ).id('create:crafting/kinetics/empty_blaze_burner')

  // Peculiar Bell
  event.shaped(
    'create:peculiar_bell',
    [
      ' B ',
      'SIS',
      'S S'
    ],
    {
      B: 'create:brass_block',
      S: 'minecraft:stick',
      I: 'create:brass_ingot'
    }
  ).id('create:crafting/curiosities/peculiar_bell')

  // Industrial Iron Window
  event.shaped(
    '2x create:industrial_iron_window',
    [
      'NIN',
      'IGI'
    ],
    {
      N: 'minecraft:iron_nugget',
      I: 'createdeco:industrial_iron_ingot',
      G: '#forge:glass/colorless'
    }
  ).id('create:industrial_iron_window')

  // Remove Weathered Iron Window recipe
  event.remove({ id: 'create:weathered_iron_window' })

  // Ornate Iron Window
  event.shaped(
    'create:ornate_iron_window',
    [
      ' N ',
      'NGN'
    ],
    {
      N: 'minecraft:iron_nugget',
      G: '#forge:glass/colorless'
    }
  ).id('create:ornate_iron_window')

  // Extendo Grip
  event.replaceInput(
    { id: 'create:mechanical_crafting/extendo_grip' },
    'minecraft:stick',
    'createaddition:iron_rod'
  )

  // Schematicannon
  event.replaceInput(
    { id: 'create:crafting/schematics/schematicannon' },
    'minecraft:iron_block',
    'create:industrial_iron_block'
  )

  // Remove Andesite Alloy mixing recipe
  event.remove({
    type: 'create:mixing',
    output: 'create:andesite_alloy'
  })
})