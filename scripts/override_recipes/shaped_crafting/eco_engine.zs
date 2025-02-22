<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:eco_engine");

craftingTable.addShaped(
  "eco_engine_shaped_crafting",
  <item:immersive_aircraft:eco_engine>,
  [
    [<item:create:iron_sheet>,<item:minecraft:water_bucket>,<item:create:iron_sheet>],
    [<item:create:copper_sheet>,<item:immersive_aircraft:boiler>,<item:create:copper_sheet>]
  ]);
