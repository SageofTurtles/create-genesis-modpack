ServerEvents.recipes(event => {
  event.remove([
    { id: 'create:mixing/coal_deepslate' },
    { id: 'create:mixing/charcoal_deepslate' }
  ])
  event.recipes.create.compacting(
    'minecraft:deepslate',
    [
      'minecraft:stone',
      'minecraft:stone'
    ]
  ).heated().id('genesis:deepslate_from_stone')
})