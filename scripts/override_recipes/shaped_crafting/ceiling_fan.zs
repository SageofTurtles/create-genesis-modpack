<recipetype:minecraft:crafting>.removeByName("design_decor:crafting/ceiling_fan");

<recipetype:minecraft:crafting>.addShaped(
  "ceiling_fan_shaped_crafting",
  <item:design_decor:ceiling_fan>,
  [
    [<item:minecraft:air>,<item:create:shaft>,<item:minecraft:air>],
    [<item:minecraft:air>,<item:create:andesite_casing>,<item:minecraft:air>],
    [<tag:items:minecraft:wooden_slabs>,<item:create:propeller>,<tag:items:minecraft:wooden_slabs>]
  ]
);
