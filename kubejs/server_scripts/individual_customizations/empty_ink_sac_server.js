ServerEvents.recipes(event => {
  // Add recipe for Empty Ink Sac
  event.custom({
    "type": "createaddition:rolling",
    "input": {
      "item": "minecraft:leather"
    },
    "result": {
      "item": "kubejs:empty_ink_sac",
      "count": 2
    }
  }).id('genesis:empty_ink_sac_from_leather')

  // Add recipe for Ink Sac from Empty Ink Sac
  event.recipes.create.filling(
    'minecraft:ink_sac',
    [
      Fluid.of('create_enchantment_industry:ink', 250),
      'kubejs:empty_ink_sac'
    ]
  ).id('genesis:ink_sac_filling')
})