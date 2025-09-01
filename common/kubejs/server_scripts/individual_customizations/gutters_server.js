ServerEvents.tags('item', event => {
  //Create new tags for colored Gutters & Downspouts
  event.add('genesis:gutters', 'mcwroofs:gutter_base')
  event.add('genesis:downspouts', 'mcwroofs:gutter_middle')
  global.colors.forEach(color => {
    event.add('genesis:gutters', `mcwroofs:gutter_base_${color}`)
    event.add('genesis:downspouts', `mcwroofs:gutter_middle_${color}`)
  })
})

ServerEvents.recipes(event => {
  // Gutter recipes use Iron Sheets
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

  // Downspout recipes use Iron Sheets
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

  // Add redyeing recipes
  event.replaceInput(
    {input: 'mcwroofs:gutter_base'},
    'mcwroofs:gutter_base',
    '#genesis:gutters'
  )
  event.replaceInput(
    {input: 'mcwroofs:gutter_middle'},
    'mcwroofs:gutter_middle',
    '#genesis:downspouts'
  )
})
