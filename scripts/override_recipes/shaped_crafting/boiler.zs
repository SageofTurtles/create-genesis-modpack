<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:boiler");

craftingTable.addShaped(
  "boiler_shaped_crafting",
  <item:immersive_aircraft:boiler>,
  [
    [<item:minecraft:air>,<item:create:steam_engine>,<item:minecraft:air>],
    [<item:minecraft:air>,<item:create:fluid_tank>,<item:minecraft:air>],
    [<item:minecraft:air>,<item:create:blaze_burner>,<item:minecraft:air>]
  ]);
