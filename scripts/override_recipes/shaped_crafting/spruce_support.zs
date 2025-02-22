<recipetype:minecraft:crafting>.removeByName("decorative_blocks:spruce_support");

<recipetype:minecraft:crafting>.addShaped(
  "spruce_support_shaped_crafting",
  <item:decorative_blocks:spruce_support> * 3,
  [
    [<item:minecraft:spruce_planks>, <item:minecraft:spruce_planks>],
    [<item:minecraft:spruce_planks>, <item:minecraft:air>]
  ]
);
