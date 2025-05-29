// Items to be bulk deleted
let deleteItems = [
  'minecraft:barrier',
  'create_power_loader:empty_brass_chunk_loader',
  'create_power_loader:empty_andesite_chunk_loader',
  'create_power_loader:brass_chunk_loader',
  'create_power_loader:andesite_chunk_loader',
  'sophisticatedbackpacks:stack_upgrade_omega_tier',
  'sophisticatedbackpacks:xp_pump_upgrade',
  'sophisticatedbackpacks:infinity_upgrade',
  'sophisticatedbackpacks:survival_infinity_upgrade',
  'furniture:bin',
  'numismatics:cog'
]


// Bulk recipe removal
ServerEvents.recipes(event => {
  deleteItems.forEach(itemInstance =>
    event.remove([
      {input: itemInstance},
      {output: itemInstance}
    ])
  )
})
ServerEvents.compostableRecipes(event => {
  deleteItems.forEach(itemInstance =>
    event.remove(itemInstance)
  )
})


// Remove unused recipe types
ServerEvents.recipes(event => {
  event.remove([
    {type: 'createaddition:liquid_burning'},
    {type: 'cgm:workbench'}
  ])
})


// Remove #createaddition:plants tag from chorus plant
ServerEvents.tags('item', event => {
  event.remove('createaddition:plants', 'minecraft:chorus_plant')
})
