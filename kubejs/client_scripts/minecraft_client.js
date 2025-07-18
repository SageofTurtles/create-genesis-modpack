ItemEvents.tooltip(event => {
  // Echo Shard tooltip
  event.addAdvanced('minecraft:echo_shard', (item, advanced, text) => {
      text.add(1, [
        Text.red('Only obtainable by killing a Warden')
      ])
    })

  // Netherite Upgrade Smithing Template tooltip
  event.addAdvanced('minecraft:netherite_upgrade_smithing_template', (item, advanced, text) => {
      text.add(2, [
        Text.red('Only obtainable by trading with a master Toolsmith villager')
      ])
    })
  })