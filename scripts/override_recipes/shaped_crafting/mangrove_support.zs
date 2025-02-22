<recipetype:minecraft:crafting>.removeByName("decorative_blocks:mangrove_support");

<recipetype:minecraft:crafting>.addShaped(
  "mangrove_support_shaped_crafting",
  <item:decorative_blocks:mangrove_support> * 3,
  [
    [<item:minecraft:mangrove_planks>, <item:minecraft:mangrove_planks>],
    [<item:minecraft:mangrove_planks>, <item:minecraft:air>]
  ]
);
