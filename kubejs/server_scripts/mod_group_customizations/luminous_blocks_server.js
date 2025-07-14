// Add tags to luminous blocks
ServerEvents.tags('item', event => {
  event.add('luminousblocks:luminous_glass_blocks', 'luminousblocks:luminous_glass')
  event.add('luminousblocks:luminous_glass_panes', 'luminousblocks:luminous_glass_pane')
  global.colors.forEach(color => {
    event.add('luminousblocks:luminous_glass_blocks', `luminousblocks:luminous_${color}_stained_glass`)
    event.add('luminousblocks:luminous_glass_panes', `luminousblocks:luminous_${color}_stained_glass_pane`)
  })
})

ServerEvents.recipes(event => {
  // Add recipes for converting glass to luminous glass
  event.remove({ output: 'luminousblocks:luminous_glass' })
  event.shapeless(
    Item.of('luminousblocks:luminous_glass', 1),
    [
      'minecraft:glass',
      'minecraft:glowstone_dust'
    ]
  ).id('luminousblocks:luminous_glass_from_glowstone_dust')
  event.shapeless(
    Item.of('luminousblocks:luminous_glass', 1),
    [
      'minecraft:glass',
      'minecraft:prismarine_crystals'
    ]
  ).id('luminousblocks:luminous_glass_from_prismarine_crystals')

  global.colors.forEach(color => {
    // Add recipes for converting colored glass to luminous colored glass
    event.remove({ output: `luminousblocks:luminous_${color}_stained_glass` })
    event.shapeless(
      Item.of(`luminousblocks:luminous_${color}_stained_glass`, 1),
      [
        `minecraft:${color}_stained_glass`,
        'minecraft:glowstone_dust'
      ]
    ).id(`luminousblocks:luminous_${color}_stained_glass_from_glowstone_dust`)
    event.shapeless(
      Item.of(`luminousblocks:luminous_${color}_stained_glass`, 1),
      [
        `minecraft:${color}_stained_glass`,
        'minecraft:prismarine_crystals'
      ]
    ).id(`luminousblocks:luminous_${color}_stained_glass_from_prismarine_crystals`)

    // Add recipes for dyeing luminous glass
    event.shaped(
      Item.of(`luminousblocks:luminous_${color}_stained_glass`, 8),
      [
        'GGG',
        'GDG',
        'GGG'
      ],
      {
        G: '#luminousblocks:luminous_glass_blocks',
        D: `minecraft:${color}_dye`
      }
    ).id(`genesis:luminous_${color}_stained_glass_from_dyeing`)
    event.shaped(
      Item.of(`luminousblocks:luminous_${color}_stained_glass_pane`, 8),
      [
        'GGG',
        'GDG',
        'GGG'
      ],
      {
        G: '#luminousblocks:luminous_glass_panes',
        D: `minecraft:${color}_dye`
      }
    ).id(`genesis:luminous_${color}_stained_glass_pane_from_dyeing`)

    // Add recipes for washing colored luminous glass
    event.recipes.create.splashing(
      'luminousblocks:luminous_glass',
      `luminousblocks:luminous_${color}_stained_glass`
    ).id(`genesis:luminous_${color}_stained_glass_washing`)
    event.recipes.create.splashing(
      'luminousblocks:luminous_glass_pane',
      `luminousblocks:luminous_${color}_stained_glass_pane`
    ).id(`genesis:luminous_${color}_stained_glass_pane_washing`)
  })
})