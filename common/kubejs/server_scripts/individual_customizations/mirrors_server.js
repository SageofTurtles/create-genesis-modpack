ServerEvents.recipes(event => {
  let woodType = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove',
    'cherry'
  ]
  woodType.forEach(wood => {
    event.shaped(
      Item.of(`furniture:${wood}_mirror`, 1),
      [
        'SSS',
        'SGS',
        'S1S'
      ],
      {
        S: 'minecraft:stick',
        G: 'mcwwindows:one_way_glass_pane',
        1: `minecraft:${wood}_slab`
      }
    ).id(`furniture:${wood}_mirror`)
  })
})