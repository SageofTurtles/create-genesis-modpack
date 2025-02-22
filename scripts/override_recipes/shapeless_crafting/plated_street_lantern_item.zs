<recipetype:minecraft:crafting>.removeByName("furniture:plated_street_lantern");

<recipetype:minecraft:crafting>.addShapeless(
  "plated_street_lantern_shapeless_crafting",
  <item:furniture:plated_street_lantern_item> * 2,
  [
    <item:minecraft:redstone_lamp>,
    <item:createaddition:gold_rod>
  ]
);
