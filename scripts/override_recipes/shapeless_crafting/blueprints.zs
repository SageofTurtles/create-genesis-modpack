<recipetype:minecraft:crafting>.removeByName("furniture:blueprints");

<recipetype:minecraft:crafting>.addShapeless(
  "blueprints_shapeless_crafting",
  <item:furniture:blueprints>,
  [
    <item:minecraft:crafting_table>,
    <item:create:empty_schematic>
  ]
);
