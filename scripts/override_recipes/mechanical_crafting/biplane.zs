<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:biplane");

<recipetype:create:mechanical_crafting>.addRecipe(
  "biplane_mechanical_crafting",
  <item:immersive_aircraft:biplane>,
  [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:immersive_aircraft:sail>, <item:minecraft:air>],
    [<item:immersive_aircraft:sail>, <item:minecraft:air>, <item:minecraft:air>, <item:immersive_aircraft:sail>, <item:minecraft:air>],
    [<item:immersive_aircraft:hull>, <item:immersive_aircraft:hull>, <tag:items:create:seats>, <item:immersive_aircraft:engine>, <item:immersive_aircraft:propeller>],
    [<item:immersive_aircraft:sail>, <item:minecraft:air>, <item:minecraft:air>, <item:immersive_aircraft:sail>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:immersive_aircraft:sail>, <item:minecraft:air>]
  ]
);