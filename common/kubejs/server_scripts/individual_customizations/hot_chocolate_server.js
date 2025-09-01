let itemsToDelete = [
  'create_confectionery:hot_chocolate_bottle',
  'create_confectionery:soothing_hot_chocolate'
]

// Remove recipes for items
ServerEvents.recipes(event => {
  itemsToDelete.forEach(itemInstance =>
    event.remove([
      { input: itemInstance },
      { output: itemInstance }
    ])
  )
})

// Remove tags & recipes from hot chocolate fluid
ServerEvents.tags('fluid', event => {
  event.removeAllTagsFrom('create_confectionery:hot_chocolate')
})
ServerEvents.recipes(event => {
  event.remove({ id: 'create_confectionery:hot_chocolate_recipe' })
})