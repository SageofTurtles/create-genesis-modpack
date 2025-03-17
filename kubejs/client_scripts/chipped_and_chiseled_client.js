// Remove chisel recipe types from JEI
JEIEvents.removeCategories(event => {
  event.remove('rechiseled:chiseling')
})
