<recipetype:minecraft:crafting>.removeByName("man_of_many_planes:scarlet_biplane");

<recipetype:create:mechanical_crafting>.addRecipe(
  "scarlet_biplane_mechanical_crafting",
  <item:man_of_many_planes:scarlet_biplane>,
  [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:immersive_aircraft:sail>, <item:minecraft:air>],
    [<item:immersive_aircraft:sail>, <item:minecraft:air>, <item:minecraft:air>, <item:immersive_aircraft:sail>, <item:minecraft:air>],
    [<item:immersive_aircraft:hull_reinforcement>, <item:immersive_aircraft:hull_reinforcement>, <tag:items:create:seats>, <item:man_of_many_planes:economy_plane>, <item:immersive_aircraft:propeller>],
    [<item:immersive_aircraft:sail>, <item:minecraft:air>, <item:minecraft:air>, <item:immersive_aircraft:sail>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:immersive_aircraft:sail>, <item:minecraft:air>]
  ]
);