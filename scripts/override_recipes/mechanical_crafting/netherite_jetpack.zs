<recipetype:create:mechanical_crafting>.removeByName("create_jetpack:netherite_jetpack");

<recipetype:create:mechanical_crafting>.addRecipe(
  "netherite_jetpack_mechanical_crafting",
  <item:create_jetpack:netherite_jetpack>,
  [
    [<item:minecraft:air>, <item:create:brass_sheet>, <item:create:shaft>, <item:create:brass_sheet>, <item:minecraft:air>],
    [<item:create:brass_sheet>, <item:create:precision_mechanism>, <item:create:netherite_backtank>, <item:create:precision_mechanism>, <item:create:brass_sheet>],
    [<item:create:brass_sheet>, <item:create:propeller>, <item:genesis_additions:steel_armor_chestplate>, <item:create:propeller>, <item:create:brass_sheet>],
    [<item:minecraft:air>, <item:create:chute>, <item:minecraft:air>, <item:create:chute>, <item:minecraft:air>]
  ]
);