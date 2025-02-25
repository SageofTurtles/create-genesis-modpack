<recipetype:create:mixing>.addRecipe(
  "dragon_breath_automated_brewing",
  <constant:create:heat_condition:heated>,
  [<fluid:create_central_kitchen:dragon_breath> * 1000],
  [<item:minecraft:ender_eye>],
  [<fluid:create:potion>.withTag({Potion: "minecraft:thick"}) * 1000],
  100
);
