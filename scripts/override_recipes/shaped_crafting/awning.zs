<recipetype:minecraft:crafting>.removeByName("supplementaries:awnings/awning");

<recipetype:minecraft:crafting>.addShaped(
  "awning_shaped_crafting",
  <item:supplementaries:awning> * 2,
  [
    [<item:farmersdelight:canvas>, <item:farmersdelight:canvas>, <item:farmersdelight:canvas>],
    [<tag:items:forge:fences>, <item:minecraft:air>, <tag:items:forge:fences>]
  ]
);

