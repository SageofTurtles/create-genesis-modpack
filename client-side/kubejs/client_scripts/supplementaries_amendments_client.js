ItemEvents.tooltip(event => {
  // Identify keybind
  const keyMappings = Client.options.keyMappings
  const rightClick = keyMappings.find(km => km.name == 'key.use')
  const leftClick = keyMappings.find(km => km.name == 'key.attack')
  const quiverKey = keyMappings.find(km => km.name == 'supplementaries.keybind.quiver')
  const sneakKey = keyMappings.find(km => km.name == 'key.sneak')

  // Illuminator tooltip
  event.addAdvanced('supplementaries:redstone_illuminator', (item, advanced, text) => {
    text.add(1, [
      Text.gray('Gives off a light output inversely proportional to a redstone signal it receives. This means it\'s on by default and off when receiving a redstone signal strength of 15.')
    ])
  })

  // Relayer tooltip
  event.addAdvanced('supplementaries:relayer', (item, advanced, text) => {
    text.add(1, [
      Text.gray('Observes a redstone signal and outputs the same signal strength.')
    ])
  })

  // Slice Map tooltip
  event.addAdvanced('supplementaries:slice_map', (item, advanced, text) => {
    text.add(1, [
      Text.gray('A map that shows the terrain from the y-level where it was first used.')
    ])
  })

  // Gold Door & Trapdoor tooltip
  event.addAdvanced(/supplementaries:gold_.*door/, (item, advanced, text) => {
    text.add(1, [
      Text.gray('Locks while powered with a redstone signal.')
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
        Text.gold(' on top for it to give enchanting power equal to 3 bookshelves. ['),
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
        Text.gold('. Caution: may attract cats!')
      ])
    }
  })

  // Timber Frames & Braces tooltip
  event.addAdvanced(/supplementaries:timber_.*/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(2, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(2, [
        Text.gold('A decorative frame that can be applied to blocks by using ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold(' + '),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold(']. Remove the frame from a block by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with an '),
        Text.yellow('axe'),
        Text.gold('.')
      ])
    }
  })

  // Flute tooltip
  event.addAdvanced('supplementaries:flute', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Plays a random song when used. Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with the '),
        Text.yellow('flute'),
        Text.gold(' on a pet to bind it. '),
        Text.yellow('Bound flutes'),
        Text.gold(' will summon the bound pet to the player when used.')
      ])
    }
  })

  // Netherite Door tooltip
  event.addAdvanced('supplementaries:netherite_door', (item, advanced, text) => {
    if (!event.shift) {
      text.add(2, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(2, [
        Text.gold('Durable and blast-resistant. Can be locked by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with a named '),
        Text.yellow('key'),
        Text.gold(' to bind it. Once locked, only players with the '),
        Text.yellow('bound key'),
        Text.gold(' in their inventory can open the door.')
      ])
    }
  })

  // Netherite Trapdoor tooltip
  event.addAdvanced('supplementaries:netherite_trapdoor', (item, advanced, text) => {
    if (!event.shift) {
      text.add(2, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(2, [
        Text.gold('Durable and blast-resistant. Can be locked by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with a named '),
        Text.yellow('key'),
        Text.gold(' to bind it. Once locked, only players with the '),
        Text.yellow('bound key'),
        Text.gold(' in their inventory can open the trapdoor.')
      ])
    }
  })

  // Lock Block tooltip
  event.addAdvanced('supplementaries:lock_block', (item, advanced, text) => {
    if (!event.shift) {
      text.add(2, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(2, [
        Text.gold('Can be locked by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with a named '),
        Text.yellow('key'),
        Text.gold(' to bind it. Once locked, only players with the '),
        Text.yellow('bound key'),
        Text.gold(' in their inventory can trigger the lock. Emits a redstone pulse when triggered by a player carrying the '),
        Text.yellow('bound key'),
        Text.gold('.')
      ])
    }
  })

  // Safe tooltip
  event.addAdvanced('supplementaries:safe', (item, advanced, text) => {
    if (!event.shift) {
      text.add(2, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(2, [
        Text.gold('Durable and blast-resistant, and can be carried like a '),
        Text.yellow('shulker box'),
        Text.gold('. Can be locked by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with a named '),
        Text.yellow('key'),
        Text.gold(' to bind it. Once locked, only players with the '),
        Text.yellow('bound key'),
        Text.gold(' in their inventory can open or break the safe.')
      ])
    }
  })

  // Sconce Lever tooltip
  event.addAdvanced('supplementaries:sconce_lever', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('A '),
        Text.yellow('sconce'),
        Text.gold(' which can be pulled like a '),
        Text.yellow('lever'),
        Text.gold(' by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to produce a redstone signal. The signal is inverted when the '),
        Text.yellow('sconce lever'),
        Text.gold(' is unlit.')
      ])
    }
  })

  // Bell tooltip
  event.addAdvanced('minecraft:bell', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can have a '),
        Text.yellow('rope'),
        Text.gold(', '),
        Text.yellow('chain'),
        Text.gold(', '),
        Text.yellow('golden chain'),
        Text.gold(', or '),
        Text.yellow('copper chain'),
        Text.gold(' attached to the bottom. Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on the attached '),
        Text.yellow('rope'),
        Text.gold(' or '),
        Text.yellow('chain'),
        Text.gold(' to ring the bell.')
      ])
    }
  })

  // Create Bells tooltip
  event.addAdvanced(/create:(peculiar|haunted)_bell/, (item, advanced, text) => {
    if (event.shift) {
      text.add(1, [
        Text.gold('\nCan have a '),
        Text.yellow('chain'),
        Text.gold(', '),
        Text.yellow('golden chain'),
        Text.gold(', or '),
        Text.yellow('copper chain'),
        Text.gold(' attached to the bottom. Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on the attached '),
        Text.yellow('chain'),
        Text.gold(' to ring the bell.')
      ])
    }
  })

  // Key tooltip
  event.addAdvanced('supplementaries:key', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('\nCan be bound to a '),
        Text.yellow('safe'),
        Text.gold(', '),
        Text.yellow('netherite door'),
        Text.gold(', '),
        Text.yellow('netherite trapdoor'),
        Text.gold(', or '),
        Text.yellow('lock block'),
        Text.gold(' by renaming it in an anvil and then using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on the block or door.')
      ])
      text.add(2, [
        Text.gold('\nOnce bound, only players who have a '),
        Text.yellow('key'),
        Text.gold(' with the same name in their inventory will be able to open the lock. Use ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold(' + '),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with the '),
        Text.yellow('key'),
        Text.gold(' on the bound lock to unbind it.')
      ])
    }
  })

  // Sconces & Candle Holders tooltips
  let lightBlocks = [
    'supplementaries:sconce',
    'supplementaries:sconce_soul'
  ]
  lightBlocks.forEach(block => {
    event.addAdvanced(block, (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
        ])
      } else {
        text.add(1, [
          Text.gold('A decorative alternative to '),
          Text.yellow('torches'),
          Text.gold('. Can be lit with '),
          Text.yellow('flint and steel'),
          Text.gold(', '),
          Text.yellow('fire charges'),
          Text.gold(', or '),
          Text.yellow('flaming arrows'),
          Text.gold('. Can be extinguished with a '),
          Text.yellow('splash water bottle'),
          Text.gold(' or by waterlogging it.')
        ])
      }
    })
  })
  event.addAdvanced(/supplementaries:candle_holder/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(2, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(2, [
        Text.gold('A decorative alternative to '),
        Text.yellow('torches'),
        Text.gold('. Can be lit with '),
        Text.yellow('flint and steel'),
        Text.gold(', '),
        Text.yellow('fire charges'),
        Text.gold(', or '),
        Text.yellow('flaming arrows'),
        Text.gold('. Can be extinguished with a '),
        Text.yellow('splash water bottle'),
        Text.gold(' or by waterlogging it.')
      ])
    }
  })

  // Antique Ink Tooltip
  event.addAdvanced('supplementaries:antique_ink', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on a sign to give its text the Antiquable font. Craft it together with a '),
        Text.yellow('book'),
        Text.gold(' to convert it to a '),
        Text.yellow('tattered book'),
        Text.gold(', which can\'t be copied and uses the Antiquable font.')
      ])
    }
  })

  // Rope Arrow tooltip
  event.addAdvanced('supplementaries:rope_arrow', (item, advanced, text) => {
    if (!event.shift) {
      text.add(3, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(3, [
        Text.gold('Deploys a coil of '),
        Text.yellow('rope'),
        Text.gold(' from wherever it strikes, which players can climb. Useful for traversing caves, cliffs, and chasms.')
      ])
    }
  })

  // Presents tooltips
  event.addAdvanced(/supplementaries:present/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Give a gift to another player! Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on the '),
        Text.yellow('present'),
        Text.gold(' to put an item inside, write the name of the player it\'s for, and a leave a note. Once packed, only you or the recipient can open the '),
        Text.yellow('present'),
        Text.gold('.')
      ])
    }
  })
  event.addAdvanced(/supplementaries:trapped_present/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Give a gift to another player! Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on the '),
        Text.yellow('trapped present'),
        Text.gold(' to put an item inside, then prime it. Once primed, only you or the recipient can open the '),
        Text.yellow('trapped present'),
        Text.gold(', causing a harmless explosion.')
      ])
    }
  })

  // Cage tooltip
  event.addAdvanced('supplementaries:cage', (item, advanced, text) => {
    text.remove(1)
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on a mob with the '),
        Text.yellow('cage'),
        Text.gold(' to capture it, and again to release it. (Doesn\'t work on bosses!) ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold(' + '),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to place the '),
        Text.yellow('cage'),
        Text.gold(' as a block.')
      ])
    }
  })

  // Jar tooltip
  event.addAdvanced('supplementaries:jar', (item, advanced, text) => {
    text.remove(1)
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be used to store cookies, drinks, and small mobs. ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on a small mob with the '),
        Text.yellow('jar'),
        Text.gold(' to capture it, and again to release it. ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold(' + '),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] to place the '),
        Text.yellow('jar'),
        Text.gold(' as a block.')
      ])
    }
  })

  // Globe tooltips
  event.addAdvanced(/supplementaries:globe/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] or a redstone signal to spin the '),
        Text.yellow('globe'),
        Text.gold(' to the next face. Outputs a '),
        Text.yellow('comparator'),
        Text.gold(' signal based on the face it\'s showing. Displays the '),
        Text.yellow('globe'),
        Text.gold('\'s coordinates when spun by a player.')
      ])
    }
  })

  // Goblet tooltip
  event.addAdvanced('supplementaries:goblet', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on a '),
        Text.yellow('goblet'),
        Text.gold(' to fill it with a consumable fluid, and again to drink it.')
      ])
    }
  })

  // Sign Post tooltips
  event.addAdvanced(/supplementaries:sign_post/, (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can place up to 2 on a '),
        Text.yellow('fence'),
        Text.gold(', '),
        Text.yellow('wall'),
        Text.gold(', '),
        Text.yellow('stick'),
        Text.gold(', or block. Use ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold(' + '),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it to change the direction it points, or ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it with a '),
        Text.yellow('compass'),
        Text.gold(' to make it point in the same direction.'),
      ])
    }
  })

  // Flint Block tooltip
  event.addAdvanced('supplementaries:flint_block', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Creates a fire when scraped against an '),
        Text.yellow('iron block'),
        Text.gold(' using a '),
        Text.yellow('piston'),
        Text.gold('.')
      ])
    }
  })

  // Hat Stand tooltips
  event.addAdvanced('supplementaries:hat_stand', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Equip a '),
        Text.yellow('helmet'),
        Text.gold(' or other head gear on the '),
        Text.yellow('hat stand'),
        Text.gold(' by using ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold(']. Using ['),
        Text.yellow(sneakKey.translatedKeyMessage),
        Text.gold(' + '),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] on it with an empty hand will cause the '),
        Text.yellow('hat stand'),
        Text.gold(' to wobble.')
      ])
    }
  })

  // Item Shelf tooltips
  event.addAdvanced('supplementaries:item_shelf', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Use ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] with any item on the '),
        Text.yellow('item shelf'),
        Text.gold(' to put in on display. ['),
        Text.yellow(rightClick.translatedKeyMessage),
        Text.gold('] again with an empty hand to remove the item.')
      ])
    }
  })
})