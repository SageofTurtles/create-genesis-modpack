<recipetype:create:mixing>.removeByName("createaddition:mixing/netherrack");
<recipetype:create:mixing>.removeByName("deepdrilling:mixing/sludge_netherrack");

<recipetype:create:mixing>.addRecipe(
  "netherrack_mixing",
  <constant:create:heat_condition:heated>,
  [<item:minecraft:netherrack>],
  [<tag:items:forge:cobblestone>],
  [<fluid:deepdrilling:sludge> * 100],
  100
);
