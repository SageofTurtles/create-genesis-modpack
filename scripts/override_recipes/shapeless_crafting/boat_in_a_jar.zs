<recipetype:minecraft:crafting>.removeByName("furniture:boat_in_a_jar");

<recipetype:minecraft:crafting>.addShapeless(
  "boat_in_a_jar_shapeless_crafting",
  <item:furniture:boat_in_a_jar>,
  [
    <tag:items:smallships:ships>,
    <item:supplementaries:jar>
  ]
);
