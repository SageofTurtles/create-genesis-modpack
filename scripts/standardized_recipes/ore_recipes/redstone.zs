<recipetype:create:compacting>.addRecipe(
  "redstone_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:minecraft:redstone_ore>],
  [
    <item:minecraft:stone>,
    <item:minecraft:redstone_block>
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 5
  ],
  100
);


<recipetype:create:compacting>.addRecipe(
  "deepslate_redstone_ore_compacting",
  <constant:create:heat_condition:none>,
  [<item:minecraft:deepslate_redstone_ore>],
  [
    <item:minecraft:deepslate>,
    <item:minecraft:redstone_block>
  ],
  [
    <fluid:minecraft:lava> * 250,
    <fluid:create_enchantment_industry:experience> * 5
  ],
  100
);

