<recipetype:create:mechanical_crafting>.removeByName("design_decor:mechanical_crafting/capitalism_block");

<recipetype:minecraft:crafting>.addShaped(
  "capitalism_block_shaped_crafting",
  <item:design_decor:capitalism_block>,
  [
    [<item:create:brass_sheet>,<item:minecraft:gold_ingot>,<item:create:brass_sheet>],
    [<item:minecraft:gold_ingot>,<item:minecraft:gold_block>,<item:minecraft:gold_ingot>],
    [<item:create:brass_sheet>,<item:minecraft:gold_ingot>,<item:create:brass_sheet>]
  ]
);
