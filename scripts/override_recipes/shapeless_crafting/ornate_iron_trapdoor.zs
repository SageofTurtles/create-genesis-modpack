<recipetype:minecraft:crafting>.removeByName("bellsandwhistles:ornate_iron_window");

<recipetype:minecraft:crafting>.addShapeless(
  "ornate_iron_trapdoor_shapeless_crafting",
  <item:bellsandwhistles:ornate_iron_trapdoor>,
  [
    <tag:items:minecraft:wooden_trapdoors>,
    <item:create:ornate_iron_window>
  ]
);
