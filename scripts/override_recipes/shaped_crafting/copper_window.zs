<recipetype:minecraft:crafting>.removeByName("createdeco:copper_window");

craftingTable.addShaped(
  "copper_window_shaped_crafting",
  <item:createdeco:copper_window> * 2,
  [
    [<item:minecraft:air>,<item:create:copper_nugget>,<item:minecraft:air>],
    [<item:create:copper_nugget>,<tag:items:createdeco:internal/colorless_glass>,<item:create:copper_nugget>]
  ]
);
