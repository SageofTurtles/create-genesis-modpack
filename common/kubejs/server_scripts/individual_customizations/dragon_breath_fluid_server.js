ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    'amendments:dragon_charge',
    [
      'minecraft:popped_chorus_fruit',
      'minecraft:gunpowder',
      'create:cinder_flour',
      Fluid.of('minecraft:lava', 250)
    ]
  ).superheated().id('amendments:dragon_charge')

  event.recipes.create.compacting(
    Fluid.of('create_central_kitchen:dragon_breath', 250),
    '4x amendments:dragon_charge'
  ).superheated().id('genesis:dragon_breath_compacting')
})