// priority: 150

// Remove tags for blacklisted items
ServerEvents.tags('item', event => {
  global.REMOVED_ITEMS.forEach(entry =>
    event.removeAllTagsFrom(entry)
  )
  global.REMOVED_REGEX_ITEMS.forEach(entry =>
    event.removeAllTagsFrom(Ingredient.of(entry).itemIds)
  )
})

ServerEvents.tags('block', event => {
  global.REMOVED_ITEMS.forEach(entry =>
    event.removeAllTagsFrom(entry)
  )
  global.REMOVED_REGEX_ITEMS.forEach(entry =>
    event.removeAllTagsFrom(Ingredient.of(entry).itemIds)
  )
})
