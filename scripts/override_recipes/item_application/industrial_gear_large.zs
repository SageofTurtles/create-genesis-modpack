<recipetype:create:item_application>.removeByName("design_decor:item_application/industrial_gear_large");

<recipetype:create:item_application>.addRecipe(
  "industrial_gear_large_item_application",
  [
    <item:design_decor:industrial_gear_large>
  ],
  <item:create:large_cogwheel>,
  <item:createdeco:industrial_iron_ingot>,
  false
);
