ServerEvents.recipes(event => {
  // Kinetic Battery
  event.shaped(
    '2x create_connected:kinetic_battery',
    [
      ' E ',
      'SAS',
      ' T '
    ],
    {
      E: 'create:electron_tube',
      S: 'create:shaft',
      A: 'createaddition:modular_accumulator',
      T: 'create:stockpile_switch'
    }
  ).id('create_connected:crafting/kinetics/kinetic_battery')
})