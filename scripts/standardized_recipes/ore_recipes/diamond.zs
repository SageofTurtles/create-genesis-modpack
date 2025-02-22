<recipetype:create:compacting>.addRecipe(
  "diamond_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:minecraft:diamond_ore>],
  [
    <item:minecraft:stone>,
    <item:minecraft:diamond> * 5
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 10
  ],
  100
);


<recipetype:create:compacting>.addRecipe(
  "deepslate_diamond_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:minecraft:deepslate_diamond_ore>],
  [
    <item:minecraft:deepslate>,
    <item:minecraft:diamond> * 5
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 10
  ],
  100
);

