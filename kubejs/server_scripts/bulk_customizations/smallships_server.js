ServerEvents.recipes(event => {
  event.replaceInput(
    { type: 'minecraft:crafting_shaped', id: /smallships:.*/},
    'minecraft:lead',
    'farmersdelight:rope'
  )
  event.replaceOutput(
    { id: 'smallships:bamboo_galley' },
    'smallships:bamboo_cog',
    'smallships:bamboo_galley'
  )
})