ServerEvents.recipes(event => {
  event.remove({ id: 'farmersdelight:lead_from_straw' })
  event.shapeless(
    Item.of('minecraft:lead', 2),
    [
      'farmersdelight:rope',
      'farmersdelight:rope'
    ]
  ).id('minecraft:lead')
})