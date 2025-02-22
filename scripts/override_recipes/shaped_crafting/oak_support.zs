<recipetype:minecraft:crafting>.removeByName("decorative_blocks:oak_support");

<recipetype:minecraft:crafting>.addShaped(
  "oak_support_shaped_crafting",
  <item:decorative_blocks:oak_support> * 3,
  [
    [<item:minecraft:oak_planks>, <item:minecraft:oak_planks>],
    [<item:minecraft:oak_planks>, <item:minecraft:air>]
  ]
);
