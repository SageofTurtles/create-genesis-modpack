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
  ).transitionalItem(hamburger)
    .loops(1)
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
  ).transitionalItem(netherite_scrap)
    .loops(1)
    .id('genesis:netherite_scrap_assembly')

  // Pale Gold Amulet
  let pale_gold_amulet = 'kubejs:incomplete_pale_gold_amulet'
  event.recipes.create.sequenced_assembly(
    'createaddition:electrum_amulet',
    'minecraft:totem_of_undying',
    [
      event.recipes.create.filling(
        pale_gold_amulet,
        [
          pale_gold_amulet,
          Fluid.of('create_central_kitchen:dragon_breath', 500)
        ]
      ),
      event.recipes.create.pressing(
        pale_gold_amulet,
        pale_gold_amulet
      ),
      event.recipes.createDeploying(
        pale_gold_amulet,
        [
          pale_gold_amulet,
          'createaddition:electrum_wire'
        ]
      )
    ]
  ).transitionalItem(pale_gold_amulet)
    .loops(3)
    .id('genesis:pale_gold_amulet_assembly')
})