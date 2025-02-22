<recipetype:minecraft:crafting>.removeByName("sophisticatedstorage:filter_upgrade");

craftingTable.addShaped(
  "sophisticatedstorage_filter_upgrade_shaped_crafting",
  <item:sophisticatedstorage:filter_upgrade>,
  [
    [<item:minecraft:redstone>, <item:create:filter>, <item:minecraft:redstone>],
    [<item:minecraft:string>, <item:sophisticatedstorage:upgrade_base>, <item:minecraft:string>],
    [<item:minecraft:redstone>, <item:minecraft:string>, <item:minecraft:redstone>]
  ]
);
