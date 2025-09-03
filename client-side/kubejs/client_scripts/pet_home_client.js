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

  // Command Drum tooltip
  event.addAdvanced('pet_home:drum', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be used with ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to change the command mode of all the user\'s '),
        Text.yellow('owned animals'),
        Text.gold(' between '),
        Text.yellow('stay'),
        Text.gold(', '),
        Text.yellow('wander'),
        Text.gold(', and '),
        Text.yellow('follow'),
        Text.gold('. Give it a redstone signal to command the pets of the player who placed the '),
        Text.yellow('command drum'),
        Text.gold('.')
      ])
    }
  })

  // Wayward Lantern tooltip
  event.addAdvanced('pet_home:wayward_lantern', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('An '),
        Text.yellow('owned animal'),
        Text.gold(' in '),
        Text.yellow('follow'),
        Text.gold(' mode will find its way to your nearest '),
        Text.yellow('wayward lantern'),
        Text.gold(' if it was left in an unloaded chunk.')
      ])
    }
  })

  // Feather on a Stick tooltip
  event.addAdvanced('pet_home:feather_on_a_stick', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Casts a '),
        Text.yellow('feather on a string'),
        Text.gold(' in front of you, luring your nearest '),
        Text.yellow('pet'),
        Text.gold(' to play with the feather. Useful for moving '),
        Text.yellow('pets'),
        Text.gold(' to their '),
        Text.yellow('pet beds'),
        Text.gold(' or out of the way.')
      ])
    }
  })

  // Pet Bed tooltip
  event.addAdvanced(/pet_home:pet_bed/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Move a '),
        Text.yellow('pet'),
        Text.gold(' onto the '),
        Text.yellow('pet bed'),
        Text.gold(' to set its spawn. If that pet dies, it will respawn the next morning at its '),
        Text.yellow('pet bed'),
        Text.gold('.')
      ])
    }
  })
})