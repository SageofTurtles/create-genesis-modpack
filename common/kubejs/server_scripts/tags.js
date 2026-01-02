// priority: 250

// FLUID TAGS
ServerEvents.tags('fluid', event => {
  // Define functions for editing tags
  const add = (tag, fluid) => {
    event.add(tag, fluid)
  }
  const removeAll = (fluid) => {
    event.removeAllTagsFrom(fluid)
  }

  // Remove tags
  removeAll('sophisticatedcore:xp_still')

  // Add tags
  add('forge:honey', 'brewinandchewin:honey')
})

// BLOCK TAGS
ServerEvents.tags('block', event => {
  // Define functions for editing tags
  const add = (tag, item) => {
    event.add(tag, item)
  }
  const removeAll = (block) => {
    event.removeAllTagsFrom(block)
  }

  // Remove tags for blacklisted blocks
  global.REMOVED_ITEMS.forEach(entry =>
    removeAll(entry)
  )
  global.REMOVED_REGEX_ITEMS.forEach(entry =>
    removeAll(Ingredient.of(entry).itemIds)
  )

  // Add tags
  add('forge:ropes', 'farmersdelight:rope')
  add('supplementaries:fast_fall_climbable', 'farmersdelight:rope')
})

// ITEM TAGS
ServerEvents.tags('item', event => {
  // Define functions for editing tags
  const remove = (tag, item) => {
    event.remove(tag, item)
  }
  const removeAll = (item) => {
    event.removeAllTagsFrom(item)
  }
  const add = (tag, item) => {
    event.add(tag, item)
  }

  // Remove tags for blacklisted items
  global.REMOVED_ITEMS.forEach(entry =>
    removeAll(entry)
  )
  global.REMOVED_REGEX_ITEMS.forEach(entry =>
    removeAll(Ingredient.of(entry).itemIds)
  )

  // Remove non-blacklist tags
  remove('create:stone_types/andesite', /.*_(stairs|wall)$/)
  remove('create:stone_types/asurine', /.*_(stairs|wall)$/)
  remove('create:stone_types/calcite', /.*_(stairs|wall)$/)
  remove('create:stone_types/crimsite', /.*_(stairs|wall)$/)
  remove('create:stone_types/deepslate', /.*_(stairs|wall)$/)
  remove('create:stone_types/diorite', /.*_(stairs|wall)$/)
  remove('create:stone_types/dripstone', /.*_(stairs|wall)$/)
  remove('create:stone_types/granite', /.*_(stairs|wall)$/)
  remove('create:stone_types/limestone', /.*_(stairs|wall)$/)
  remove('create:stone_types/ochrum', /.*_(stairs|wall)$/)
  remove('create:stone_types/scorchia', /.*_(stairs|wall)$/)
  remove('create:stone_types/scoria', /.*_(stairs|wall)$/)
  remove('create:stone_types/tuff', /.*_(stairs|wall)$/)
  remove('create:stone_types/veridium', /.*_(stairs|wall)$/)
  remove('createaddition:plants', 'minecraft:chorus_plant')

  // Add tags
  add('create_enchantment_industry:ink_ingredient', 'create_ironworks:coal_dust')
  add('create:crushed_raw_materials', 'create_ironworks:crushed_raw_tin')
  add('forge:crushed_raw_tin', 'create_ironworks:crushed_raw_tin')
  add('forge:dusts/tin', 'create_ironworks:crushed_raw_tin')
  add('forge:plates', 'createdeco:zinc_sheet')
  add('forge:plates/zinc', 'createdeco:zinc_sheet')
  add('forge:ropes', 'farmersdelight:rope')
  add('forge:tin_dusts', 'create_ironworks:crushed_raw_tin')
  add('forge:tools/axes', /create_ironworks:.*_axe$/)
  add('forge:tools/pickaxes', /create_ironworks:.*_pickaxe$/)
  add('forge:tools/shovels', /create_ironworks:.*_shovel$/)
  add('genesis:brain_corals', /minecraft:brain_coral(?!_block)/)
  add('genesis:bubble_corals', /minecraft:bubble_coral(?!_block)/)
  add('genesis:cheap_metal_ingots', 'create_ironworks:tin_ingot')
  add('genesis:cheap_metal_ingots', 'create:zinc_ingot')
  add('genesis:cheap_metal_ingots', 'minecraft:iron_ingot')
  add('genesis:cheap_metal_nuggets', 'create_ironworks:tin_nugget')
  add('genesis:cheap_metal_nuggets', 'create:zinc_nugget')
  add('genesis:cheap_metal_nuggets', 'minecraft:iron_nugget')
  add('genesis:dead_brain_corals', /minecraft:dead_brain_coral(?!_block)/)
  add('genesis:dead_bubble_corals', /minecraft:dead_bubble_coral(?!_block)/)
  add('genesis:dead_fire_corals', /minecraft:dead_fire_coral(?!_block)/)
  add('genesis:dead_horn_corals', /minecraft:dead_horn_coral(?!_block)/)
  add('genesis:dead_tube_corals', /minecraft:dead_tube_coral(?!_block)/)
  add('genesis:downspouts', /mcwroofs:gutter_middle.*/)
  add('genesis:fire_corals', /minecraft:fire_coral(?!_block)/)
  add('genesis:froglights', /minecraft:(ochre|verdant|pearlescent)_froglight/)
  add('genesis:garage_doors', /mcwdoors:garage_.*/)
  add('genesis:gutters', /mcwroofs:gutter_base.*/)
  add('genesis:horn_corals', /minecraft:horn_coral(?!_block)/)
  add('genesis:luminous_glass_blocks', `luminousblocks:luminous_glass`)
  add('genesis:luminous_glass_panes', `luminousblocks:luminous_glass_pane`)
  add('genesis:stone_pressure_plates', 'minecraft:polished_blackstone_pressure_plate')
  add('genesis:stone_pressure_plates', 'minecraft:stone_pressure_plate')
  add('genesis:tube_corals', /minecraft:tube_coral(?!_block)/)
  add('minecraft:cluster_max_harvestables', /create_ironworks:.*_pickaxe$/)
  add('minecraft:piglin_loved', /create_ironworks:gold_(hammer|paxel)$/)
  add('minecraft:placeable', /minecraft:(earth|wind|water|fire)$/)
  add('sliceanddice:allowed_tools', 'minecraft:shears')
  add('sliceanddice:allowed_tools', /.*_(pickaxe|shovel)$/)
  add('sliceanddice:allowed_tools', /create_ironworks:.*_(hammer|paxel)$/)

  // Bulk tag changes
  global.COLORS.forEach(entry => {
    add('genesis:luminous_glass_blocks', `luminousblocks:luminous_${entry}_stained_glass`)
    add('genesis:luminous_glass_panes', `luminousblocks:luminous_${entry}_stained_glass_pane`)
    add('genesis:mosaic_glass_blocks', `mcwwindows:${entry}_mosaic_glass`)
    add('genesis:mosaic_glass_panes', `mcwwindows:${entry}_mosaic_glass_pane`)
    add('genesis:paper_lamps', `mcwlights:${entry}_paper_lamp`)
  })
})
