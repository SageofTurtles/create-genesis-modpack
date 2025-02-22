<recipetype:minecraft:crafting>.removeByName("furniture:street_lantern");

<recipetype:minecraft:crafting>.addShapeless(
  "street_lantern_shapeless_crafting",
  <item:furniture:street_lantern_item> * 2,
  [
    <item:minecraft:redstone_lamp>,
    <item:createaddition:iron_rod>
  ]
);
