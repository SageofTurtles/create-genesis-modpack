ItemEvents.tooltip(event => {
  // Supports tooltips
  event.addAdvanced(/decorative_blocks:.*_support/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    }
  })

  // Seats tooltips
  event.addAdvanced(/decorative_blocks:.*_seat/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    }
  })
})