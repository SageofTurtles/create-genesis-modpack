ServerEvents.recipes(event => {
  event.replaceInput(
    [
      { id: 'brewinandchewin:pizza' },
      { id: 'farmersdelight:pie_crust' },
      { id: 'farmersdelight:sweet_berry_cookie' },
      { id: 'minecraft:cookie' }
    ],
    'minecraft:wheat',
    'create:wheat_flour'
  )
})