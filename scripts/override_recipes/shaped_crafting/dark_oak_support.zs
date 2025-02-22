<recipetype:minecraft:crafting>.removeByName("decorative_blocks:dark_oak_support");

<recipetype:minecraft:crafting>.addShaped(
  "dark_oak_support_shaped_crafting",
  <item:decorative_blocks:dark_oak_support> * 3,
  [
    [<item:minecraft:dark_oak_planks>, <item:minecraft:dark_oak_planks>],
    [<item:minecraft:dark_oak_planks>, <item:minecraft:air>]
  ]
);
