ServerEvents.recipes(event => {
  // Define function to modify recipes
  const id = (recipeID, originalInput, newInput) => {
    event.replaceInput(
      { id: recipeID },
      originalInput,
      newInput
    )
  }

  // Add recipe modifications by ID
  id(
    'supplementaries:checker',
    'minecraft:cobblestone',
    'minecraft:calcite'
  )
})