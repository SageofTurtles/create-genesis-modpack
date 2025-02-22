<recipetype:minecraft:crafting>.removeByName("mcwfences:modern_mud_brick_wall");

<recipetype:minecraft:crafting>.addShaped(
  "modern_mud_brick_wall_shaped_crafting",
  <item:mcwfences:modern_mud_brick_wall> * 6,
  [
    [<item:minecraft:mud_bricks>, <item:minecraft:packed_mud>, <item:minecraft:mud_bricks>],
    [<item:minecraft:mud_bricks>, <item:minecraft:mud_bricks>, <item:minecraft:mud_bricks>]
  ]
);
