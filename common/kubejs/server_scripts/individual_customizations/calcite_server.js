ServerEvents.recipes(event => {
  event.remove({ id: 'create:filling/calcite' })
  event.remove({ id: 'create_aquatic_ambitions:compacting/calcite' })
  event.recipes.create.compacting(
    'minecraft:calcite',
    [
      'create_aquatic_ambitions:calcium_rich_powder',
      'create_aquatic_ambitions:calcium_rich_powder',
      'kubejs:limesand',
      Fluid.lava(100)
    ]
  ).id('genesis:calcite')
})