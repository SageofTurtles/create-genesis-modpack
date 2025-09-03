ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')

  // Luminous Glass & Pane tooltips
  event.addAdvanced(/luminousblocks:luminous_.*/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('A special type of glass that emits light. Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it with a '),
        Text.yellow('luminosity wand'),
        Text.gold(' to change its light level.')
      ])
    }
  })

  // Luminosity Wand tooltip
  event.addAdvanced('luminousblocks:luminosity_wand', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with the '),
        Text.yellow('luminosity wand'),
        Text.gold(' on any '),
        Text.yellow('luminous glass'),
        Text.gold(' or '),
        Text.yellow('luminous glass pane'),
        Text.gold(' to change its light level.')
      ])
    }
  })
})