// Remove unused recipe types
ServerEvents.recipes(event => {
  event.remove([
    { type: 'createaddition:liquid_burning' },
    { type: 'cgm:workbench' }
  ])
})
