ServerEvents.recipes(event => {
  event.remove({ id: 'mcwroofs:gutter' })
  event.shaped(
    Item.of('mcwroofs:gutter_base', 3),
    [
      'III'
    ],
    {
      I: 'create:iron_sheet'
    }
  ).id('mcwroofs:gutter_base')
  event.shaped(
    Item.of('mcwroofs:gutter_middle', 3),
    [
      'I',
      'I',
      'I'
    ],
    {
      I: 'create:iron_sheet'
    }
  ).id('mcwroofs:gutter_middle')
})
