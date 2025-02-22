<recipetype:minecraft:crafting>.removeByName("decorative_blocks:rocky_dirt");

<recipetype:minecraft:crafting>.addShaped(
  "rocky_dirt_shaped_crafting",
  <item:decorative_blocks:rocky_dirt> * 4,
  [
    [<item:minecraft:dirt>,<item:minecraft:stone>],
    [<item:minecraft:stone>,<item:minecraft:dirt>]
  ]
);