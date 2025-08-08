ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    'minecraft:ancient_debris',
    [
      'minecraft:netherite_scrap',
      'minecraft:obsidian',
      Fluid.of('create_enchantment_industry:experience', 9)
    ]
  ).superheated().id('genesis:ancient_debris')
})