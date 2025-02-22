<recipetype:minecraft:crafting>.removeByName("create:ornate_iron_window");

craftingTable.addShaped(
  "ornate_iron_window_shaped_crafting",
  <item:create:ornate_iron_window> * 3,
  [
    [<item:minecraft:air>,<item:create:iron_sheet>,<item:minecraft:air>],
    [<item:create:iron_sheet>,<tag:items:createdeco:internal/colorless_glass>,<item:create:iron_sheet>]
  ]
);
