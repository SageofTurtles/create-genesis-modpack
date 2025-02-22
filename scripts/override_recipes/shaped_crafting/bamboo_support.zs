<recipetype:minecraft:crafting>.removeByName("decorative_blocks:bamboo_support");

<recipetype:minecraft:crafting>.addShaped(
  "bamboo_support_shaped_crafting",
  <item:decorative_blocks:bamboo_support> * 3,
  [
    [<item:minecraft:bamboo_planks>, <item:minecraft:bamboo_planks>],
    [<item:minecraft:bamboo_planks>, <item:minecraft:air>]
  ]
);
