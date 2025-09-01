ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('pet_home:deed_of_ownership', 1),
    [
      'minecraft:paper',
      'pet_home:collar_tag'
    ]
  ).id('genesis:deed_of_ownership')

  event.replaceInput(
    { id: 'pet_home:collar_tag' },
    'minecraft:copper_ingot',
    'createdeco:copper_coin'
  )
})