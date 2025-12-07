ServerEvents.compostableRecipes(event => {
  // Remove composting recipes for blacklisted items
  global.REMOVED_ITEMS.forEach(entry =>
    event.remove(entry)
  )
  global.REMOVED_REGEX_ITEMS.forEach(entry =>
    event.remove(Ingredient.of(entry).itemIds)
  )
})
