ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    Fluid.of('create_central_kitchen:dragon_breath', 125),
    [
      Fluid.of('minecraft:lava', 250),
      'minecraft:popped_chorus_fruit',
      'create:cinder_flour'
    ]
  ).superheated().id('genesis:dragon_breath_mixing')
})