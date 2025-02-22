<recipetype:create:mechanical_crafting>.removeByName("design_decor:mechanical_crafting/enchanted_golden_apple");

<recipetype:create:filling>.addRecipe(
  "enchanted_golden_apple_filling",
  <item:minecraft:enchanted_golden_apple>,
  <item:minecraft:golden_apple>,
  <fluid:create_enchantment_industry:hyper_experience> * 200,
  100
);
