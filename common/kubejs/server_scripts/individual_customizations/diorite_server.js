ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    'minecraft:diorite',
    [
      'minecraft:flint',
      'minecraft:flint',
      'kubejs:limesand',
      Fluid.lava(100)
    ]
  ).id('create:compacting/diorite_from_flint')
})