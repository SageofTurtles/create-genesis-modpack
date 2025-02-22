<recipetype:minecraft:crafting>.removeByName("createdeco:iron_window");

craftingTable.addShaped(
  "iron_window_shaped_crafting",
  <item:createdeco:iron_window> * 2,
  [
    [<item:minecraft:air>,<item:minecraft:iron_nugget>,<item:minecraft:air>],
    [<item:minecraft:iron_nugget>,<tag:items:createdeco:internal/colorless_glass>,<item:minecraft:iron_nugget>]
  ]
);
