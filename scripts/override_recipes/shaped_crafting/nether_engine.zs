<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:nether_engine");

craftingTable.addShaped(
  "nether_engine_shaped_crafting",
  <item:immersive_aircraft:nether_engine>,
  [
    [<item:create:iron_sheet>,<item:minecraft:lava_bucket>,<item:create:iron_sheet>],
    [<item:create:sturdy_sheet>,<item:immersive_aircraft:boiler>,<item:create:sturdy_sheet>]
  ]);
