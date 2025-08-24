const conductorCap = [
  'railways:white_conductor_cap',
  'railways:light_gray_conductor_cap',
  'railways:gray_conductor_cap',
  'railways:black_conductor_cap',
  'railways:brown_conductor_cap',
  'railways:red_conductor_cap',
  'railways:orange_conductor_cap',
  'railways:yellow_conductor_cap',
  'railways:lime_conductor_cap',
  'railways:green_conductor_cap',
  'railways:cyan_conductor_cap',
  'railways:light_blue_conductor_cap',
  'railways:blue_conductor_cap',
  'railways:purple_conductor_cap',
  'railways:magenta_conductor_cap',
  'railways:pink_conductor_cap'
]

ItemEvents.rightClicked(conductorCap, event => {
  const { player, level, target: { block } } = event
  if (block.id == "create:copper_casing" || block.id == "create:brass_casing" || block.id == "create:railway_casing") {
    if (event.hand == "main_hand" && !event.player.isCreative()) {
      if (!event.player.isCreative()) {
        player.mainHandItem.count--
      }
      player.swing('main_hand', true)
    } else if (event.hand == "off_hand" && !event.player.isCreative()) {
      if (!event.player.isCreative()) {
        player.offHandItem.count--
      }
      player.swing('off_hand', true)
    }
    event.cancel()
  }
})
