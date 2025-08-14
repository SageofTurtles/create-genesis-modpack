JEIEvents.information(event => {
  // Bundle of Books
  event.addItem(/packedup:.*book_bundle.*/, [
    'Can be converted into a Pile of Books by right-clicking on it with Shears.'
  ])

  // Pile of Books
  event.addItem(/packedup:.*book_pile/, [
    'Obtainable by right-clicking on a Bundle of Books or Half Bundle of Books with Shears.'
  ])

  // Turf block
  event.addItem(/packedup:.*turf(?!_layer)/, [
    'Never converts to dirt!  Right-click on it with a shovel to take a Turf Layer.'
  ])

  // Turf Layer
  event.addItem(/packedup:.*turf_layer/, [
    'Obtainable by right-clicking on a Turf block with a Shovel.'
  ])
})
