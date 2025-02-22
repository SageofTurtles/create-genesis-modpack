<recipetype:minecraft:crafting>.removeByName("man_of_many_planes:economy_plane");

<recipetype:create:mechanical_crafting>.addRecipe(
  "economy_plane_mechanical_crafting",
  <item:man_of_many_planes:economy_plane>,
  [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:immersive_aircraft:sail>, <item:minecraft:air>],
    [<item:immersive_aircraft:sail>, <item:minecraft:air>, <item:create:fluid_tank>, <item:immersive_aircraft:sail>, <item:immersive_aircraft:propeller>],
    [<item:immersive_aircraft:hull>, <item:immersive_aircraft:hull>, <tag:items:create:seats>, <item:immersive_aircraft:engine>, <item:immersive_aircraft:industrial_gears>],
    [<item:immersive_aircraft:sail>, <item:minecraft:air>, <item:create:fluid_tank>, <item:immersive_aircraft:sail>, <item:immersive_aircraft:propeller>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:immersive_aircraft:sail>, <item:minecraft:air>]
  ]
);