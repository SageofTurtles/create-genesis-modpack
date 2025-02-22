<recipetype:minecraft:crafting>.removeByName("numismatics:crafting/banking_guide");

<recipetype:minecraft:crafting>.addShapeless(
  "banking_guide_shapeless_crafting",
  <item:numismatics:banking_guide>,
  [
    <item:create:sturdy_sheet>,
    <item:minecraft:paper>,
    <item:numismatics:sprocket>
  ]
);