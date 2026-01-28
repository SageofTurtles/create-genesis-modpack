StartupEvents.modifyCreativeTab('create:palettes', event => {
  event.addAfter('create:limestone', 'kubejs:limesand')
})

StartupEvents.modifyCreativeTab('createaddition:main', event => {
  event.addAfter('createaddition:redstone_relay', 'createaddition:cake_base')
  event.addAfter('createaddition:cake_base', 'createaddition:cake_base_baked')
})

StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
  event.addAfter('minecraft:diamond', 'kubejs:rough_diamond')
  event.addAfter('minecraft:ink_sac', 'kubejs:empty_ink_sac')
})

StartupEvents.modifyCreativeTab('minecraft:combat', event => {
  event.addAfter('minecraft:totem_of_undying', 'kubejs:inert_totem')
})

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.remove('kubejs:incomplete_pale_gold_amulet')
})