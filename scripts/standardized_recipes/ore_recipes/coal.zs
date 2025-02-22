<recipetype:create:compacting>.addRecipe(
  "coal_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:minecraft:coal_ore>],
  [
    <item:minecraft:stone>,
    <item:minecraft:coal> * 5
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 5
  ],
  100
);


<recipetype:create:compacting>.addRecipe(
  "deepslate_coal_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:minecraft:deepslate_coal_ore>],
  [
    <item:minecraft:deepslate>,
    <item:minecraft:coal> * 5
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 5
  ],
  100
);

