<recipetype:minecraft:crafting>.removeByName("supplementaries:cage");

<recipetype:minecraft:crafting>.addShaped(
  "cage_shaped_crafting",
  <item:supplementaries:cage>,
  [
    [<item:vintageimprovements:nethersteel_sheet>, <item:vintageimprovements:nethersteel_sheet>, <item:vintageimprovements:nethersteel_sheet>],
    [<item:minecraft:iron_bars>, <item:minecraft:ender_chest>, <item:minecraft:iron_bars>],
    [<tag:items:minecraft:wooden_slabs>, <tag:items:minecraft:wooden_slabs>, <tag:items:minecraft:wooden_slabs>]
  ]
);
