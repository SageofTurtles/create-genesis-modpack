<recipetype:minecraft:crafting>.removeByName("mcwlights:rustic_torch");

<recipetype:minecraft:crafting>.addShaped(
  "rustic_torch_shaped_crafting",
  <item:mcwlights:rustic_torch> * 4,
  [
    [<tag:items:minecraft:coals>],
    [<item:minecraft:stick>],
    [<item:minecraft:iron_nugget>]
  ]
);
