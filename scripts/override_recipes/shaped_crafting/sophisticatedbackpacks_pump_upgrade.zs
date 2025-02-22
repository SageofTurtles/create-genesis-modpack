<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:pump_upgrade");

craftingTable.addShaped(
  "sophisticatedbackpacks_pump_upgrade_shaped_crafting",
  <item:sophisticatedbackpacks:pump_upgrade>,
  [
    [<item:minecraft:air>, <tag:items:create:valve_handles>, <item:minecraft:air>],
    [<item:create:fluid_pipe>, <item:sophisticatedbackpacks:upgrade_base>, <item:create:fluid_pipe>],
    [<item:minecraft:air>, <item:create:cogwheel>, <item:minecraft:air>]
  ]
);
