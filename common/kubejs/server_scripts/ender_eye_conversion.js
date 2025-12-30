let inertEye = 'kubejs:inert_ender_eye'
let finishedEye = 'minecraft:ender_eye'

BlockEvents.rightClicked('minecraft:reinforced_deepslate', event => {
  const { player, block } = event
  if (event.item.id != inertEye) return
  let quantity = event.item.count
  event.server.runCommandSilent(`playsound minecraft:entity.lightning_bolt.thunder block @a ${block.x} ${block.y} ${block.z} 0.7 1`)
  if (event.hand == 'main_hand') {
    player.swing('main_hand', true)
    player.setHeldItem("main_hand", Item.of(finishedEye, quantity))
  } else {
    player.swing('off_hand', true)
    player.setHeldItem("off_hand", Item.of(finishedEye, quantity))
  }
  event.cancel()
})