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

// Remove non-blacklist tags
ServerEvents.tags('item', event => {
  event.remove('create:stone_types/andesite', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/asurine', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/calcite', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/crimsite', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/deepslate', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/diorite', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/dripstone', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/granite', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/limestone', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/ochrum', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/scorchia', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/scoria', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/tuff', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/veridium', /create:.*_(stairs|wall)/)
})