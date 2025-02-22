<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:telescope");

<recipetype:create:deploying>.addRecipe(
  "telescope_deploying",
  <item:minecraft:spyglass>,
  <item:create:copper_sheet>,
  [
    <item:immersive_aircraft:telescope>
  ],
  false
);