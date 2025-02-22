//  WAXED COPPER SHINGLE STAIRS

<recipetype:minecraft:crafting>.addShaped(
  "waxed_copper_shingle_stairs_shaped_crafting",
  <item:create:waxed_copper_shingle_stairs> * 8,
  [
    [<item:create:waxed_copper_shingles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:waxed_copper_shingles>, <item:create:waxed_copper_shingles>, <item:minecraft:air>],
    [<item:create:waxed_copper_shingles>, <item:create:waxed_copper_shingles>, <item:create:waxed_copper_shingles>]
  ]
);


//  WAXED EXPOSED COPPER SHINGLE STAIRS

<recipetype:minecraft:crafting>.addShaped(
  "waxed_exposed_copper_shingle_stairs_shaped_crafting",
  <item:create:waxed_exposed_copper_shingle_stairs> * 8,
  [
    [<item:create:waxed_exposed_copper_shingles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:waxed_exposed_copper_shingles>, <item:create:waxed_exposed_copper_shingles>, <item:minecraft:air>],
    [<item:create:waxed_exposed_copper_shingles>, <item:create:waxed_exposed_copper_shingles>, <item:create:waxed_exposed_copper_shingles>]
  ]
);


//  WAXED WEATHERED COPPER SHINGLE STAIRS

<recipetype:minecraft:crafting>.addShaped(
  "waxed_weathered_copper_shingle_stairs_shaped_crafting",
  <item:create:waxed_weathered_copper_shingle_stairs> * 8,
  [
    [<item:create:waxed_weathered_copper_shingles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:waxed_weathered_copper_shingles>, <item:create:waxed_weathered_copper_shingles>, <item:minecraft:air>],
    [<item:create:waxed_weathered_copper_shingles>, <item:create:waxed_weathered_copper_shingles>, <item:create:waxed_weathered_copper_shingles>]
  ]
);


//  WAXED OXIDIZED COPPER SHINGLE STAIRS

<recipetype:minecraft:crafting>.addShaped(
  "waxed_oxidized_copper_shingle_stairs_shaped_crafting",
  <item:create:waxed_oxidized_copper_shingle_stairs> * 8,
  [
    [<item:create:waxed_oxidized_copper_shingles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:waxed_oxidized_copper_shingles>, <item:create:waxed_oxidized_copper_shingles>, <item:minecraft:air>],
    [<item:create:waxed_oxidized_copper_shingles>, <item:create:waxed_oxidized_copper_shingles>, <item:create:waxed_oxidized_copper_shingles>]
  ]
);


//  WAXED COPPER TILE STAIRS

<recipetype:minecraft:crafting>.addShaped(
  "waxed_copper_tile_stairs_shaped_crafting",
  <item:create:waxed_copper_tile_stairs> * 8,
  [
    [<item:create:waxed_copper_tiles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:waxed_copper_tiles>, <item:create:waxed_copper_tiles>, <item:minecraft:air>],
    [<item:create:waxed_copper_tiles>, <item:create:waxed_copper_tiles>, <item:create:waxed_copper_tiles>]
  ]
);


//  WAXED EXPOSED COPPER TILE STAIRS

<recipetype:minecraft:crafting>.addShaped(
  "waxed_exposed_copper_tile_stairs_shaped_crafting",
  <item:create:waxed_exposed_copper_tile_stairs> * 8,
  [
    [<item:create:waxed_exposed_copper_tiles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:waxed_exposed_copper_tiles>, <item:create:waxed_exposed_copper_tiles>, <item:minecraft:air>],
    [<item:create:waxed_exposed_copper_tiles>, <item:create:waxed_exposed_copper_tiles>, <item:create:waxed_exposed_copper_tiles>]
  ]
);


//  WAXED WEATHERED COPPER TILE STAIRS

<recipetype:minecraft:crafting>.addShaped(
  "waxed_weathered_copper_tile_stairs_shaped_crafting",
  <item:create:waxed_weathered_copper_tile_stairs> * 8,
  [
    [<item:create:waxed_weathered_copper_tiles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:waxed_weathered_copper_tiles>, <item:create:waxed_weathered_copper_tiles>, <item:minecraft:air>],
    [<item:create:waxed_weathered_copper_tiles>, <item:create:waxed_weathered_copper_tiles>, <item:create:waxed_weathered_copper_tiles>]
  ]
);


//  WAXED OXIDIZED COPPER TILE STAIRS

<recipetype:minecraft:crafting>.addShaped(
  "waxed_oxidized_copper_tile_stairs_shaped_crafting",
  <item:create:waxed_oxidized_copper_tile_stairs> * 8,
  [
    [<item:create:waxed_oxidized_copper_tiles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:waxed_oxidized_copper_tiles>, <item:create:waxed_oxidized_copper_tiles>, <item:minecraft:air>],
    [<item:create:waxed_oxidized_copper_tiles>, <item:create:waxed_oxidized_copper_tiles>, <item:create:waxed_oxidized_copper_tiles>]
  ]
);


//  COPPER SHINGLE STAIRS

