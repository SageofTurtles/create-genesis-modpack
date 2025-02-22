<recipetype:create:mixing>.addRecipe(
  "long_blindness_automated_brewing",
  <constant:create:heat_condition:heated>,
  [<fluid:create:potion>.withTag({Potion: "genesis_additions:long_blindness"}) * 1000],
  [<item:minecraft:redstone>],
  [<fluid:create:potion>.withTag({Potion: "genesis_additions:blindness"}) * 1000],
  100
);
