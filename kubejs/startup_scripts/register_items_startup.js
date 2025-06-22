Platform.mods.kubejs.name = 'Create: Genesis'

// Register new items
StartupEvents.registry('item', event => {
  event.create('firing_mechanism').displayName('Firing Mechanism')
  event.create('incomplete_firing_mechanism', 'create:sequenced_assembly').displayName('Incomplete Firing Mechanism')
  event.create('bolt_action').displayName('Bolt Action')
  event.create('firing_pin').displayName('Firing Pin')
  event.create('gatling_gun_base').displayName('Gatling Gun Base')
  event.create('incomplete_machine_gun_round').displayName('Incomplete Machine Gun Round')
  event.create('incomplete_large_bullet').displayName('Incomplete Large Bullet')
  event.create('incomplete_small_bullet').displayName('Incomplete Small Bullet')
  event.create('incomplete_shotgun_shell').displayName('Incomplete Shotgun Shell')
  event.create('lever_action').displayName('Lever Action')
  event.create('trigger').displayName('Trigger')
  event.create('rough_diamond').displayName('Rough Diamond')
  event.create('worldedit_wand').displayName('WorldEdit Wand')
    .rarity('epic')
    .parentModel('minecraft:item/handheld')
})

// Register new Limesand block
StartupEvents.registry('block', event => {
  event.create('limesand', 'falling')
  .displayName('Limesand')
  .mapColor(3)
  .sandSoundType()
  .hardness(0.5)
  .resistance(0.5)
  .opaque(true)
  .fullBlock(true)
  .renderType('solid')
  .textureAll('kubejs:block/limesand.png')
  .tagBlock('minecraft:lush_ground_replaceable')
  .tagBlock('minecraft:azalea_root_replaceable')
  .tagBlock('minecraft:bamboo_plantable_on')
  .tagBlock('minecraft:dead_bush_may_place_on')
  .tagBlock('terralith:volcano_blocks')
  .tagBlock('farmersdelight:terrain')
  .tagBlock('minecraft:mineable/shovel')
  .tagBlock('minecraft:sculk_replaceable')
  .tagBlock('terralith:sandy_blocks')
  .tagItem('supplementaries:hourglass_sands')
  .tagBoth('forge:sand')
  .tagBoth('minecraft:sand')
  .tagBoth('minecraft:smelts_to_glass')
  .tagBoth('forge:sand/colorless')
})

// Modify KubeJS creative tab
StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.displayName = 'Create: Genesis'
  event.icon = 'kubejs:rough_diamond'
  event.remove('kubejs:incomplete_machine_gun_round')
  event.remove('kubejs:incomplete_large_bullet')
  event.remove('kubejs:incomplete_small_bullet')
  event.remove('kubejs:incomplete_shotgun_shell')
  event.remove('kubejs:incomplete_firing_mechanism')
})
