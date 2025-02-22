<recipetype:minecraft:crafting>.removeByName("createdeco:blue_andesite_lamp");

<recipetype:minecraft:crafting>.addShaped(
  "blue_andesite_lamp_shaped_crafting",
  <item:createdeco:blue_andesite_lamp>,
  [
    [<item:minecraft:air>,<tag:items:forge:andesite_alloy_nuggets>,<item:minecraft:air>],
    [<item:minecraft:air>,<item:minecraft:soul_torch>,<item:minecraft:air>],
    [<item:minecraft:air>,<item:createdeco:andesite_sheet>,<item:minecraft:air>]
  ]
);
