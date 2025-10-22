ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    Fluid.of('minecraft:lava', 250),
    '5x minecraft:cobblestone'
  ).heated().id('create:mixing/lava_from_cobble')
})