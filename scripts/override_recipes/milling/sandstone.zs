<recipetype:create:milling>.removeByName("create:milling/sandstone");

<recipetype:create:milling>.addRecipe(
  "sandstone_milling",
  [
    <item:minecraft:sand> * 4
  ],
  <tag:items:genesis:sandstone_blocks>,
  100
);
