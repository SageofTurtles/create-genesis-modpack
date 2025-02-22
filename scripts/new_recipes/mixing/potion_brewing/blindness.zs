<recipetype:create:mixing>.addRecipe(
  "blindness_automated_brewing",
  <constant:create:heat_condition:heated>,
  [<fluid:create:potion>.withTag({Potion: "genesis_additions:blindness"}) * 1000],
  [<item:vintageimprovements:sulfur>],
  [<fluid:create:potion>.withTag({Potion: "minecraft:awkward"}) * 1000],
  100
);
