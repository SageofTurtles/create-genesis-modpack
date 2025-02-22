//  TUFF STAIRS

<recipetype:minecraft:crafting>.removeByName("copperandtuffbackport:tuff_stairs");

<recipetype:minecraft:crafting>.addShaped(
  "tuff_stairs_shaped_crafting",
  <item:copperandtuffbackport:tuff_stairs> * 8,
  [
    [<item:minecraft:tuff>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:tuff>, <item:minecraft:tuff>, <item:minecraft:air>],
    [<item:minecraft:tuff>, <item:minecraft:tuff>, <item:minecraft:tuff>]
  ]
);


//  POLISHED TUFF STAIRS

<recipetype:minecraft:crafting>.removeByName("copperandtuffbackport:polished_tuff_stairs");

<recipetype:minecraft:crafting>.addShaped(
  "polished_tuff_stairs_shaped_crafting",
  <item:copperandtuffbackport:polished_tuff_stairs> * 8,
  [
    [<item:copperandtuffbackport:polished_tuff>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:copperandtuffbackport:polished_tuff>, <item:copperandtuffbackport:polished_tuff>, <item:minecraft:air>],
    [<item:copperandtuffbackport:polished_tuff>, <item:copperandtuffbackport:polished_tuff>, <item:copperandtuffbackport:polished_tuff>]
  ]
);


//  TUFF BRICK STAIRS

<recipetype:minecraft:crafting>.removeByName("copperandtuffbackport:tuff_brick_stairs");

<recipetype:minecraft:crafting>.addShaped(
  "tuff_brick_stairs_shaped_crafting",
  <item:copperandtuffbackport:tuff_brick_stairs> * 8,
  [
    [<item:copperandtuffbackport:tuff_bricks>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:copperandtuffbackport:tuff_bricks>, <item:copperandtuffbackport:tuff_bricks>, <item:minecraft:air>],
    [<item:copperandtuffbackport:tuff_bricks>, <item:copperandtuffbackport:tuff_bricks>, <item:copperandtuffbackport:tuff_bricks>]
  ]
);

