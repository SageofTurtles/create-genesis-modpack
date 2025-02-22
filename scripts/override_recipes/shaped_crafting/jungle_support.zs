<recipetype:minecraft:crafting>.removeByName("decorative_blocks:jungle_support");

<recipetype:minecraft:crafting>.addShaped(
  "jungle_support_shaped_crafting",
  <item:decorative_blocks:jungle_support> * 3,
  [
    [<item:minecraft:jungle_planks>, <item:minecraft:jungle_planks>],
    [<item:minecraft:jungle_planks>, <item:minecraft:air>]
  ]
);
