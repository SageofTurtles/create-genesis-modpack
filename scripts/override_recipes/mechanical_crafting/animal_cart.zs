<recipetype:minecraft:crafting>.removeByName("astikorcarts:animal_cart");

<recipetype:create:mechanical_crafting>.addRecipe(
  "animal_cart_mechanical_crafting",
  <item:astikorcarts:animal_cart>,
  [
    [<tag:items:minecraft:planks>, <item:minecraft:air>, <item:minecraft:air>, <tag:items:minecraft:planks>, <item:minecraft:air>],
    [<item:create:andesite_alloy>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <item:create:andesite_alloy>, <item:minecraft:stick>],
    [<item:astikorcarts:wheel>, <item:minecraft:air>, <item:minecraft:air>, <item:astikorcarts:wheel>, <item:minecraft:air>]
  ]
);
