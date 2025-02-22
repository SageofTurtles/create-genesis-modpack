<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:filter_upgrade");

craftingTable.addShaped(
  "sophisticatedbackpacks_filter_upgrade_shaped_crafting",
  <item:sophisticatedbackpacks:filter_upgrade>,
  [
    [<item:minecraft:redstone>, <item:create:filter>, <item:minecraft:redstone>],
    [<item:minecraft:string>, <item:sophisticatedbackpacks:upgrade_base>, <item:minecraft:string>],
    [<item:minecraft:redstone>, <item:minecraft:string>, <item:minecraft:redstone>]
  ]
);
