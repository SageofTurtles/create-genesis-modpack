<recipetype:create:mixing>.removeByName("create:mixing/brass_ingot");

<recipetype:create:mixing>.addRecipe(
  "molten_brass_from_ingots_mixing",
  <constant:create:heat_condition:heated>,
  [<fluid:createmetalwork:molten_brass> * 180],
  [
    <item:minecraft:copper_ingot>,
    <item:create:zinc_ingot>
  ],
  [],
  100
);