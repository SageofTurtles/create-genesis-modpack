<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:enhanced_propeller");

craftingTable.addShaped(
  "enhanced_propeller_shaped_crafting",
  <item:immersive_aircraft:enhanced_propeller>,
  [
    [<item:minecraft:air>,<item:create:brass_sheet>,<item:minecraft:air>],
    [<item:create:brass_sheet>,<item:create:propeller>,<item:create:brass_sheet>],
    [<item:minecraft:air>,<item:create:brass_sheet>,<item:minecraft:air>]
  ]);
