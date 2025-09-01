ServerEvents.recipes(event => {
  event.replaceInput(
    { id: 'create:mechanical_crafting/wand_of_symmetry' },
    '#forge:glass',
    '#luminousblocks:luminous_glass_blocks'
  )
  event.replaceInput(
    { id: 'create:mechanical_crafting/wand_of_symmetry' },
    'minecraft:ender_pearl',
    'minecraft:echo_shard'
  )
})