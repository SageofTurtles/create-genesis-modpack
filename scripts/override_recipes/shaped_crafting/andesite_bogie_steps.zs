<recipetype:minecraft:crafting>.removeByName("bellsandwhistles:bogie_steps/andesite_bogie_steps");

<recipetype:minecraft:crafting>.addShaped(
  "andesite_bogie_steps_shaped_crafting",
  <item:bellsandwhistles:andesite_bogie_steps> * 6,
  [
    [<tag:items:forge:andesite_alloy_nuggets>,<item:minecraft:air>,<tag:items:forge:andesite_alloy_nuggets>],
    [<item:create:andesite_alloy>,<item:minecraft:air>,<item:create:andesite_alloy>],
    [<tag:items:forge:andesite_alloy_nuggets>,<tag:items:forge:andesite_alloy_nuggets>,<tag:items:forge:andesite_alloy_nuggets>]
  ]
);