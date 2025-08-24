ServerEvents.recipes(event => {
  event.remove({ id: 'minecraft:ender_eye' })
  event.shaped(
    'kubejs:inert_ender_eye',
    [
      ' O ',
      'CED',
      ' B '
    ],
    {
      O: 'create:powdered_obsidian',
      C: 'create_aquatic_ambitions:calcium_rich_powder',
      E: 'minecraft:ender_pearl',
      D: 'createaddition:diamond_grit',
      B: 'minecraft:blaze_powder'
    }
  ).id('genesis:inert_ender_eye')
})

let inertEye = 'kubejs:inert_ender_eye'
let finishedEye = 'minecraft:ender_eye'

BlockEvents.rightClicked('minecraft:reinforced_deepslate', event => {
  const { player, block } = event
  if (event.item.id == inertEye) {
    event.item.count--
    player.give(finishedEye)
    event.server.runCommandSilent(`playsound minecraft:entity.lightning_bolt.thunder block @a ${block.x} ${block.y} ${block.z} 0.7 1`)
    if (event.hand == 'main_hand') {
      player.swing('main_hand', true)
    } else {
      player.swing('off_hand', true)
    }
    event.cancel()
  }
})