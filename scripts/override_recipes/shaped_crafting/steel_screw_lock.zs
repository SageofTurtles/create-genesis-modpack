<recipetype:minecraft:crafting>.removeByName("createbigcannons:steel_screw_lock");

<recipetype:minecraft:crafting>.addShaped(
  "steel_screw_lock_shaped_crafting",
  <item:createbigcannons:steel_screw_lock>,
  [
    [<item:minecraft:air>,<item:minecraft:air>,<item:minecraft:air>],
    [<item:minecraft:air>,<item:create:shaft>,<item:minecraft:air>],
    [<item:genesis_additions:steel_ingot>,<item:genesis_additions:steel_ingot>,<item:genesis_additions:steel_ingot>]
  ]
);