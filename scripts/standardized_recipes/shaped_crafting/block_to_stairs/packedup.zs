//  GRASS THATCH STAIRS

<recipetype:minecraft:crafting>.removeByName("packedup:grass_thatch_stairs");

<recipetype:minecraft:crafting>.addShaped(
  "grass_thatch_stairs_shaped_crafting",
  <item:packedup:grass_thatch_stairs> * 8,
  [
    [<item:packedup:grass_thatch>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:packedup:grass_thatch>, <item:packedup:grass_thatch>, <item:minecraft:air>],
    [<item:packedup:grass_thatch>, <item:packedup:grass_thatch>, <item:packedup:grass_thatch>]
  ]
);

