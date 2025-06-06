// Bulk recipe removal
ServerEvents.recipes(event => {
  global.deletedRecipes.forEach(itemInstance =>
    event.remove([
      { input: itemInstance },
      { output: itemInstance }
    ])
  )
})
ServerEvents.compostableRecipes(event => {
  global.deletedRecipes.forEach(itemInstance =>
    event.remove(itemInstance)
  )
})


// Remove unused recipe types
ServerEvents.recipes(event => {
  event.remove([
    { type: 'createaddition:liquid_burning' },
    { type: 'cgm:workbench' }
  ])
})


// Remove #createaddition:plants tag from chorus plant
ServerEvents.tags('item', event => {
  event.remove('createaddition:plants', 'minecraft:chorus_plant')
})
