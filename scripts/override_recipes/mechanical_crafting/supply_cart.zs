<recipetype:minecraft:crafting>.removeByName("astikorcarts:supply_cart");

<recipetype:create:mechanical_crafting>.addRecipe(
  "supply_cart_mechanical_crafting",
  <item:astikorcarts:supply_cart>,
  [
    [<tag:items:minecraft:planks>, <item:minecraft:chest>, <item:minecraft:chest>, <tag:items:minecraft:planks>, <item:minecraft:air>],
    [<item:create:andesite_alloy>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <item:create:andesite_alloy>, <item:minecraft:stick>],
    [<item:astikorcarts:wheel>, <item:minecraft:air>, <item:minecraft:air>, <item:astikorcarts:wheel>, <item:minecraft:air>]
  ]
);
