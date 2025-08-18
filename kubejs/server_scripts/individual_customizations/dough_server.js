ServerEvents.recipes(event => {
  event.remove({ id: /create_central_kitchen:crafting\/dough_(1|2|3|4)/ })
  
  event.replaceInput(
    [
      { id: 'brewinandchewin:pizza' },
      { id: 'farmersdelight:pie_crust' },
      { id: 'farmersdelight:sweet_berry_cookie' },
      { id: 'minecraft:cookie' }
    ],
    'minecraft:wheat',
    'create:dough'
  )
})