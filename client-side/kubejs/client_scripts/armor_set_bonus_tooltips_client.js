ItemEvents.tooltip(event => {
  // Leather Armor
  event.addAdvanced(/minecraft:leather_(helmet|chestplate|leggings|boots)/, (item, advanced, text) => {
    text.add(4, [
      Text.of('')
    ])
    text.add(5, [
      Text.aqua('Gives '),
      Text.green('Speed I'),
      Text.aqua(' when wearing the full Leather armor set '),
      Text.red('without mending'),
      Text.aqua(':')
    ])
    text.add(6, [
      Text.gray(' - Leather Cap')
    ])
    text.add(7, [
      Text.gray(' - Leather Tunic')
    ])
    text.add(8, [
      Text.gray(' - Leather Pants')
    ])
    text.add(9, [
      Text.gray(' - Leather Boots')
    ])
  })

  // Brass Armor
  event.addAdvanced(/create_ironworks:brass_armor_(helmet|chestplate|leggings|boots)/, (item, advanced, text) => {
    text.add(6, [
      Text.of('')
    ])
    text.add(7, [
      Text.aqua('Gives '),
      Text.green('+25% Health Boost'),
      Text.aqua(' when wearing the full Brass armor set '),
      Text.red('without mending'),
      Text.aqua(':')
    ])
    text.add(8, [
      Text.gray(' - Brass Helmet')
    ])
    text.add(9, [
      Text.gray(' - Brass Chestplate')
    ])
    text.add(10, [
      Text.gray(' - Brass Leggings')
    ])
    text.add(11, [
      Text.gray(' - Bass Boots')
    ])
  })

  // Vanilla armor set variables
  const vanillaArmorSets = [
    {
      type: 'Chainmail',
      item: /minecraft:chainmail_(helmet|chestplate|leggings|boots)/,
      bonus: 'Jump Boost I'
    },
    {
      type: 'Iron',
      item: /minecraft:iron_(helmet|chestplate|leggings|boots)/,
      bonus: '+25% Attack Speed'
    },
    {
      type: 'Golden',
      item: /minecraft:golden_(helmet|chestplate|leggings|boots)/,
      bonus: 'Haste I'
    },
    {
      type: 'Netherite',
      item: /minecraft:netherite_(helmet|chestplate|leggings|boots)/,
      bonus: '+20% Armor Toughness'
    }
  ]

  // Create: Ironworks armor set variables
  const moddedArmorSets = [
    {
      type: 'Copper',
      item: /create_ironworks:copper_armor_(helmet|chestplate|leggings|boots)/,
      bonus: 'Water Breathing'
    },
    {
      type: 'Bronze',
      item: /create_ironworks:bronze_armor_(helmet|chestplate|leggings|boots)/,
      bonus: '+25% Attack Damage'
    },
    {
      type: 'Rose Quartz',
      item: /create_ironworks:rose_quartz_armor_(helmet|chestplate|leggings|boots)/,
      bonus: 'Fire Resistance'
    }
  ]

  // Tooltips for vanilla armor sets
  vanillaArmorSets.forEach(set => {
    event.addAdvanced(set.item, (item, advanced, text) => {
      text.add(4, [
        Text.of('')
      ])
      text.add(5, [
        Text.aqua('Gives '),
        Text.green(set.bonus),
        Text.aqua(' when wearing the full ' + set.type + ' armor set '),
        Text.red('without mending'),
        Text.aqua(':')
      ])
      text.add(6, [
        Text.gray(' - ' + set.type + ' Helmet')
      ])
      text.add(7, [
        Text.gray(' - ' + set.type + ' Chestplate')
      ])
      text.add(8, [
        Text.gray(' - ' + set.type + ' Leggings')
      ])
      text.add(9, [
        Text.gray(' - ' + set.type + ' Boots')
      ])
    })
  })

  // Tooltips for Create: Ironworks armor sets
  moddedArmorSets.forEach(set => {
    event.addAdvanced(set.item, (item, advanced, text) => {
      text.add(5, [
        Text.of('')
      ])
      text.add(6, [
        Text.aqua('Gives '),
        Text.green(set.bonus),
        Text.aqua(' when wearing the full ' + set.type + ' armor set '),
        Text.red('without mending'),
        Text.aqua(':')
      ])
      text.add(7, [
        Text.gray(' - ' + set.type + ' Helmet')
      ])
      text.add(8, [
        Text.gray(' - ' + set.type + ' Chestplate')
      ])
      text.add(9, [
        Text.gray(' - ' + set.type + ' Leggings')
      ])
      text.add(10, [
        Text.gray(' - ' + set.type + ' Boots')
      ])
    })
  })
})