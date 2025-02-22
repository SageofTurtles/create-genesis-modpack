<recipetype:create:compacting>.addRecipe(
  "zinc_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:create:zinc_ore>],
  [
    <item:minecraft:stone>,
    <item:create:raw_zinc> * 5
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 5
  ],
  100
);


<recipetype:create:compacting>.addRecipe(
  "deepslate_zinc_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:create:deepslate_zinc_ore>],
  [
    <item:minecraft:deepslate>,
    <item:create:raw_zinc> * 5
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 5
  ],
  100
);

