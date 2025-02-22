import crafttweaker.api.recipe.Brewing;

brewing.removeRecipeByReagent(<item:minecraft:wither_skeleton_skull>);

brewing.addRecipe(
  <item:minecraft:potion>.withTag({Potion: "apotheosis:wither"}),
  <tag:items:genesis_additions:wither_skeleton_bones>,
  <item:minecraft:potion>.withTag({Potion: "minecraft:awkward"})
);
