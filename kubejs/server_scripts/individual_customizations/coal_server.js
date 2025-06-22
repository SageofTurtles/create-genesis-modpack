ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    'minecraft:coal',
    [
      Fluid.lava(50),
      'minecraft:charcoal',
      'minecraft:charcoal',
      'minecraft:charcoal',
      'minecraft:charcoal'
    ]
  ).heated().id('genesis:coal_from_charcoal')
})