ServerEvents.recipes(event => {
  event.replaceInput(
    { id: /mcwfences:.*_wired_fence/ },
    'minecraft:iron_bars',
    'createaddition:barbed_wire'
  )

  event.replaceInput(
    { id: /mcwfences:.*_grass_topped_wall/ },
    'minecraft:dirt',
    'minecraft:grass_block'
  )
})