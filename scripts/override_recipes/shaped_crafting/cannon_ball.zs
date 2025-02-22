<recipetype:minecraft:crafting>.removeByName("smallships:cannon_ball");

<recipetype:minecraft:crafting>.addShaped(
  "cannon_ball_shaped_crafting",
  <item:smallships:cannon_ball>,
  [
    [<item:minecraft:air>, <item:createbigcannons:cast_iron_ingot>, <item:minecraft:air>],
    [<item:createbigcannons:cast_iron_ingot>, <item:minecraft:gunpowder>, <item:createbigcannons:cast_iron_ingot>],
    [<item:minecraft:air>, <item:createbigcannons:cast_iron_ingot>, <item:minecraft:air>]
  ]
);
