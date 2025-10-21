ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')
  const sneakKey = keyMappings.find(km => km.name == 'key.sneak')

  // Lamps tooltips
  event.addAdvanced(/another_furniture:.*_lamp/, (item, advanced, text) => {
    text.add(1,
      Text.gray('Can be built taller, by placing another one on top of this one')
    )
    if (!event.shift) {
      text.add(2, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(2, '')
      text.add(3, [
        Text.gold('Can be turned on or off by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] or with a '),
        Text.yellow('redstone signal'),
        Text.gold('.')
      ])
    }
  })

  // Chairs tooltips
  event.addAdvanced(/another_furniture:.*_chair/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it with a '),
        Text.yellow('furniture hammer'),
        Text.gold(' to change its style.')
      ])
    }
  })

  // Shutters tooltips
  event.addAdvanced(/another_furniture:.*_shutter/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it with a '),
        Text.yellow('furniture hammer'),
        Text.gold(' to change its style.')
      ])
      text.add(2, [
        Text.gold('\nCan be opened or closed by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] or with a '),
        Text.yellow('redstone signal'),
        Text.gold('.')
      ])
    }
  })

  // Benches tooltips
  event.addAdvanced(/another_furniture:.*_bench/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it with a '),
        Text.yellow('furniture hammer'),
        Text.gold(' to remove the seat back.')
      ])
    }
  })

  // Stool tooltips
  global.colors.forEach(color => {
    event.addAdvanced(`another_furniture:${color}_stool`, (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
        ])
      } else {
        text.add(1, [
          Text.gold('Use ['),
          Text.yellow(rightClick.translatedKeyMessage),
          Text.gold('] on it with a '),
          Text.yellow('furniture hammer'),
          Text.gold(' to change the cushion height.')
        ])
      }
    })
  })

  // Service Bell tooltip
  event.addAdvanced('another_furniture:service_bell', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it to ring the '),
        Text.yellow('bell'),
        Text.gold('.')
      ])
    }
  })

  // Curtains tooltips
  event.addAdvanced(/another_furniture:.*_curtain/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it to raise or lower the '),
        Text.yellow('curtain'),
        Text.gold('.')
      ])
    }
  })

  // Shelves tooltips
  event.addAdvanced(/another_furniture:.*_shelf/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can hold up to '),
        Text.yellow('4 items'),
        Text.gold(' on display. Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to place an item on the '),
        Text.yellow('shelf'),
        Text.gold(', or ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold(' + '),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to remove the item.')
      ])
    }
  })

  // Flower Boxes tooltips
  event.addAdvanced(/another_furniture:.*_flower_box/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can hold up to '),
        Text.yellow('2 plants'),
        Text.gold('. Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to place a '),
        Text.yellow('plant'),
        Text.gold(' in the '),
        Text.yellow('flower box'),
        Text.gold('.')
      ])
    }
  })
})