<recipetype:minecraft:crafting>.removeByName("mcwfences:mud_brick_pillar_wall");

<recipetype:minecraft:crafting>.addShaped(
  "mud_brick_pillar_wall_shaped_crafting",
  <item:mcwfences:mud_brick_pillar_wall> * 5,
  [
    [<item:minecraft:mud_bricks>, <item:minecraft:mud_bricks>, <item:minecraft:mud_bricks>],
    [<item:minecraft:packed_mud>, <item:minecraft:air>, <item:minecraft:packed_mud>]
  ]
);
