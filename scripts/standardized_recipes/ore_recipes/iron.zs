<recipetype:create:compacting>.addRecipe(
  "iron_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:minecraft:iron_ore>],
  [
    <item:minecraft:stone>,
    <item:minecraft:raw_iron> * 5
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 5
  ],
  100
);


<recipetype:create:compacting>.addRecipe(
  "deepslate_iron_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:minecraft:deepslate_iron_ore>],
  [
    <item:minecraft:deepslate>,
    <item:minecraft:raw_iron> * 5
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 5
  ],
  100
);

