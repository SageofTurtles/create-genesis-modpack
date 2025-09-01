ServerEvents.recipes(event => {
  event.shaped(
    'naturescompass:naturescompass',
    [
      'E',
      'C',
      'B'
    ],
    {
      E: 'create:electron_tube',
      C: 'minecraft:compass',
      B: 'create:brass_sheet'
    }
  ).id('naturescompass:natures_compass')
})