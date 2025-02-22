<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:engine");

craftingTable.addShaped(
  "engine_shaped_crafting",
  <item:immersive_aircraft:engine>,
  [
    [<item:create:brass_sheet>,<item:create:precision_mechanism>,<item:create:brass_sheet>],
    [<item:create:sturdy_sheet>,<item:immersive_aircraft:boiler>,<item:create:sturdy_sheet>]
  ]);
