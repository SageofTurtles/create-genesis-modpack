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
        Text.gold(' like doors or tunnels by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] when controlled by a player using a '),
        Text.yellow('remote lens'),
        Text.gold('.'),
      ])
      text.add(2, [
        Text.gold('\nUse ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on any type of '),
        Text.yellow('smokestack'),
        Text.gold(' with a '),
        Text.yellow('vent block'),
        Text.gold(' in your hand to toggle the smoke particles on or off.'),
      ])
    }
  })

  // Fuel Tank tooltip
  event.addAdvanced('railways:fuel_tank', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be placed on a train and filled with '),
        Text.yellow('a liquid fuel'),
        Text.gold(' to increase the train\'s speed when the fuel is consumed.')
      ])
      text.add(2, [
        Text.yellow('\nAccepted fuels:')
      ])
      text.add(3, [
        Text.aqua(' - Biofuel')
      ])
      text.add(4, [
        Text.gold(' - Lava')
      ])
      text.add(5, [
        Text.gold(' - Seed Oil')
      ])
    }
  })
})