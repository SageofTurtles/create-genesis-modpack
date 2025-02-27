<recipetype:create:compacting>.addRecipe(
  "heart_of_the_sea_compacting",
  <constant:create:heat_condition:superheated>,
  [
    <item:minecraft:heart_of_the_sea>
  ],
  [
    <item:apotheosis:potion_charm>.withTag({Potion: "minecraft:long_night_vision"}),
    <item:apotheosis:potion_charm>.withTag({Potion: "minecraft:long_water_breathing"})
  ],
  [
    <fluid:create_enchantment_industry:hyper_experience> * 250,
    <fluid:createmetalwork:molten_zinc> * 500
  ],
  100
);
