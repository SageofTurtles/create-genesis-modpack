ServerEvents.recipes(event => {
  // Define function to modify recipes
  const id = (filter, originalOutput, newOutput) => {
    event.replaceOutput(
      { id: filter },
      originalOutput,
      newOutput
    )
  }

  // Add recipe modifications by ID
  id('create:milling/andesite', 'minecraft:cobblestone', 'minecraft:gravel')
})