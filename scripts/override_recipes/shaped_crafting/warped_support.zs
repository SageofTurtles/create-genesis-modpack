<recipetype:minecraft:crafting>.removeByName("decorative_blocks:warped_support");

<recipetype:minecraft:crafting>.addShaped(
  "warped_support_shaped_crafting",
  <item:decorative_blocks:warped_support> * 3,
  [
    [<item:minecraft:warped_planks>, <item:minecraft:warped_planks>],
    [<item:minecraft:warped_planks>, <item:minecraft:air>]
  ]
);
