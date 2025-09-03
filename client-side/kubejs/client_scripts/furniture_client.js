ItemEvents.tooltip(event => {
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')
  const sneakKey = keyMappings.find(km => km.name == 'key.sneak')

  // Lamp tooltips
  event.addAdvanced(/furniture:.*lamp/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold('] + ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] turn the '),
        Text.yellow('lamp'),
        Text.gold(' on or off. Can be built taller by stacking them.')
      ])
    }
  })

  // Bench tooltips
  event.addAdvanced(/furniture:.*bench/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold('] + ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to remove the backrest.')
      ])
    }
  })

  // Display Case tooltip
  event.addAdvanced('furniture:display', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to place an item in the '),
        Text.yellow('display case'),
        Text.gold(', or ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold('] + ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to remove the item.')
      ])
    }
  })

  // Fish Tank tooltip
  event.addAdvanced(/furniture:.*_fish_tank/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be filled with '),
        Text.yellow('salmon'),
        Text.gold(', '),
        Text.yellow('cod'),
        Text.gold(', and '),
        Text.yellow('pufferfish'),
        Text.gold(' (up to one of each).')
      ])
    }
  })

  // Pells tooltip
  event.addAdvanced('furniture:pells', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('An indestructible training dummy to test your strength against. Use ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold(' + '),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold(' to pick it back up after placing.')
      ])
    }
  })

  // Building Plans tooltip
  event.addAdvanced('furniture:blueprints', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('A more decorative version of the '),
        Text.yellow('crafting table'),
        Text.gold('.')
      ])
    }
  })

  // Explorer's Box tooltip
  event.addAdvanced('furniture:explorers_box', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('A more decorative version of the '),
        Text.yellow('cartography table'),
        Text.gold('.')
      ])
    }
  })

  // Sewing Kit tooltip
  event.addAdvanced('furniture:sewing_kit', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('A more decorative version of the '),
        Text.yellow('loom'),
        Text.gold('.')
      ])
    }
  })

  // Smith's Toolbox tooltip
  event.addAdvanced('furniture:tool_box', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('A more decorative version of the '),
        Text.yellow('smithing table'),
        Text.gold('.')
      ])
    }
  })

  // Coffer tooltip
  event.addAdvanced('furniture:coffer', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('A more decorative version of the '),
        Text.yellow('shulker box'),
        Text.gold('.')
      ])
    }
  })

  // Gramophone tooltip
  event.addAdvanced('furniture:gramophone', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('A more decorative version of the '),
        Text.yellow('jukebox'),
        Text.gold('.')
      ])
    }
  })
})