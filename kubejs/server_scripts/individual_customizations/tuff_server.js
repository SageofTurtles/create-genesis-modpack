ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    '2x minecraft:tuff',
    [
      'minecraft:calcite',
      'minecraft:deepslate'
    ]
  ).heated().id('genesis:tuff')
})