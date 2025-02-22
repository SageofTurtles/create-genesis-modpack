<recipetype:minecraft:crafting>.removeByName("decorative_blocks:cherry_support");

<recipetype:minecraft:crafting>.addShaped(
  "cherry_support_shaped_crafting",
  <item:decorative_blocks:cherry_support> * 3,
  [
    [<item:minecraft:cherry_planks>, <item:minecraft:cherry_planks>],
    [<item:minecraft:cherry_planks>, <item:minecraft:air>]
  ]
);
