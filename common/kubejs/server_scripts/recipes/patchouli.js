ServerEvents.recipes(event => {
  // Add recipe to craft Book of the Mechanist
  event.custom({
    type: 'patchouli:shapeless_book_recipe',
    ingredients: [
      { item: 'minecraft:paper' },
      { item: 'minecraft:paper' },
      { item: 'minecraft:paper' }
    ],
    book: 'patchouli:genesis_guidebook'
  }).id(`genesis:book_of_the_mechanist_shapeless`)
})