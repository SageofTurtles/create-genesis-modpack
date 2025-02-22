<recipetype:create:compacting>.addRecipe(
  "copper_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:minecraft:copper_ore>],
  [
    <item:minecraft:stone>,
    <item:minecraft:raw_copper_block> * 3
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 75
  ],
  100
);


<recipetype:create:compacting>.addRecipe(
  "deepslate_copper_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:minecraft:deepslate_copper_ore>],
  [
    <item:minecraft:deepslate>,
    <item:minecraft:raw_copper_block> * 3
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 75
  ],
  100
);

