ServerEvents.recipes(event => {
  event.shaped(
    'minecraft:bell',
    [
      ' B ',
      'SIS',
      'S S'
    ],
    {
      B: 'create_ironworks:bronze_block',
      S: 'minecraft:stick',
      I: 'create_ironworks:bronze_ingot'
    }
  ).id('create_ironworks:misc/crafting_bell_bronze')
})