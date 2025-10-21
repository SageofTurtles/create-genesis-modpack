ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')

  // Street Lamps tooltips
  event.addAdvanced(/mcwlights:.*_street_lamp/, (item, advanced, text) => {
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

  // Paper Lamps tooltips
  event.addAdvanced(/mcwlights:.*_paper_lamp/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be turned on or off by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] or with a '),
        Text.yellow('redstone signal'),
        Text.gold('.')
      ])
    }
  })

  // Ceiling Lights tooltips
  event.addAdvanced(/mcwlights:.*_ceiling_light/, (item, advanced, text) => {
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

  // Ceiling Fan Lights tooltips
  event.addAdvanced(/mcwlights:.*_ceiling_fan_light/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be turned on or off by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] or with a '),
        Text.yellow('redstone signal'),
        Text.gold('.')
      ])
    }
  })

  // Tiki Torches tooltips
  event.addAdvanced(/mcwlights:.*_tiki_torch/, (item, advanced, text) => {
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

  // Garden Lights tooltips
  event.addAdvanced(/mcwlights:.*garden_light/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be turned on or off by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] or with a '),
        Text.yellow('redstone signal'),
        Text.gold('.')
      ])
    }
  })

  // Lava Lamp tooltip
  event.addAdvanced('mcwlights:lava_lamp', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be turned on or off by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] or with a '),
        Text.yellow('redstone signal'),
        Text.gold('.')
      ])
    }
  })

  // Candle Holders tooltips
  event.addAdvanced(/mcwlights:.*_candle_holder/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be lit or extinguished by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it.')
      ])
    }
  })

  // Chandeliers tooltips
  event.addAdvanced(/mcwlights:.*_chandelier/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be lit or extinguished by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it.')
      ])
    }
  })
})