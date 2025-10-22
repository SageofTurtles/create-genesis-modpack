ItemEvents.tooltip(event => {
  // Mechanical Chisel tooltip
  event.addAdvanced('rechiseledcreate:mechanical_chisel', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be used to automate crafting recipes for the '),
        Text.yellow('chisel'),
        Text.gold('.')
      ])
    }
  })
})