ServerEvents.recipes(event => {
  global.colors.forEach(color => {
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
  })

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

  event.shapeless(
    Item.of('furniture:blueprints'),
    [
      'minecraft:paper',
      'minecraft:light_blue_dye',
      'minecraft:crafting_table'
    ]
  ).id('furniture:blueprints')
})