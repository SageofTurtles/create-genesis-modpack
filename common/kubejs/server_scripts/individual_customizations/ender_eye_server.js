ServerEvents.recipes(event => {
  // Add custom recipes
  event.remove({ id: 'minecraft:ender_eye' })
  event.shaped(
    'kubejs:inert_ender_eye',
    [
      ' C ',
      'OED',
      ' B '
    ],
    {
      O: 'create:powdered_obsidian',
      C: 'create_aquatic_ambitions:spiky_shell',
      E: 'minecraft:ender_pearl',
      D: 'createaddition:diamond_grit',
      B: 'minecraft:blaze_powder'
    }
  ).id('genesis:inert_ender_eye')

  // Replace Eye of Ender in default recipes
  event.replaceInput(
    { id: 'sophisticatedbackpacks:inception_upgrade' },
    'minecraft:ender_eye',
    'minecraft:echo_shard'
  )

  event.replaceInput(
    { id: 'railways:crafting/remote_lens' },
    'minecraft:ender_eye',
    'kubejs:inert_ender_eye'
  )

  event.replaceInput(
    { id: 'minecraft:end_crystal' },
    'minecraft:ender_eye',
    'kubejs:inert_ender_eye'
  )

  event.replaceInput(
    { id: 'minecraft:ender_chest' },
    'minecraft:ender_eye',
    'kubejs:inert_ender_eye'
  )
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