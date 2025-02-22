<recipetype:minecraft:crafting>.removeByName("furniture:steam_vent");

craftingTable.addShaped(
  "steam_vent_shaped_crafting",
  <item:furniture:steam_vent> * 2,
  [
    [<item:minecraft:air>,<item:create:iron_sheet>,<item:minecraft:air>],
    [<item:minecraft:air>,<item:create:iron_sheet>,<item:minecraft:air>],
    [<item:create:iron_sheet>,<item:create:iron_sheet>,<item:create:iron_sheet>]
  ]);
