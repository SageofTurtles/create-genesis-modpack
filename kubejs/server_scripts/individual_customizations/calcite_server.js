ServerEvents.recipes(event => {
  event.remove({ id: 'create:filling/calcite' })
  event.recipes.create.compacting(
    'minecraft:calcite',
    [
      'minecraft:bone_meal',
      'minecraft:bone_meal',
      'minecraft:diorite',
      Fluid.lava(100)
    ]
  ).id('genesis:calcite')
})