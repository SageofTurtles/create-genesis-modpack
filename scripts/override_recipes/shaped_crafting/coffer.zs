<recipetype:minecraft:crafting>.removeByName("furniture:coffer");

craftingTable.addShaped(
  "coffer_shaped_crafting",
  <item:furniture:coffer>,
  [
    [<item:minecraft:iron_nugget>,<tag:items:minecraft:wool>,<item:minecraft:iron_nugget>],
    [<tag:items:minecraft:wool>,<item:minecraft:chest>,<tag:items:minecraft:wool>],
    [<item:minecraft:iron_nugget>,<tag:items:minecraft:wool>,<item:minecraft:iron_nugget>]
  ]
);
