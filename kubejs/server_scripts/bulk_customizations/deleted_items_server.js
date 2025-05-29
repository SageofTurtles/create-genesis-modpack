// Bulk recipe & tag removal
ServerEvents.recipes(event => {
  global.deletedItems.forEach(itemInstance => 
    event.remove([
      {input: itemInstance},
      {output: itemInstance}
    ])
  )
})
ServerEvents.tags('item', event => {
  global.deletedItems.forEach(itemInstance => 
    event.removeAllTagsFrom(itemInstance)
  )
})
ServerEvents.tags('block', event => {
  global.deletedItems.forEach(itemInstance => 
    event.removeAllTagsFrom(itemInstance)
  )
})
ServerEvents.compostableRecipes(event => {
  global.deletedItems.forEach(itemInstance => 
    event.remove(itemInstance)
  )
})


// Remove recipe for Apotheosis 'Chronicle of Shadows'
ServerEvents.recipes(event => {
  event.remove([
    {output: Item.of('patchouli:guide_book', '{"patchouli:book":"apotheosis:apoth_chronicle"}').weakNBT()}
  ])
})


// Remove tags from Sophisticated Backpacks XP
ServerEvents.tags('fluid', event => {
  event.removeAllTagsFrom('sophisticatedcore:xp_still')
})
