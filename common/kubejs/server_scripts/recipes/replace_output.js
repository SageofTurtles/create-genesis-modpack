ServerEvents.recipes(event => {
  // Define function to modify recipes
  const id = (filter, originalInput, newInput) => {
    event.replaceOutput(
      { id: filter },
      originalInput,
      newInput
    )
  }

  // Add recipe modifications by ID
  id(
    'create:milling/andesite',
    'minecraft:cobblestone',
    'minecraft:gravel'
  )
})