ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')

  // Sleeping Bag tooltips
  event.addAdvanced(/comforts:sleeping_bag.*/, (item, advanced, text) => {
    text.add(1, [
      Text.gray('Can be used to sleep without resetting your spawn bed')
    ])
  })

  // Hammock tooltips
  event.addAdvanced(/comforts:hammock.*/, (item, advanced, text) => {
    text.remove(1)
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can only be hung between two '),
        Text.yellow('rope and nails'),
        Text.gold('. Can be used to sleep without resetting your spawn bed.')
      ])
    }
  })

  // Rope and Nail tooltip
  event.addAdvanced('comforts:rope_and_nail', (item, advanced, text) => {
    text.remove(1)
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Place 2 '),
        Text.yellow('rope and nails'),
        Text.gold(' facing each other, with a 2-block gap between them. Then use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on either one with a '),
        Text.yellow('hammock'),
        Text.gold(' to hang it up.')
      ])
    }
  })
})