ItemEvents.tooltip(event => {
  event.addAdvanced('create:blaze_burner', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] to see fuel sources')
      ])
    } else {
      text.add(1, [
        Text.gold('Heating fuels:')
      ])
      text.add(2, [
        Text.gray(' - Any furnace fuel')
      ])
      text.add(3, [
        Text.gray(' - Eggs')
      ])
      text.add(4, [
        Text.gray(' - Lava (fluid by pipe)')
      ])
      text.add(5, [
        Text.gray(' - Seed Oil (fluid by pipe)')
      ])
      text.add(6, [
        Text.of('')
      ])
      text.add(7, [
        Text.aqua('Seething fuels:')
      ])
      text.add(8, [
        Text.gray(' - Blaze Cake')
      ])
      text.add(9, [
        Text.gray(' - Bioethanol (fluid by pipe)')
      ])
    }
  })
})
