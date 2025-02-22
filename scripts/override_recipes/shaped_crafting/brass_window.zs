<recipetype:minecraft:crafting>.removeByName("createdeco:brass_window");

craftingTable.addShaped(
  "brass_window_shaped_crafting",
  <item:createdeco:brass_window> * 2,
  [
    [<item:minecraft:air>,<item:create:brass_nugget>,<item:minecraft:air>],
    [<item:create:brass_nugget>,<tag:items:createdeco:internal/colorless_glass>,<item:create:brass_nugget>]
  ]
);
