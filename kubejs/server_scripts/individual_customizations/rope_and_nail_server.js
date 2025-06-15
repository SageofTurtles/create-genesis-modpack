ServerEvents.recipes(event => {
  event.remove({ id: 'comforts:rope_and_nail' })
  event.shapeless(
    Item.of('comforts:rope_and_nail', 1),
    [
      'farmersdelight:rope',
      'minecraft:iron_ingot'
    ]
  ).id('comforts:rope_and_nail_shapeless')
})