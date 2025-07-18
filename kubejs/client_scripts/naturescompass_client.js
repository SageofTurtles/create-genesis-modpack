ItemEvents.tooltip(event => {
  event.addAdvanced('naturescompass:naturescompass', (item, advanced, text) => {
      text.add(1, [
        Text.gray('Can be used to search for specific biomes')
      ])
    })
  })