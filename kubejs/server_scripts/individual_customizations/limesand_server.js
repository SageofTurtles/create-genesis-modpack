ServerEvents.recipes(event => {
  event.recipes.create.milling(
    'kubejs:limesand',
    'create:limestone'
  ).id('genesis:limesand_from_limestone')
  event.recipes.create.splashing(
    [
      Item.of('create_ironworks:tin_nugget').withChance(0.12),
      Item.of('minecraft:lapis_lazuli').withChance(0.02),
    ],
    'kubejs:limesand'
  ).id('genesis:limesand_washing')
})