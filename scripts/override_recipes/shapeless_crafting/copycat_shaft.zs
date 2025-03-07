<recipetype:minecraft:stonecutting>.removeByName("copycats:crafting/copycat_shaft");

<recipetype:minecraft:crafting>.addShapeless(
  "copycat_shaft_shapeless_crafting",
  <item:copycats:copycat_shaft> * 4,
  [
    <item:create:shaft>,
    <item:create:shaft>,
    <item:create:shaft>,
    <item:create:shaft>,
    <item:create:zinc_ingot>
  ]
);
