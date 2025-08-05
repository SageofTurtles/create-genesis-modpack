ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')

  // Deed of Ownerhsip tooltip
  event.addAdvanced('pet_home:deed_of_ownership', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on an '),
        Text.yellow('animal you own'),
        Text.gold(' with a '),
        Text.yellow('deed of ownership'),
        Text.gold(' to bind it to that animal. Ownership of the animal can be transferred by having another player ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on that animal with the bound '),
        Text.yellow('deed of ownership'),
        Text.gold('.')
      ])
    }
  })

  // Collar Tag tooltip
  event.addAdvanced('pet_home:collar_tag', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be enchanted or used as a nametag. ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on an '),
        Text.yellow('animal you own'),
        Text.gold(' with a '),
        Text.yellow('collar tag'),
        Text.gold(' to put it on that animal, giving it the name and/or enchantments applied on the '),
        Text.yellow('collar tag'),
        Text.gold('. It can be removed from the tamed animal swapping it with another '),
        Text.yellow('collar tag'),
        Text.gold('.')
      ])
    }
  })
})