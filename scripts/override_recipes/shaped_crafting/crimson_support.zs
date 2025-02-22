<recipetype:minecraft:crafting>.removeByName("decorative_blocks:crimson_support");

<recipetype:minecraft:crafting>.addShaped(
  "crimson_support_shaped_crafting",
  <item:decorative_blocks:crimson_support> * 3,
  [
    [<item:minecraft:crimson_planks>, <item:minecraft:crimson_planks>],
    [<item:minecraft:crimson_planks>, <item:minecraft:air>]
  ]
);