<recipetype:minecraft:crafting>.removeByName("create:copper_shingle_stairs");

<recipetype:minecraft:crafting>.addShaped( 
  "copper_shingle_stairs_shaped_crafting", 
  <item:create:copper_shingle_stairs> * 8,
  [
    [<item:create:copper_shingles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:copper_shingles>, <item:create:copper_shingles>, <item:minecraft:air>],
    [<item:create:copper_shingles>, <item:create:copper_shingles>, <item:create:copper_shingles>]
  ]
);


//  EXPOSED COPPER SHINGLE STAIRS

<recipetype:minecraft:crafting>.removeByName("create:exposed_copper_shingle_stairs");

<recipetype:minecraft:crafting>.addShaped( 
  "exposed_copper_shingle_stairs_shaped_crafting", 
  <item:create:exposed_copper_shingle_stairs> * 8,
  [
    [<item:create:exposed_copper_shingles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:exposed_copper_shingles>, <item:create:exposed_copper_shingles>, <item:minecraft:air>],
    [<item:create:exposed_copper_shingles>, <item:create:exposed_copper_shingles>, <item:create:exposed_copper_shingles>]
  ]
);


//  WEATHERED COPPER SHINGLE STAIRS

<recipetype:minecraft:crafting>.removeByName("create:weathered_copper_shingle_stairs");

<recipetype:minecraft:crafting>.addShaped( 
  "weathered_copper_shingle_stairs_shaped_crafting", 
  <item:create:weathered_copper_shingle_stairs> * 8,
  [
    [<item:create:weathered_copper_shingles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:weathered_copper_shingles>, <item:create:weathered_copper_shingles>, <item:minecraft:air>],
    [<item:create:weathered_copper_shingles>, <item:create:weathered_copper_shingles>, <item:create:weathered_copper_shingles>]
  ]
);


//  OXIDIZED COPPER SHINGLE STAIRS

<recipetype:minecraft:crafting>.removeByName("create:oxidized_copper_shingle_stairs");

<recipetype:minecraft:crafting>.addShaped( 
  "oxidized_copper_shingle_stairs_shaped_crafting", 
  <item:create:oxidized_copper_shingle_stairs> * 8,
  [
    [<item:create:oxidized_copper_shingles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:oxidized_copper_shingles>, <item:create:oxidized_copper_shingles>, <item:minecraft:air>],
    [<item:create:oxidized_copper_shingles>, <item:create:oxidized_copper_shingles>, <item:create:oxidized_copper_shingles>]
  ]
);


//  COPPER TILE STAIRS

<recipetype:minecraft:crafting>.removeByName("create:copper_tile_stairs");

<recipetype:minecraft:crafting>.addShaped( 
  "copper_tile_stairs_shaped_crafting", 
  <item:create:copper_tile_stairs> * 8,
  [
    [<item:create:copper_tiles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:copper_tiles>, <item:create:copper_tiles>, <item:minecraft:air>],
    [<item:create:copper_tiles>, <item:create:copper_tiles>, <item:create:copper_tiles>]
  ]
);


//  EXPOSED COPPER TILE STAIRS

<recipetype:minecraft:crafting>.removeByName("create:exposed_copper_tile_stairs");

<recipetype:minecraft:crafting>.addShaped( 
  "exposed_copper_tile_stairs_shaped_crafting", 
  <item:create:exposed_copper_tile_stairs> * 8,
  [
    [<item:create:exposed_copper_tiles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:exposed_copper_tiles>, <item:create:exposed_copper_tiles>, <item:minecraft:air>],
    [<item:create:exposed_copper_tiles>, <item:create:exposed_copper_tiles>, <item:create:exposed_copper_tiles>]
  ]
);


//  WEATHERED COPPER TILE STAIRS

<recipetype:minecraft:crafting>.removeByName("create:weathered_copper_tile_stairs");

<recipetype:minecraft:crafting>.addShaped( 
  "weathered_copper_tile_stairs_shaped_crafting", 
  <item:create:weathered_copper_tile_stairs> * 8,
  [
    [<item:create:weathered_copper_tiles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:weathered_copper_tiles>, <item:create:weathered_copper_tiles>, <item:minecraft:air>],
    [<item:create:weathered_copper_tiles>, <item:create:weathered_copper_tiles>, <item:create:weathered_copper_tiles>]
  ]
);


//  OXIDIZED COPPER TILE STAIRS

<recipetype:minecraft:crafting>.removeByName("create:oxidized_copper_tile_stairs");

<recipetype:minecraft:crafting>.addShaped( 
  "oxidized_copper_tile_stairs_shaped_crafting", 
  <item:create:oxidized_copper_tile_stairs> * 8,
  [
    [<item:create:oxidized_copper_tiles>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:oxidized_copper_tiles>, <item:create:oxidized_copper_tiles>, <item:minecraft:air>],
    [<item:create:oxidized_copper_tiles>, <item:create:oxidized_copper_tiles>, <item:create:oxidized_copper_tiles>]
  ]
);

