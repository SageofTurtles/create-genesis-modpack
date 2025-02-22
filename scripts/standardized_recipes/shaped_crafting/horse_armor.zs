//  LEATHER

<recipetype:minecraft:crafting>.removeByName("minecraft:leather_horse_armor");

<recipetype:minecraft:crafting>.addShaped(
  "leather_horse_armor_shaped_crafting",
  <item:minecraft:leather_horse_armor>,
  [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:leather>],
    [<item:minecraft:leather>, <item:minecraft:leather>, <item:minecraft:leather>],
    [<item:minecraft:leather>, <tag:items:minecraft:wool_carpets>, <item:minecraft:leather>]
  ]
);


//  IRON

<recipetype:minecraft:crafting>.addShaped(
  "iron_horse_armor_shaped_crafting",
  <item:minecraft:iron_horse_armor>,
  [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:leather>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <tag:items:minecraft:wool_carpets>, <item:minecraft:iron_ingot>]
  ]
);


//  GOLD

<recipetype:minecraft:crafting>.addShaped(
  "golden_horse_armor_shaped_crafting",
  <item:minecraft:golden_horse_armor>,
  [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:gold_ingot>],
    [<item:minecraft:gold_ingot>, <item:minecraft:leather>, <item:minecraft:gold_ingot>],
    [<item:minecraft:gold_ingot>, <tag:items:minecraft:wool_carpets>, <item:minecraft:gold_ingot>]
  ]
);


//  DIAMOND

<recipetype:minecraft:crafting>.addShaped(
  "diamond_horse_armor_shaped_crafting",
  <item:minecraft:diamond_horse_armor>,
  [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:leather>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <tag:items:minecraft:wool_carpets>, <item:minecraft:diamond>]
  ]
);


