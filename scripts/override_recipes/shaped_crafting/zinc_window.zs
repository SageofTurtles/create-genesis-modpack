<recipetype:minecraft:crafting>.removeByName("createdeco:zinc_window");

craftingTable.addShaped(
  "zinc_window_shaped_crafting",
  <item:createdeco:zinc_window> * 2,
  [
    [<item:minecraft:air>,<item:create:zinc_nugget>,<item:minecraft:air>],
    [<item:create:zinc_nugget>,<tag:items:createdeco:internal/colorless_glass>,<item:create:zinc_nugget>]
  ]
);
