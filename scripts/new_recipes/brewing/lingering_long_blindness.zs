import crafttweaker.api.recipe.Brewing;

brewing.addRecipe(
  <item:minecraft:lingering_potion>.withTag({Potion: "genesis_additions:long_blindness"}),
  <item:minecraft:redstone>,
  <item:minecraft:lingering_potion>.withTag({Potion: "genesis_additions:blindness"})
);
