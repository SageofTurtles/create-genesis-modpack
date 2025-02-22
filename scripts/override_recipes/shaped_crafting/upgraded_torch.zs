<recipetype:minecraft:crafting>.removeByName("mcwlights:upgraded_torch");

<recipetype:minecraft:crafting>.addShaped(
  "upgraded_torch_shaped_crafting",
  <item:mcwlights:upgraded_torch> * 4,
  [
    [<item:minecraft:iron_nugget>, <tag:items:minecraft:coals>, <item:minecraft:iron_nugget>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]
  ]
);
