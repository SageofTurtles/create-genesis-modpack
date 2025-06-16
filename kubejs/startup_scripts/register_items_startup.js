Platform.mods.kubejs.name = 'Create: Genesis'

StartupEvents.registry('item', event => {
  event.create('kubejs:firing_mechanism').displayName('Firing Mechanism')
  event.create('kubejs:incomplete_firing_mechanism', 'create:sequenced_assembly').displayName('Incomplete Firing Mechanism')
  event.create('kubejs:bolt_action').displayName('Bolt Action')
  event.create('kubejs:firing_pin').displayName('Firing Pin')
  event.create('kubejs:gatling_gun_base').displayName('Gatling Gun Base')
  event.create('kubejs:incomplete_large_bullet').displayName('Incomplete Large Bullet')
  event.create('kubejs:incomplete_small_bullet').displayName('Incomplete Small Bullet')
  event.create('kubejs:incomplete_shotgun_shell').displayName('Incomplete Shotgun Shell')
  event.create('kubejs:lever_action').displayName('Lever Action')
  event.create('kubejs:trigger').displayName('Trigger')
  event.create('kubejs:rough_diamond').displayName('Rough Diamond')
})

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.displayName = 'Create: Genesis'
  event.icon = 'kubejs:rough_diamond'
})
