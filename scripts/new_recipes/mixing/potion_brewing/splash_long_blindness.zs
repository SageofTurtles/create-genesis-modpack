<recipetype:create:mixing>.addRecipe(
  "splash_long_blindness_automated_brewing",
  <constant:create:heat_condition:heated>,
  [<fluid:create:potion>.withTag({Bottle: "SPLASH", Potion: "genesis_additions:long_blindness"}) * 1000],
  [<item:minecraft:redstone>],
  [<fluid:create:potion>.withTag({Bottle: "SPLASH", Potion: "genesis_additions:blindness"}) * 1000],
  100
);
