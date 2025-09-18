ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')

  let pipes = [
    'pipeorgans:piccolo',
    'pipeorgans:diapason',
    'pipeorgans:trompette',
    'pipeorgans:gedeckt',
    'pipeorgans:gamba',
    'pipeorgans:nasard',
    'pipeorgans:subbass',
    'pipeorgans:posaune',
    'pipeorgans:vox_humana'
  ]

  // Steam Whistle tooltip
  event.addAdvanced('create:steam_whistle', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.yellow('Pipe organs'),
        Text.gold(' can be placed on a '),
        Text.yellow('windchest'),
        Text.gold(' or on a '),
        Text.yellow('fluid tank'),
        Text.gold(' with a '),
        Text.yellow('heat source'),
        Text.gold(' beneath it. It will play a note when given a redstone signal. Change the pitch by stacking them upward, or use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it with a '),
        Text.yellow('wrench'),
        Text.gold(' to change its octave.')
      ])
    }
  })

  // Pipes tooltips
  event.addAdvanced(pipes, (item, advanced, text) => {
    text.remove(1)
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.yellow('Pipe organs'),
        Text.gold(' can be placed on a '),
        Text.yellow('windchest'),
        Text.gold(' or on a '),
        Text.yellow('fluid tank'),
        Text.gold(' with a '),
        Text.yellow('heat source'),
        Text.gold(' beneath it. It will play a note when given a redstone signal. Change the pitch by stacking them upward, or use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it with a '),
        Text.yellow('wrench'),
        Text.gold(' to change its octave.')
      ])
    }
  })

  // Windchest tooltip
  event.addAdvanced('pipeorgans:windchest', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('When receiving air from an active '),
        Text.yellow('windchest controller'),
        Text.gold(', it will allow an attached '),
        Text.yellow('organ pipe'),
        Text.gold(' to play a note when powered by redstone. '),
        Text.yellow('Windchests'),
        Text.gold(' must be placed in a straight line (up to 13 blocks), with the arrow pointing toward the '),
        Text.yellow('windchest controller'),
        Text.gold(' in order to be activated.')
      ])
    }
  })

  // Windchest Controller tooltip
  event.addAdvanced('pipeorgans:windchest_master', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Place a powered '),
        Text.yellow('encased fan'),
        Text.gold(' pointing into the '),
        Text.yellow('windchest controller'),
        Text.gold(' and power it with redstone to make it active. When active, it can activate a row of '),
        Text.yellow('windchests'),
        Text.gold(' up to 13 blocks long through its gray side.')
      ])
    }
  })

  // External MIDI device tooltips
  let externalDevices = [
    'pipeorgans:keyboard_relay',
    'pipeorgans:stop_master'
  ]

  event.addAdvanced(externalDevices, (item, advanced, text) => {
    text.add(1, [
      Text.darkGray('Use with an external MIDI keyboard to play pipe organs.').italic()
    ])
  })
})