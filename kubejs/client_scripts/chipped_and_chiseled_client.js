// Remove chisel recipe types from JEI
JEIEvents.removeCategories(event => {
  event.remove('rechiseled:chiseling')
})

// Remove chisel item from JEI
JEIEvents.hideItems(event => {
  event.hide('rechiseled:chisel')
})
