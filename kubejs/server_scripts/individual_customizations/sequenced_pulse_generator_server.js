ServerEvents.recipes(event => {
  event.shaped(
    Item.of('create_connected:sequenced_pulse_generator'),
    [
      ' E ',
      'RBR',
      'SSS'
    ],
    {
      R: 'minecraft:redstone_torch',
      E: 'create:electron_tube',
      B: 'create:brass_sheet',
      S: '#bookshelf:stones'
    }
  ).id('create_connected:crafting/kinetics/sequenced_pulse_generator')
})