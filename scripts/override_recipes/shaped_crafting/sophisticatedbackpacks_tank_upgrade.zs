<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:tank_upgrade");

craftingTable.addShaped(
  "sophisticatedbackpacks_tank_upgrade_shaped_crafting",
  <item:sophisticatedbackpacks:tank_upgrade>,
  [
    [<item:minecraft:air>, <item:create:cogwheel>, <item:minecraft:air>],
    [<item:create:fluid_tank>, <item:sophisticatedbackpacks:upgrade_base>, <item:create:fluid_tank>],
    [<item:minecraft:air>, <item:create:fluid_pipe>, <item:minecraft:air>]
  ]
);
