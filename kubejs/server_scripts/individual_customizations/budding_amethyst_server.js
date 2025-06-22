ServerEvents.recipes(event => {
  event.recipes.create.filling(
    'minecraft:budding_amethyst',
    [
      Fluid.of('create:potion', 500, { Bottle: "REGULAR", Potion: 'minecraft:strong_regeneration' }),
      'minecraft:amethyst_block'
    ]
  ).id('genesis:budding_amethyst')
})