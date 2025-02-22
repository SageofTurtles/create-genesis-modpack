<recipetype:minecraft:crafting>.removeByName("decorative_blocks:acacia_support");

<recipetype:minecraft:crafting>.addShaped(
  "acacia_support_shaped_crafting",
  <item:decorative_blocks:acacia_support> * 3,
  [
    [<item:minecraft:acacia_planks>, <item:minecraft:acacia_planks>],
    [<item:minecraft:acacia_planks>, <item:minecraft:air>]
  ]
);
