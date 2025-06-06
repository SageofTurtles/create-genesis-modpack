// Add #forge:honey tag to Brewin' and Chewin' honey
ServerEvents.tags('fluid', event => {
  event.add('forge:honey', 'brewinandchewin:honey')
})

// Add fermenting recipes using create:honey
ServerEvents.recipes(event => {
  event.custom({
    "type": "brewinandchewin:fermenting",
    "basefluid": {
      "count": 1000,
      "fluid": "create:honey"
    },
    "experience": 1.0,
    "fermentingtime": 9600,
    "ingredients": [
      {
        "item": "minecraft:wheat"
      },
      {
        "item": "minecraft:wheat_seeds"
      },
      {
        "item": "minecraft:sweet_berries"
      }
    ],
    "recipe_book_tab": "drinks",
    "result": {
      "count": 1000,
      "fluid": "brewinandchewin:mead"
    },
    "temperature": 3
  }).id('genesis:fermenting/mead_from_create_honey')
  event.custom({
    "type": "brewinandchewin:fermenting",
    "basefluid": {
      "count": 250,
      "fluid": "create:honey"
    },
    "experience": 1.0,
    "fermentingtime": 9600,
    "ingredients": [
      {
        "item": "minecraft:sea_pickle"
      },
      {
        "item": "minecraft:sea_pickle"
      },
      {
        "item": "minecraft:glow_berries"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "count": 2,
      "item": "brewinandchewin:pickled_pickles"
    },
    "temperature": 2
  }).id('genesis:fermenting/pickled_pickles_from_create_honey')
})

// Remove duplicate emptying/filling recipes
ServerEvents.recipes(event => {
  let recipeId = [
    { type: 'emptying', item: 'milk_bucket' },
    { type: 'emptying', item: 'milk_bottle' },
    { type: 'emptying', item: 'potion' },
    { type: 'emptying', item: 'water_bucket' },
    { type: 'emptying', item: 'honey_bottle' },
    { type: 'filling', item: 'milk_bucket' },
    { type: 'filling', item: 'milk_bottle' },
    { type: 'filling', item: 'potion' },
    { type: 'filling', item: 'water_bucket' },
    { type: 'filling', item: 'honey_bottle' }
  ]
  recipeId.forEach(recipe => {
    event.remove({ id: `brewinandchewin:${recipe.type}/create/${recipe.item}` })
  })
})