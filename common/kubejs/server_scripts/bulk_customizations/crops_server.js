ServerEvents.recipes(event => {
  let crops = [
    { wild: 'wild_cabbages', tame: 'farmersdelight:cabbage' },
    { wild: 'wild_onions', tame: 'farmersdelight:onion' },
    { wild: 'wild_tomatoes', tame: 'farmersdelight:tomato' },
    { wild: 'wild_carrots', tame: 'minecraft:carrot' },
    { wild: 'wild_potatoes', tame: 'minecraft:potato' },
    { wild: 'wild_beetroots', tame: 'minecraft:beetroot' },
    { wild: 'wild_rice', tame: 'farmersdelight:rice_panicle' },
    { wild: 'brown_mushroom_colony', tame: 'minecraft:brown_mushroom' },
    { wild: 'red_mushroom_colony', tame: 'minecraft:red_mushroom' }
  ]

  crops.forEach(crop => {
    event.recipes.create.filling(
      `farmersdelight:${crop.wild}`,
      [
        Fluid.of('sliceanddice:fertilizer', 250),
        crop.tame
      ]
    ).id(`genesis:${crop.wild}_from_fertilizer`)
  })
})