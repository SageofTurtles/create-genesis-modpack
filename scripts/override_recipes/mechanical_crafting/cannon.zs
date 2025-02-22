<recipetype:minecraft:crafting>.removeByName("smallships:cannon");

<recipetype:create:mechanical_crafting>.addRecipe(
  "cannon_mechanical_crafting",
  <item:smallships:cannon>,
  [
    [<item:createbigcannons:quickfiring_mechanism>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:createbigcannons:cast_iron_quickfiring_breech>, <item:createbigcannons:cast_iron_cannon_chamber>, <item:createbigcannons:cast_iron_cannon_barrel>, <item:createbigcannons:cast_iron_cannon_barrel>],
    [<item:minecraft:air>, <item:createbigcannons:cannon_carriage>, <item:minecraft:air>, <item:minecraft:air>]
  ]
);
