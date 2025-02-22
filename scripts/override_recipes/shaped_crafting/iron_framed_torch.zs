<recipetype:minecraft:crafting>.removeByName("mcwlights:iron_framed_torch");

<recipetype:minecraft:crafting>.addShaped(
  "iron_framed_torch_shaped_crafting",
  <item:mcwlights:iron_framed_torch> * 4,
  [
    [<item:minecraft:iron_nugget>, <tag:items:minecraft:coals>, <item:minecraft:iron_nugget>],
    [<item:minecraft:air>, <item:createaddition:iron_rod>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:iron_nugget>, <item:minecraft:air>]
  ]
);
