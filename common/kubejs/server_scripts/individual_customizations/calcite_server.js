ServerEvents.recipes(event => {
  event.remove({ id: 'create:filling/calcite' })
  event.remove({ id: 'create_aquatic_ambitions:compacting/calcite' })
  event.recipes.create.compacting(
    'minecraft:calcite',
    [
      'minecraft:bone_meal',
      'minecraft:bone_meal',
      'kubejs:limesand',
      Fluid.lava(100)
    ]
  ).id('genesis:calcite')
})