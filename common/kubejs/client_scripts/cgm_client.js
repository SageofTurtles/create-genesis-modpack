ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const useKey = keyMappings.find(km => km.name == 'key.use')

  // Dynamite tooltip
  event.addAdvanced('cgm:grenade', (item, advanced, text) => {
    text.add(1, [
      Text.gold('Thrown by holding ['), Text.yellow(useKey.translatedKeyMessage), Text.gold(']. Deals damage to nearby entities, but doesn\'t destroy blocks.')
    ])
  })

  // Stun Grenade tooltip
  event.addAdvanced('cgm:stun_grenade', (item, advanced, text) => {
    text.add(1, [
      Text.gold('Thrown by holding ['), Text.yellow(useKey.translatedKeyMessage), Text.gold(']. Temporarily blinds and deafens nearby entities.')
    ])
  })
})