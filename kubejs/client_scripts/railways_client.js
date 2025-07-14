ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')

  // Conductor's Caps tooltip
  event.addAdvanced(/railways:.*_conductor_cap/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on an '),
        Text.yellow('andesite casing'),
        Text.gold(' block with a '),
        Text.yellow('conductor\'s cap'),
        Text.gold(' to spawn a '),
        Text.yellow('conductor'),
        Text.gold('. Rename the '),
        Text.yellow('conductor\'s cap'),
        Text.gold(' in an anvil to '),
        Text.yellow('"sus"'),
        Text.gold(' and equip it to turn yourself into a '),
        Text.yellow('conductor'),
        Text.gold('.')
      ])
    }
  })

  // Vent Block tooltip
  event.addAdvanced('railways:conductor_vent', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be retextured like a '),
        Text.yellow('copycat block'),
        Text.gold(' by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it with a block in your hand. '),
        Text.yellow('Conductors'),
        Text.gold(' can move instantly through '),
        Text.yellow('vent blocks'),
        Text.gold(' like doors or tunnels.')
      ])
    }
  })
})