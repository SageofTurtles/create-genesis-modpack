<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:airship");

<recipetype:create:mechanical_crafting>.addRecipe(
  "aircraft_mechanical_crafting",
  <item:immersive_aircraft:airship>,
  [
    [<item:immersive_aircraft:sail>, <item:immersive_aircraft:sail>, <item:immersive_aircraft:sail>, <item:immersive_aircraft:sail>, <item:immersive_aircraft:sail>],
    [<item:minecraft:air>, <item:minecraft:string>, <item:minecraft:air>, <item:minecraft:string>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:immersive_aircraft:hull>, <tag:items:create:seats>, <item:immersive_aircraft:engine>, <item:create:propeller>],
    [<item:minecraft:air>, <item:immersive_aircraft:hull>, <item:immersive_aircraft:hull>, <item:immersive_aircraft:hull>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
  ]
);