let inertEye = 'kubejs:inert_ender_eye'
let finishedEye = 'minecraft:ender_eye'

BlockEvents.rightClicked('minecraft:reinforced_deepslate', event => {
  const { player } = event
  if (event.item.id == inertEye) {
    event.item.count--
    if (event.hand == 'main_hand') {
      player.swing('main_hand', true)
    } else {
      player.swing('off_hand', true)
    }
    event.cancel()
  }
})
