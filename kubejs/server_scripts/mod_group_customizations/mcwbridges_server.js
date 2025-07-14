ServerEvents.recipes(event => {
  event.replaceInput(
    { id: /mcwbridges:rope_.*_bridge/ },
    'minecraft:string',
    'farmersdelight:rope'
  )
})