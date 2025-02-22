<recipetype:minecraft:crafting>.removeByName("minecraft:netherite_ingot");

<recipetype:create:mixing>.addRecipe(
  "molten_netherite_from_scrap_mixing",
  <constant:create:heat_condition:superheated>,
  [<fluid:createmetalwork:molten_netherite> * 90],
  [<item:minecraft:netherite_scrap> * 2],
  [<fluid:createmetalwork:molten_gold> * 180],
  100
);
