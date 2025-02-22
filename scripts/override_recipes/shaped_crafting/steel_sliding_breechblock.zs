<recipetype:minecraft:crafting>.removeByName("createbigcannons:steel_sliding_breechblock");

<recipetype:minecraft:crafting>.addShaped(
  "steel_sliding_breechblock_shaped_crafting",
  <item:createbigcannons:steel_sliding_breechblock>,
  [
    [<item:minecraft:air>,<item:genesis_additions:steel_ingot>,<item:minecraft:air>],
    [<item:create:cogwheel>,<item:genesis_additions:steel_ingot>,<item:create:cogwheel>],
    [<item:minecraft:air>,<item:genesis_additions:steel_ingot>,<item:minecraft:air>]
  ]
);