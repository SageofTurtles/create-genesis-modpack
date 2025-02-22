<recipetype:minecraft:crafting>.removeByName("mcwlights:reinforced_torch");

<recipetype:minecraft:crafting>.addShaped(
  "reinforced_torch_shaped_crafting",
  <item:mcwlights:reinforced_torch> * 4,
  [
    [<tag:items:minecraft:coals>],
    [<item:createaddition:iron_rod>],
    [<item:minecraft:iron_nugget>]
  ]
);
