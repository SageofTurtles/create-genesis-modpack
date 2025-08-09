ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    'create_confectionery:cocoa_butter',
    [
      'create_confectionery:cocoa_powder',
      Fluid.of('minecraft:milk', 250)
    ]
  ).heated().id('genesis:cocoa_butter_mixing')
})