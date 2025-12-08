// priority: 150

// BLOCK TAGS
ServerEvents.tags('block', event => {
  // Define functions for editing tags
  const removeAll = (entry) => {
    event.removeAllTagsFrom(entry)
  }

  // Remove tags for blacklisted blocks
  global.REMOVED_ITEMS.forEach(entry =>
    removeAll(entry)
  )
  global.REMOVED_REGEX_ITEMS.forEach(entry =>
    removeAll(Ingredient.of(entry).itemIds)
  )
})

// ITEM TAGS
ServerEvents.tags('item', event => {
  // Define functions for editing tags
  const remove = (tag, entry) => {
    event.remove(tag, entry)
  }
  const removeAll = (entry) => {
    event.removeAllTagsFrom(entry)
  }
  const add = (tag, entry) => {
    event.add(tag, entry)
  }

  // Remove tags for blacklisted items
  global.REMOVED_ITEMS.forEach(entry =>
    removeAll(entry)
  )
  global.REMOVED_REGEX_ITEMS.forEach(entry =>
    removeAll(Ingredient.of(entry).itemIds)
  )

  // Remove non-blacklist tags
  remove('create:stone_types/andesite', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/asurine', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/calcite', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/crimsite', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/deepslate', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/diorite', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/dripstone', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/granite', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/limestone', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/ochrum', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/scorchia', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/scoria', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/tuff', /create:.*_(stairs|wall)$/)
  remove('create:stone_types/veridium', /create:.*_(stairs|wall)$/)

  // Add tags
  add('minecraft:placeable', /minecraft:(earth|wind|water|fire)$/)
  add('minecraft:piglin_loved', /create_ironworks:gold_(hammer|paxel)$/)
  add('forge:tools/pickaxes', /create_ironworks:.*_pickaxe$/)
  add('minecraft:cluster_max_harvestables', /create_ironworks:.*_pickaxe$/)
  add('sliceanddice:allowed_tools', /.*_(pickaxe|shovel)$/)
  add('sliceanddice:allowed_tools', /create_ironworks:.*_(hammer|paxel)$/)
  add('sliceanddice:allowed_tools', 'minecraft:shears')
  add('forge:tools/axes', /create_ironworks:.*_axe$/)
  add('forge:tools/shovels', /create_ironworks:.*_shovel$/)
})
