<recipetype:minecraft:crafting>.removeByName("createdeco:andesite_window");

craftingTable.addShaped(
  "andesite_window_shaped_crafting",
  <item:createdeco:andesite_window> * 3,
  [
    [<item:minecraft:air>,<item:create:andesite_alloy>,<item:minecraft:air>],
    [<item:create:andesite_alloy>,<tag:items:createdeco:internal/colorless_glass>,<item:create:andesite_alloy>]
  ]
);
