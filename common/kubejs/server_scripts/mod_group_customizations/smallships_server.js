ServerEvents.recipes(event => {
  event.replaceInput(
    { type: 'minecraft:crafting_shaped', id: /smallships:.*/ },
    'minecraft:lead',
    'comforts:rope_and_nail'
  )
  event.replaceInput(
    { type: 'minecraft:crafting_shaped', id: /smallships:.*/ },
    'minecraft:string',
    'farmersdelight:rope'
  )
  event.replaceOutput(
    { id: 'smallships:bamboo_galley' },
    'smallships:bamboo_cog',
    'smallships:bamboo_galley'
  )
  event.shaped(
    Item.of('smallships:cannon_ball', 1),
    [
      ' I ',
      'IGI',
      ' I '
    ],
    {
      I: 'minecraft:iron_ingot',
      G: 'minecraft:gunpowder'
    }
  ).id('smallships:cannon_ball')
})