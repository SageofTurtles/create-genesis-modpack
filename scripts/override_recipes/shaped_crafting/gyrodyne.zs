<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:gyrodyne");

craftingTable.addShaped(
  "gyrodyne_shaped_crafting",
  <item:immersive_aircraft:gyrodyne>,
  [
    [<item:minecraft:air>,<item:immersive_aircraft:propeller>,<item:minecraft:air>],
    [<item:immersive_aircraft:sail>,<item:create:precision_mechanism>,<item:immersive_aircraft:sail>],
    [<item:immersive_aircraft:hull>,<tag:items:create:seats>,<item:immersive_aircraft:hull>]
  ]);
