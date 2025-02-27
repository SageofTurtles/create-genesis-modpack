<recipetype:create:mixing>.addRecipe(
  "molten_netherite_from_synthetic_netherite_scrap_mixing",
  <constant:create:heat_condition:superheated>,
  [<fluid:createmetalwork:molten_netherite> * 90],
  [
    <item:genesis_additions:synthetic_netherite_scrap> * 2,
    <item:minecraft:ghast_tear>
  ],
  [
    <fluid:createmetalwork:molten_gold> * 180,
    <fluid:create:potion>.withTag({Potion: "minecraft:long_fire_resistance"}) * 250,
    <fluid:create:potion>.withTag({Potion: "minecraft:strong_strength"}) * 250
  ],
  100
);
