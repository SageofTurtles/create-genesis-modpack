<recipetype:minecraft:crafting>.removeByName("astikorcarts:plow");

<recipetype:create:mechanical_crafting>.addRecipe(
  "plow_mechanical_crafting",
  <item:astikorcarts:plow>,
  [
    [<tag:items:minecraft:planks>, <item:create:andesite_alloy>, <tag:items:minecraft:planks>, <item:create:andesite_alloy>, <item:minecraft:stick>],
    [<item:create:mechanical_plough>, <item:astikorcarts:wheel>, <item:minecraft:air>, <item:astikorcarts:wheel>, <item:minecraft:air>]
  ]
);
