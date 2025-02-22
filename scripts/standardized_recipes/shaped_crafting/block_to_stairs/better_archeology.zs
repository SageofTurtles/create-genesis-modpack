//  ROTTEN STAIRS

<recipetype:minecraft:crafting>.removeByName("betterarcheology:rotten_stairs");

<recipetype:minecraft:crafting>.addShaped(
  "rotten_stairs_shaped_crafting",
  <item:betterarcheology:rotten_stairs> * 8,
  [
    [<item:betterarcheology:rotten_planks>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:betterarcheology:rotten_planks>, <item:betterarcheology:rotten_planks>, <item:minecraft:air>],
    [<item:betterarcheology:rotten_planks>, <item:betterarcheology:rotten_planks>, <item:betterarcheology:rotten_planks>]
  ]
);


//  CRACKED MUD BRICK STAIRS

<recipetype:minecraft:crafting>.removeByName("betterarcheology:cracked_mud_brick_stairs");

<recipetype:minecraft:crafting>.addShaped(
  "cracked_mud_brick_stairs_shaped_crafting",
  <item:betterarcheology:cracked_mud_brick_stairs> * 8,
  [
    [<item:betterarcheology:cracked_mud_bricks>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:betterarcheology:cracked_mud_bricks>, <item:betterarcheology:cracked_mud_bricks>, <item:minecraft:air>],
    [<item:betterarcheology:cracked_mud_bricks>, <item:betterarcheology:cracked_mud_bricks>, <item:betterarcheology:cracked_mud_bricks>]
  ]
);

