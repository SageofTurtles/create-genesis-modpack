ItemEvents.tooltip(event => {
  event.addAdvanced(/furniture:.*lamp/, (item, advanced, text) => {
    text.add(1, [
      Text.gray('Can be built taller, by placing another one on top of this one')
    ])
  })
})