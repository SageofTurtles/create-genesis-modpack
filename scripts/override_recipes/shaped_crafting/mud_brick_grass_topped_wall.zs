<recipetype:minecraft:crafting>.removeByName("mcwfences:mud_brick_grass_topped_wall");

<recipetype:minecraft:crafting>.addShaped(
  "mud_brick_grass_topped_wall_shaped_crafting",
  <item:mcwfences:mud_brick_grass_topped_wall> * 6,
  [
    [<item:minecraft:mud_bricks>, <item:minecraft:dirt>, <item:minecraft:mud_bricks>],
    [<item:minecraft:packed_mud>, <item:minecraft:packed_mud>, <item:minecraft:packed_mud>]
  ]
);
