<recipetype:create:filling>.removeByName("create:filling/grass_block");

<recipetype:create:filling>.addRecipe(
  "grass_block_filling",
  <item:minecraft:grass_block>,
  <item:minecraft:dirt>,
  <fluid:minecraft:water> * 100,
  100
);
