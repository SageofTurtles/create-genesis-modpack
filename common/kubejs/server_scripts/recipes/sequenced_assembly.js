ServerEvents.recipes(event => {
  // Hamburger
  let hamburger = 'create_central_kitchen:incomplete_hamburger'
  event.recipes.create.sequenced_assembly(
    'farmersdelight:hamburger',
    'minecraft:bread',
    [
      event.recipes.createDeploying(
        hamburger,
        [
          hamburger,
          'farmersdelight:beef_patty'
        ]
      ),
      event.recipes.createDeploying(
        hamburger,
        [
          hamburger,
          '#forge:salad_ingredients/cabbage'
        ]
      ),
      event.recipes.createDeploying(
        hamburger,
        [
          hamburger,
          'farmersdelight:tomato'
        ]
      ),
      event.recipes.createDeploying(
        hamburger,
        [
          hamburger,
          'farmersdelight:onion'
        ]
      )
    ]
  ).transitionalItem(hamburger).loops(1)
    .id('genesis:hamburger_assembly')

  // Netherite Scrap
  let netherite_scrap = 'kubejs:unfinished_netherite_scrap'
  event.recipes.create.sequenced_assembly(
    'minecraft:netherite_scrap',
    'minecraft:echo_shard',
    [
      event.recipes.create.filling(
        netherite_scrap,
        [
          netherite_scrap,
          Fluid.of('createmetalwork:molten_steel', 270)
        ]
      ),
      event.recipes.create.filling(
        netherite_scrap,
        [
          netherite_scrap,
          Fluid.of('create:potion', 250, { Bottle: 'LINGERING', Potion: 'minecraft:strong_strength' })
        ]
      ),
      event.recipes.create.filling(
        netherite_scrap,
        [
          netherite_scrap,
          Fluid.of('create:potion', 250, { Bottle: 'LINGERING', Potion: 'minecraft:long_fire_resistance' })
        ]
      ),
      event.recipes.create.pressing(
        netherite_scrap,
        netherite_scrap
      )
    ]
  ).transitionalItem(netherite_scrap).loops(1)
    .id('genesis:netherite_scrap_assembly')
})