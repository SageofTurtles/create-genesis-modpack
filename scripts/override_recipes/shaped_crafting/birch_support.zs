<recipetype:minecraft:crafting>.removeByName("decorative_blocks:birch_support");

<recipetype:minecraft:crafting>.addShaped(
  "birch_support_shaped_crafting",
  <item:decorative_blocks:birch_support> * 3,
  [
    [<item:minecraft:birch_planks>, <item:minecraft:birch_planks>],
    [<item:minecraft:birch_planks>, <item:minecraft:air>]
  ]
);
