<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:propeller");

craftingTable.addShaped(
  "propeller_shaped_crafting",
  <item:immersive_aircraft:propeller>,
  [
    [<item:minecraft:air>,<item:create:iron_sheet>,<item:minecraft:air>],
    [<item:create:iron_sheet>,<item:create:propeller>,<item:create:iron_sheet>],
    [<item:minecraft:air>,<item:create:iron_sheet>,<item:minecraft:air>]
  ]);
