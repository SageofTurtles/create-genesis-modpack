ItemEvents.tooltip(event => {
  // Dynamite tooltip
    event.addAdvanced('cgm:grenade', (item, advanced, text) => {
      text.add(1, [
        Text.gray('Thrown by holding right-click. Deals damage to nearby entities, but doesn\'t destroy blocks.')
      ])
    })

  // Stun Grenade tooltip
    event.addAdvanced('cgm:stun_grenade', (item, advanced, text) => {
      text.add(1, [
        Text.gray('Thrown by holding right-click. Temporarily blinds and deafens nearby entities.')
      ])
    })
  })