<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:quadrocopter");

<recipetype:minecraft:crafting>.addShaped(
  "quadrocopter_shaped_crafting",
  <item:immersive_aircraft:quadrocopter>,
  [
    [<item:create:propeller>, <item:create:andesite_casing>, <item:create:propeller>],
    [<item:minecraft:air>, <tag:items:minecraft:wool_carpets>, <item:minecraft:air>],
    [<item:create:propeller>, <item:immersive_aircraft:boiler>, <item:create:propeller>]
  ]
);
