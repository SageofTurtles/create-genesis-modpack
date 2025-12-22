ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, fluid, item, output) => {
    event.recipes.create.filling(
      Item.of(output),
      [fluid, item]
    ).id(`genesis:${recipeId}_filling`)
  }

  // Add individual recipes
  add('antique_ink', Fluid.of('create_enchantment_industry:ink', 250), 'minecraft:glass_bottle', 'supplementaries:antique_ink')
  add('budding_amethyst', Fluid.of('create:potion', 500, { Bottle: "REGULAR", Potion: 'minecraft:strong_regeneration' }), 'minecraft:amethyst_block', 'minecraft:budding_amethyst')
  add('ink_sac', Fluid.of('create_enchantment_industry:ink', 250), 'kubejs:empty_ink_sac', 'minecraft:ink_sac')
  add('podzol', Fluid.of('sliceanddice:fertilizer', 25), 'minecraft:grass_block', 'minecraft:podzol')
  add('pointed_dripstone', Fluid.water(250), 'minecraft:clay', 'minecraft:pointed_dripstone')

  // Add bulk recipes
  global.WILD_CROPS.forEach(entry => {
    const { tame, wild } = entry
    add(wild, Fluid.of('sliceanddice:fertilizer', 250), tame, `farmersdelight:${wild}`)
  })
})