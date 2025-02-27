<recipetype:minecraft:crafting>.removeByName("rechiseled:chisel");

<recipetype:minecraft:crafting>.addShaped(
  "chisel_shaped_crafting",
  <item:rechiseled:chisel>,
  [
    [<item:minecraft:air>, <item:createbigcannons:cast_iron_ingot>],
    [<item:minecraft:stick>, <item:minecraft:air>]
  ]
);
