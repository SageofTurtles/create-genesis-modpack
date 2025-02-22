<recipetype:minecraft:crafting>.removeByName("design_decor:crafting/copper_headlight");

<recipetype:minecraft:crafting>.addShaped(
  "copper_floodlight_shaped_crafting",
  <item:design_decor:copper_floodlight> * 2,
  [
    [<item:minecraft:copper_ingot>,<item:minecraft:glowstone_dust>,<item:minecraft:copper_ingot>],
    [<item:minecraft:air>,<item:create:andesite_alloy>,<item:minecraft:air>]
  ]
);
