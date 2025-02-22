<recipetype:minecraft:crafting>.removeByName("furniture:copper_chimney");

craftingTable.addShaped(
  "copper_chimney_shaped_crafting",
  <item:furniture:copper_chimney> * 2,
  [
    [<item:create:copper_sheet>,<item:create:copper_sheet>,<item:create:copper_sheet>],
    [<item:minecraft:air>,<item:create:copper_sheet>,<item:minecraft:air>],
    [<item:minecraft:air>,<item:create:copper_sheet>,<item:minecraft:air>]
  ]);
