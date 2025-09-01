ItemEvents.tooltip(event => {

  // Add Cog stats
  Ingredient.of('#smallships:cogs').itemIds.forEach(cog => {
    event.addAdvanced(cog, (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] to see stats')
        ])
      } else {
        text.add(1, [
          Text.gray('Preferred biome: '), Text.darkAqua('Cold')
        ])
        text.add(2, [
          Text.gray('Inventory slots: '), Text.yellow('108')
        ])
        text.add(3, [
          Text.gray('Cannon ports: '), Text.yellow('4')
        ])
        text.add(4, [
          Text.gray('Seats: '), Text.red('5')
        ])
        text.add(5, [
          Text.gray('Maneuverability: '), Text.red('Low')
        ])
        text.add(6, [
          Text.gray('Top speed: '), Text.yellow('40 km/h')
        ])
        text.add(7, [
          Text.gray('Hull strength: '), Text.yellow('300')
        ])
      }
    })
  })

  // Add Brigg stats
  Ingredient.of('#smallships:briggs').itemIds.forEach(brigg => {
    event.addAdvanced(brigg, (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] to see stats')
        ])
      } else {
        text.add(1, [
          Text.gray('Preferred biome: '), Text.darkAqua('Cold')
        ])
        text.add(2, [
          Text.gray('Inventory slots: '), Text.green('162')
        ])
        text.add(3, [
          Text.gray('Cannon ports: '), Text.green('6')
        ])
        text.add(4, [
          Text.gray('Seats: '), Text.green('11')
        ])
        text.add(5, [
          Text.gray('Maneuverability: '), Text.yellow('Fair')
        ])
        text.add(6, [
          Text.gray('Top speed: '), Text.green('45 km/h')
        ])
        text.add(7, [
          Text.gray('Hull strength: '), Text.green('400')
        ])
      }
    })
  })

  // Add Galley stats
  Ingredient.of('#smallships:galleys').itemIds.forEach(galley => {
    event.addAdvanced(galley, (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] to see stats')
        ])
      } else {
        text.add(1, [
          Text.gray('Preferred biome: '), Text.gold('Warm')
        ])
        text.add(2, [
          Text.gray('Inventory slots: '), Text.red('54')
        ])
        text.add(3, [
          Text.gray('Cannon ports: '), Text.red('2')
        ])
        text.add(4, [
          Text.gray('Seats: '), Text.yellow('9')
        ])
        text.add(5, [
          Text.gray('Maneuverability: '), Text.green('High')
        ])
        text.add(6, [
          Text.gray('Top speed: '), Text.yellow('40 km/h')
        ])
        text.add(7, [
          Text.gray('Hull strength: '), Text.red('200')
        ])
      }
    })
  })

  // Add Drakkar stats
  Ingredient.of('#smallships:drakkars').itemIds.forEach(drakkar => {
    event.addAdvanced(drakkar, (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] to see stats')
        ])
      } else {
        text.add(1, Text.green('Drakkars can break ice').italic(true))
        text.add(2, [
          Text.gray('Preferred biome: '), Text.darkAqua('Cold')
        ])
        text.add(3, [
          Text.gray('Inventory slots: '), Text.red('54')
        ])
        text.add(4, [
          Text.gray('Shield mounts: '), Text.green('10')
        ])
        text.add(5, [
          Text.gray('Seats: '), Text.green('11')
        ])
        text.add(6, [
          Text.gray('Maneuverability: '), Text.green('High')
        ])
        text.add(7, [
          Text.gray('Top speed: '), Text.red('30 km/h')
        ])
        text.add(8, [
          Text.gray('Hull strength: '), Text.red('200')
        ])
      }
    })
  })
})