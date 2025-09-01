ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:chain', 3),
    [
      'N',
      'I',
      'N'
    ],
    {
      N: 'minecraft:iron_nugget',
      I: 'minecraft:iron_ingot'
    }
  ).id('minecraft:chain')
  event.shaped(
    Item.of('minecraft:chain', 3),
    [
      'N',
      'I',
      'N'
    ],
    {
      N: 'create:zinc_nugget',
      I: 'create:zinc_ingot'
    }
  ).id('create:crafting\/appliances\/chain_from_zinc')
  event.shaped(
    Item.of('mcwlights:golden_chain', 3),
    [
      'N',
      'I',
      'N'
    ],
    {
      N: 'minecraft:gold_nugget',
      I: 'minecraft:gold_ingot'
    }
  ).id('mcwlights:golden_chain')
  event.shaped(
    Item.of('mcwlights:copper_chain', 3),
    [
      'N',
      'I',
      'N'
    ],
    {
      N: 'create:copper_nugget',
      I: 'minecraft:copper_ingot'
    }
  ).id('mcwlights:copper_chain')
})
