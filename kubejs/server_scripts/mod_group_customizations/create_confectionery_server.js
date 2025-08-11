ServerEvents.recipes(event => {
  // Cocoa Butter
  event.recipes.create.mixing(
    'create_confectionery:cocoa_butter',
    [
      'create_confectionery:cocoa_powder',
      Fluid.of('minecraft:milk', 250)
    ]
  ).heated().id('genesis:cocoa_butter_mixing')

  // Ruby Chocolate
  event.recipes.create.mixing(
    Fluid.of('create_confectionery:ruby_chocolate', 250),
    [
      'minecraft:sugar',
      'minecraft:cocoa_beans',
      Fluid.of('minecraft:milk', 250),
      Fluid.of('create_central_kitchen:dragon_breath', 250)
    ]
  ).heated().id('genesis:ruby_chocolate_from_liquid_dragon_breath')
})