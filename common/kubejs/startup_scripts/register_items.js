Platform.mods.kubejs.name = 'Create: Genesis'

// Register new items
StartupEvents.registry('item', event => {
  event.create('rough_diamond').displayName('Rough Diamond')
  event.create('empty_ink_sac').displayName('Empty Ink Sac')
  event.create('inert_ender_eye').displayName('Inert Eye of Ender')
  event.create('unfinished_netherite_scrap').displayName('Unfinished Netherite Scrap')
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
  event.icon = 'kubejs:inert_ender_eye'
  event.remove('kubejs:unfinished_netherite_scrap')
})
