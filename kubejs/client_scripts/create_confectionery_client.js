JEIEvents.information(event => {
  // Gingerbread Man JEI
  event.addItem('create_confectionery:gingerbread_man', [
    'Place a Carved Pumpkin on top of a Gingerbread Block to spawn an edible Gingerbread Man!',
    '\nHit him if you want to take a bite, you monster.'
  ])
})

ItemEvents.tooltip(event => {
  // Full Chocolate Bar tooltips
  event.addAdvanced(/create_confectionery:full_.*chocolate_bar/, (item, advanced, text) => {
    text.add(1, [
      Text.lightPurple('Can be eaten in multiple servings, and even enchanted!')
    ])
  })
})
