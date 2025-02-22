<recipetype:minecraft:crafting>.removeByName("mcwlights:framed_torch");

<recipetype:minecraft:crafting>.addShaped(
  "framed_torch_shaped_crafting",
  <item:mcwlights:framed_torch> * 4,
  [
    [<item:minecraft:iron_nugget>, <tag:items:minecraft:coals>, <item:minecraft:iron_nugget>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:iron_nugget>, <item:minecraft:air>]
  ]
);
