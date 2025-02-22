<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:pickup_upgrade");

craftingTable.addShaped(
  "sophisticatedbackpacks_pickup_upgrade_shaped_crafting",
  <item:sophisticatedbackpacks:pickup_upgrade>,
  [
    [<item:minecraft:air>, <item:create:chute>, <item:minecraft:air>],
    [<item:minecraft:string>, <item:sophisticatedbackpacks:upgrade_base>, <item:minecraft:string>],
    [<item:minecraft:redstone>, <item:minecraft:redstone>, <item:minecraft:redstone>]
  ]
);
