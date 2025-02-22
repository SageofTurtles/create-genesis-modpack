<recipetype:create:crushing>.removeByName("create:crushing/nether_wart_block");

<recipetype:create:crushing>.addRecipe(
  "nether_wart_block_crushing",
  [
    <item:minecraft:nether_wart> * 3,
    <item:minecraft:nether_wart> % 25,
  ],
  <item:minecraft:nether_wart_block>,
  100
);
