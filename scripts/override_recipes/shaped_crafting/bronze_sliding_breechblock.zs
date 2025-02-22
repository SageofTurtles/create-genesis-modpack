<recipetype:minecraft:crafting>.removeByName("createbigcannons:bronze_sliding_breechblock");

<recipetype:minecraft:crafting>.addShaped(
  "bronze_sliding_breechblock_shaped_crafting",
  <item:createbigcannons:bronze_sliding_breechblock>,
  [
    [<item:minecraft:air>,<item:genesis_additions:bronze_ingot>,<item:minecraft:air>],
    [<item:create:cogwheel>,<item:genesis_additions:bronze_ingot>,<item:create:cogwheel>],
    [<item:minecraft:air>,<item:genesis_additions:bronze_ingot>,<item:minecraft:air>]
  ]
);