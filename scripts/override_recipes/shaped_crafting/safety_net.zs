<recipetype:minecraft:crafting>.removeByName("farmersdelight:safety_net");

<recipetype:minecraft:crafting>.addShaped(
  "safety_net_shaped_crafting",
  <item:farmersdelight:safety_net>,
  [
    [<item:minecraft:air>, <tag:items:supplementaries:ropes>, <item:minecraft:air>],
    [<tag:items:supplementaries:ropes>, <item:minecraft:air>, <tag:items:supplementaries:ropes>],
    [<item:minecraft:air>, <tag:items:supplementaries:ropes>, <item:minecraft:air>]
  ]
);
