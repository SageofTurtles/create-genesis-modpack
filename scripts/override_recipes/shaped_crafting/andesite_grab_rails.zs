<recipetype:minecraft:crafting>.removeByName("bellsandwhistles:grab_rails/andesite_grab_rails");

<recipetype:minecraft:crafting>.addShaped(
  "andesite_grab_rails_shaped_crafting",
  <item:bellsandwhistles:andesite_grab_rails> * 8,
  [
    [<tag:items:forge:andesite_alloy_nuggets>,<item:minecraft:air>,<tag:items:forge:andesite_alloy_nuggets>],
    [<item:create:andesite_alloy>,<item:minecraft:air>,<item:create:andesite_alloy>],
    [<tag:items:forge:andesite_alloy_nuggets>,<item:minecraft:air>,<tag:items:forge:andesite_alloy_nuggets>]
  ]
);