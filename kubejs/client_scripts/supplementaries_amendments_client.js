ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')
  const leftClick = keyMappings.find(km => km.name == 'key.attack')
  const quiverKey = keyMappings.find(km => km.name == 'supplementaries.keybind.quiver')

  // Illuminator tooltip
  event.addAdvanced('supplementaries:redstone_illuminator', (item, advanced, text) => {
    text.add(1, [
      Text.gray('Gives off a light output inversely proportional to a redstone signal it receives. This means it\'s on by default and off when receiving a redstone signal strength of 15.')
    ])
  })

  // Quiver tooltip
  event.addAdvanced('supplementaries:quiver', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('\nHolds up to 6 stacks of arrows. Arrows picked up will automatically go in the quiver if there\'s space. Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to add or remove arrows from your inventory. Use ['),
        Text.yellow(quiverKey.translatedKeyMessage),
        Text.gold('] to scroll through available arrow stacks while carrying the quiver.')
      ])
    }
  })

  // Flags tooltip
  event.addAdvanced(/supplementaries:flag.*/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('A horizontal banner that sways in the wind. Use ['),
        Text.yellow(leftClick.translatedKeyMessage),
        Text.gold('] and ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to raise or lower a flag on a pole made of '),
        Text.yellow('sticks'),
        Text.gold('.')
      ])
    }
  })

  // Pedestal tooltip
  event.addAdvanced('supplementaries:pedestal', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Stacks vertically and can be used to display one item. Removing an item gives an observer signal, unless replaced with a '),
        Text.yellow('sack'),
        Text.gold('. Place an '),
        Text.yellow('end crystal'),
        Text.gold(' to give enchanting power equal to 3 bookshelves. ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with an item to place it. ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with an empty hand or '),
        Text.yellow('sack'),
        Text.gold(' to remove an item.')
      ])
    }
  })

  // Notice Board tooltip
  event.addAdvanced('supplementaries:notice_board', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can display a '),
        Text.yellow('map'),
        Text.gold(' or a '),
        Text.yellow('book'),
        Text.gold('. Give it a redstone signal to turn the book page. ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to give or take the displayed item')
      ])
    }
  })

  // Doormat tooltip
  event.addAdvanced('supplementaries:doormat', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can display up to three lines of text. Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with a '),
        Text.yellow('key'),
        Text.gold(' on any side of the mat except the top to hide it. Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] again with an empty hand to take out the '),
        Text.yellow('key'),
        Text.gold('.')
      ])
    }
  })

})