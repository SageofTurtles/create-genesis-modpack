ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('numismatics:banking_guide', 1),
    [
      'createdeco:gold_coin',
      'create:sturdy_sheet',
      'minecraft:paper'
    ]
  )
})