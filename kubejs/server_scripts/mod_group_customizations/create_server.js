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
})