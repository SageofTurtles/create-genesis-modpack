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

  if (block.id == "create:copper_casing") {
    let copperConductor = block.createEntity("railways:conductor")
    copperConductor.setSyncedData("Variant", "copper_conductor")
    copperConductor.setPosition(block.x + 0.5, block.y, block.z + 0.5)
    copperConductor.spawn()
    block.set("minecraft:air")
    if (event.hand == "main_hand") {
      copperConductor.setHeadArmorItem(player.mainHandItem.id)
      if (!event.player.isCreative()) {
        player.mainHandItem.count--
      }
      player.swing('main_hand', true)
    } else if (event.hand == "off_hand") {
      copperConductor.setHeadArmorItem(player.offHandItem.id)
      if (!event.player.isCreative()) {
        player.offHandItem.count--
      }
      player.swing('off_hand', true)
    }
    event.cancel()
  }

  if (block.id == "create:brass_casing") {
    let brassConductor = block.createEntity("railways:conductor")
    brassConductor.setSyncedData("Variant", "brass_conductor")
    brassConductor.setPosition(block.x + 0.5, block.y, block.z + 0.5)
    brassConductor.spawn()
    block.set("minecraft:air")
    if (event.hand == "main_hand") {
      brassConductor.setHeadArmorItem(player.mainHandItem.id)
      if (!event.player.isCreative()) {
        player.mainHandItem.count--
      }
      player.swing('main_hand', true)
    } else if (event.hand == "off_hand") {
      brassConductor.setHeadArmorItem(player.offHandItem.id)
      if (!event.player.isCreative()) {
        player.offHandItem.count--
      }
      player.swing('off_hand', true)
    }
    event.cancel()
  }

  if (block.id == "create:railway_casing") {
    let railwayConductor = block.createEntity("railways:conductor")
    railwayConductor.setSyncedData("Variant", "railway_conductor")
    railwayConductor.setPosition(block.x + 0.5, block.y, block.z + 0.5)
    railwayConductor.spawn()
    block.set("minecraft:air")
    if (event.hand == "main_hand") {
      railwayConductor.setHeadArmorItem(player.mainHandItem.id)
      if (!event.player.isCreative()) {
        player.mainHandItem.count--
      }
      player.swing('main_hand', true)
    } else if (event.hand == "off_hand") {
      railwayConductor.setHeadArmorItem(player.offHandItem.id)
      if (!event.player.isCreative()) {
        player.offHandItem.count--
      }
      player.swing('off_hand', true)
    }
    event.cancel()
  }
})

LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("railways:conductor")
    .removeLoot("create:andesite_alloy")
})

EntityEvents.drops("railways:conductor", event => {
  if (event.entity.getSyncedData("Variant") == "copper_conductor") {
    event.addDrop(event.entity.headArmorItem)
    event.addDrop("create:copper_casing")
  } else if (event.entity.getSyncedData("Variant") == "brass_conductor") {
    event.addDrop(event.entity.headArmorItem)
    event.addDrop("create:brass_casing")
  } else if (event.entity.getSyncedData("Variant") == "railway_conductor") {
    event.addDrop(event.entity.headArmorItem)
    event.addDrop("create:railway_casing")
  } else {
    event.addDrop("create:andesite_casing")
  }
})