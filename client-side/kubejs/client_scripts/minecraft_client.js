ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')
  const sneakKey = keyMappings.find(km => km.name == 'key.sneak')

  // Echo Shard tooltip
  event.addAdvanced('minecraft:echo_shard', (item, advanced, text) => {
    text.add(1, [
      Text.red('Only obtainable by killing a Warden')
    ])
  })

  // Netherite Upgrade Smithing Template tooltip
  event.addAdvanced('minecraft:netherite_upgrade_smithing_template', (item, advanced, text) => {
    text.add(2, [
      Text.red('Only obtainable by trading with a master Toolsmith villager')
    ])
  })

  // Dragon Egg tooltip
  event.addAdvanced('minecraft:dragon_egg', (item, advanced, text) => {
    text.add(1, [
      Text.red('Only obtainable by killing the Ender Dragon')
    ])
  })

  // Map tooltip
  event.addAdvanced('minecraft:map', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with an '),
        Text.yellow('empty map'),
        Text.gold(' to begin mapping your surroundings on the page. You can also use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with a '),
        Text.yellow('map'),
        Text.gold(' on any supported block to add it as a marker on the '),
        Text.yellow('map'),
        Text.gold(', including renamed blocks for labeled markers:')
      ])
      text.add(2, Text.gray(' - Banner'))
      text.add(3, Text.gray(' - Beacon'))
      text.add(4, Text.gray(' - Bed'))
      text.add(5, Text.gray(' - Bell'))
      text.add(6, Text.gray(' - Campfire'))
      text.add(7, Text.gray(' - Conduit'))
      text.add(8, Text.gray(' - End Portal'))
      text.add(9, Text.gray(' - Flag'))
      text.add(10, Text.gray(' - Lodestone'))
      text.add(11, Text.gray(' - Nether Portal'))
      text.add(12, Text.gray(' - Respawn Anchor'))
      text.add(13, Text.gray(' - Sign Post'))
    }
  })

  // Mob Head tooltips
  event.addAdvanced('minecraft:creeper_head', (item, advanced, text) => {
    text.add(1, [
      Text.gray('Gives player low-resolution green vision when worn.')
    ])
  })
  event.addAdvanced('minecraft:dragon_head', (item, advanced, text) => {
    text.add(1, [
      Text.gray('Gives player ethereal vision when worn.')
    ])
  })
  event.addAdvanced(/minecraft:(wither_)?skeleton_skull/, (item, advanced, text) => {
    text.add(1, [
      Text.gray('Gives player monochrome vision when worn.')
    ])
  })

  // Gunpowder tooltip
  event.addAdvanced('minecraft:gunpowder', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be placed like '),
        Text.yellow('redstone dust'),
        Text.gold(', acting like a fuse when ignited with a fire source. When lit, it will burn away and ignite flammable blocks or '),
        Text.yellow('TNT'),
        Text.gold(' in its path.')
      ])
    }
  })

  // Painting tooltip
  event.addAdvanced('minecraft:painting', (item, advanced, text) => {
    if (!event.shift) {
      text.add(2, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(2, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with a '),
        Text.yellow('painting'),
        Text.gold(' in your hand to select its appearance.')
      ])
    }
  })

  // Rotten Flesh tooltip
  event.addAdvanced('minecraft:rotten_flesh', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Feed 64 of these to a '),
        Text.yellow('skeleton horse'),
        Text.gold(' to buff it up to a '),
        Text.yellow('zombie horse'),
        Text.gold('.')
      ])
    }
  })

  // Golden Carrot tooltip
  event.addAdvanced('minecraft:golden_carrot', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Feed to a '),
        Text.yellow('zombie horse'),
        Text.gold(' convert it into a '),
        Text.yellow('regular horse'),
        Text.gold('.')
      ])
    }
  })

  // Stick tooltip
  event.addAdvanced('minecraft:stick', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Makes for an excellent '),
        Text.yellow('flag'),
        Text.gold(' pole or '),
        Text.yellow('sign post'),
        Text.gold('.')
      ])
    }
  })

  // Blaze Rod tooltip
  event.addAdvanced('minecraft:blaze_rod', (item, advanced, text) => {
    text.add(1, [
      Text.gray('Burns players or mobs when standing on it. Causes water to boil when submerged.')
    ])
  })

  // Hanging Signs tooltip
  event.addAdvanced(/.*hanging(_canvas)?_sign/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with an item in your hand to display the item on the '),
        Text.yellow('hanging sign'),
        Text.gold('. ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with an empty hand to remove the displayed item.')
      ])
    }
  })

  // Tripwire Hook tooltip
  event.addAdvanced('minecraft:tripwire_hook', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold(' + '),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with a '),
        Text.yellow('tool'),
        Text.gold(' or '),
        Text.yellow('weapon'),
        Text.gold(' in your hand to hang it on the '),
        Text.yellow('tripwire hook'),
        Text.gold('. ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with an empty hand to remove the displayed item.')
      ])
    }
  })

  // Placeable Books tooltip
  event.addAdvanced('minecraft:book', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.yellow('Books'),
        Text.gold(' give off enchanting power to boost the level of nearby '),
        Text.yellow('enchanting tables'),
        Text.gold(' when placed as a block. A pile of 4 '),
        Text.yellow('books'),
        Text.gold(' has the same enchanting power as 1 '),
        Text.yellow('bookshelf'),
        Text.gold('.')
      ])
    }
  })
  event.addAdvanced('minecraft:writable_book', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.yellow('Books'),
        Text.gold(' give off enchanting power to boost the level of nearby '),
        Text.yellow('enchanting tables'),
        Text.gold(' when placed as a block. A pile of 4 '),
        Text.yellow('books'),
        Text.gold(' has the same enchanting power as 1 '),
        Text.yellow('bookshelf'),
        Text.gold('.')
      ])
    }
  })
  event.addAdvanced('minecraft:written_book', (item, advanced, text) => {
    if (!event.shift) {
      text.add(3, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(3, [
        Text.yellow('Books'),
        Text.gold(' give off enchanting power to boost the level of nearby '),
        Text.yellow('enchanting tables'),
        Text.gold(' when placed as a block. A pile of 4 '),
        Text.yellow('books'),
        Text.gold(' has the same enchanting power as 1 '),
        Text.yellow('bookshelf'),
        Text.gold('.')
      ])
    }
  })
  event.addAdvanced('minecraft:enchanted_book', (item, advanced, text) => {
    if (!event.shift) {
      text.add(2, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(2, [
        Text.yellow('Enchanted books'),
        Text.gold(' give off enchanting power to boost the level of nearby '),
        Text.yellow('enchanting tables'),
        Text.gold(' when placed as a block. A pile of 4 '),
        Text.yellow('enchanted books'),
        Text.gold(' has 50% more enchanting power than 1 '),
        Text.yellow('bookshelf'),
        Text.gold('.')
      ])
    }
  })

  // Item Frames tooltip
  event.addAdvanced(/minecraft:(glow_)?item_frame/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold(' + '),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on the '),
        Text.yellow('frame'),
        Text.gold(' to toggle its visibility. Can be crafted with any colored '),
        Text.yellow('dye'),
        Text.gold(' to change the background color.')
      ])
    }
  })

  // Elytra dyeing tooltip
  event.addAdvanced('minecraft:elytra', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.remove(1)
      text.remove(1)
      text.add(1, [
        Text.gold('\nCan be dyed by crafting it together with various '),
        Text.yellow('colored dyes'),
        Text.gold('. Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on a '),
        Text.yellow('cauldron'),
        Text.gold(' full of '),
        Text.yellow('water'),
        Text.gold(' to wash the dye off.\n')
      ])
    }
  })
})