<recipetype:create:item_application>.removeByName("design_decor:item_application/industrial_gear");

<recipetype:create:item_application>.addRecipe(
  "industrial_gear_item_application",
  [
    <item:design_decor:industrial_gear>
  ],
  <item:create:cogwheel>,
  <item:createdeco:industrial_iron_ingot>,
  false
);
