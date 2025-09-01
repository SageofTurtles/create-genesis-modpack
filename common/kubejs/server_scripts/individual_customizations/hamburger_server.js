ServerEvents.recipes(event => {
  const incomplete = 'create_central_kitchen:incomplete_hamburger'

  event.recipes.create.sequenced_assembly(
    'farmersdelight:hamburger',
    'minecraft:bread',
    [
      event.recipes.createDeploying(incomplete, [incomplete, 'farmersdelight:beef_patty']),
      event.recipes.createDeploying(incomplete, [incomplete, '#forge:salad_ingredients/cabbage']),
      event.recipes.createDeploying(incomplete, [incomplete, 'farmersdelight:tomato']),
      event.recipes.createDeploying(incomplete, [incomplete, 'farmersdelight:onion'])
    ]
  ).transitionalItem(incomplete).loops(1)
    .id('create_central_kitchen:sequenced_assembly/hamburger')
})