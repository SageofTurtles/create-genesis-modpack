<recipetype:minecraft:crafting>.removeByName("createdeco:industrial_iron_window");

craftingTable.addShaped(
  "industrial_iron_window_shaped_crafting",
  <item:createdeco:industrial_iron_window> * 2,
  [
    [<item:minecraft:air>,<item:createdeco:industrial_iron_nugget>,<item:minecraft:air>],
    [<item:createdeco:industrial_iron_nugget>,<tag:items:createdeco:internal/colorless_glass>,<item:createdeco:industrial_iron_nugget>]
  ]
);
