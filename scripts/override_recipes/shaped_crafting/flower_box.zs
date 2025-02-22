<recipetype:minecraft:crafting>.removeByName("supplementaries:flower_box");

<recipetype:minecraft:crafting>.addShaped(
  "flower_box_shaped_crafting",
  <item:supplementaries:flower_box> * 2,
  [
    [<tag:items:minecraft:planks>, <item:minecraft:dirt>, <tag:items:minecraft:planks>],
    [<item:minecraft:air>, <tag:items:minecraft:planks>, <item:minecraft:air>]
  ]
);
