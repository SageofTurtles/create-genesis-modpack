let inertEye = 'kubejs:inert_ender_eye'
let finishedEye = 'minecraft:ender_eye'
let eyes = [
  'kubejs:inert_ender_eye',
  'minecraft:ender_eye'
]

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

JEIEvents.information(event => {
  event.addItem(eyes,
    [
      'Eyes of Ender can be produced by right-clicking on Reinforced Deepslate with an Inert Eye of Ender in your hand.',
      '\nUnfortunately, Reinforced Deepslate is only found in the ancient cities of the Deep Dark...'
    ]
  )
})
