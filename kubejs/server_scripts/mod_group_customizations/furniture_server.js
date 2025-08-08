ServerEvents.recipes(event => {
  // Shutters
  global.woodTypes.forEach(wood => {
    event.shaped(
      Item.of(`furniture:${wood}_shutter`, 4),
      [
        'SS',
        'SS'
      ],
      {
        S: `minecraft:${wood}_slab`
      }
    ).id(`furniture:${wood}_shutter_recipe`)
  })

  global.colors.forEach(color => {
    // Pouffes
    event.shaped(
      Item.of(`furniture:pouffe_${color}`, 2),
      [
        'WWW',
        'S S'
      ],
      {
        W: `minecraft:${color}_wool`,
        S: 'minecraft:stick'
      }
    ).id(`furniture:pouffe_${color}`)

    // Covered Lamps
    event.shaped(
      `3x furniture:lamp_${color}`,
      [
        ' W ',
        'WGW',
        ' P '
      ],
      {
        W: `minecraft:${color}_wool`,
        G: 'minecraft:glowstone',
        P: '#minecraft:planks'
      }
    ).id(`furniture:lamp_${color}`)
  })

  // Copper Chimney
  event.shaped(
    Item.of('furniture:copper_chimney', 2),
    [
      'ISI',
      ' S ',
      ' S '
    ],
    {
      I: 'minecraft:copper_ingot',
      S: 'create:copper_sheet'
    }
  ).id('furniture:copper_chimney')

  // Steam Vent
  event.shaped(
    Item.of('furniture:steam_vent', 2),
    [
      ' S ',
      ' S ',
      'ISI'
    ],
    {
      I: 'minecraft:iron_ingot',
      S: 'create:iron_sheet'
    }
  ).id('furniture:steam_vent')

  // Building Plans
  event.shapeless(
    Item.of('furniture:blueprints'),
    [
      'minecraft:paper',
      'minecraft:light_blue_dye',
      'minecraft:crafting_table'
    ]
  ).id('furniture:blueprints')

  // Cabinets & Dressers
  global.woodTypes.forEach(wood => {
    event.shaped(
      `4x furniture:${wood}_cabinet`,
      [
        'SSS',
        'LDL',
        'LDL'
      ],
      {
        S: `minecraft:${wood}_slab`,
        L: `minecraft:${wood}_log`,
        D: 'mcwfurnitures:cabinet_drawer'
      }
    ).id(`furniture:${wood}_cabinet`)

    event.shaped(
      `furniture:${wood}_dresser`,
      [
        'D',
        'C'
      ],
      {
        D: `furniture:${wood}_desk`,
        C: `furniture:${wood}_cabinet`
      }
    ).id(`furniture:${wood}_dresser`)
  })
})