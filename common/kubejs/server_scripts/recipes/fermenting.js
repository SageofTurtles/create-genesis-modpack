ServerEvents.recipes(event => {
  // Define function to create recipes
  const fluid = (
    inputFluid, inputAmount,
    ingredient1,
    ingredient2,
    ingredient3,
    outputFluid, outputAmount,
    temp, tab,
    name
  ) => {
    event.custom({
      type: 'brewinandchewin:fermenting',
      basefluid: {
        count: inputAmount,
        fluid: inputFluid
      },
      experience: 1.0,
      fermentingtime: 9600,
      ingredients: [
        { item: ingredient1 },
        { item: ingredient2 },
        { item: ingredient3 }
      ],
      recipe_book_tab: tab,
      result: {
        count: outputAmount,
        fluid: outputFluid
      },
      temperature: temp
    }).id(`genesis:${name}_fermenting`)
  }
  const item = (
    inputFluid, inputAmount,
    ingredient1,
    ingredient2,
    ingredient3,
    outputItem, outputCount,
    temp, tab,
    name
  ) => {
    event.custom({
      type: 'brewinandchewin:fermenting',
      basefluid: {
        count: inputAmount,
        fluid: inputFluid
      },
      experience: 1.0,
      fermentingtime: 9600,
      ingredients: [
        { item: ingredient1 },
        { item: ingredient2 },
        { item: ingredient3 }
      ],
      recipe_book_tab: tab,
      result: {
        count: outputCount,
        item: outputItem
      },
      temperature: temp
    }).id(`genesis:${name}_fermenting`)
  }

  // Add fluid recipes
  fluid(
    'create:honey', 1000,
    'minecraft:wheat',
    'minecraft:wheat_seeds',
    'minecraft:sweet_berries',
    'brewinandchewin:mead', 1000,
    3, 'drinks',
    'mead'
  )

  // Add item recipes
  item(
    'create:honey', 250,
    'minecraft:sea_pickle',
    'minecraft:sea_pickle',
    'minecraft:glow_berries',
    'brewinandchewin:pickled_pickles', 2,
    2, 'meals',
    'pickled_pickles'
  )
})