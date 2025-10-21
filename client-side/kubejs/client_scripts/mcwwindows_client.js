ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')
  const sneakKey = keyMappings.find(km => km.name == 'key.sneak')

  // Curtains tooltips
  event.addAdvanced(/mcwwindows:.*_curtain/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] or ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold(' + '),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on the '),
        Text.yellow('drapes'),
        Text.gold(' to change their style.')
      ])
    }
  })
})