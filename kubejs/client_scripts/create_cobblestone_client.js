ItemEvents.tooltip(event => {
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')

  // Mechanical Generator tooltip
  event.addAdvanced('createcobblestone:mechanical_generator', (item, advanced, text) => {
    text.remove(1)
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Automatically generates '),
        Text.yellow('stone variants'),
        Text.gold(' using rotational power. Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with the block in your hand to assign the variant to be produced. ')
      ])
      text.add(2, [
        Text.gray('\nAccepted variants:')
      ])
      text.add(3, [
        Text.gray(' - Basalt')
      ])
      text.add(4, [
        Text.gray(' - Blackstone')
      ])
      text.add(5, [
        Text.gray(' - Cobblestone')
      ])
      text.add(6, [
        Text.gray(' - Limestone')
      ])
      text.add(7, [
        Text.gray(' - Scoria')
      ])
    }
  })
})