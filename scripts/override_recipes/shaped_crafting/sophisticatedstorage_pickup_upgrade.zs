<recipetype:minecraft:crafting>.removeByName("sophisticatedstorage:pickup_upgrade");

craftingTable.addShaped(
  "sophisticatedstorage_pickup_upgrade_shaped_crafting",
  <item:sophisticatedstorage:pickup_upgrade>,
  [
    [<item:minecraft:air>, <item:create:chute>, <item:minecraft:air>],
    [<item:minecraft:string>, <item:sophisticatedstorage:upgrade_base>, <item:minecraft:string>],
    [<item:minecraft:redstone>, <item:minecraft:redstone>, <item:minecraft:redstone>]
  ]
);
