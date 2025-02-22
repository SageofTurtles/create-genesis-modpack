<recipetype:minecraft:crafting>.removeByName("mcwlights:golden_chain");

<recipetype:minecraft:crafting>.addShaped(
  "golden_chain_shaped_crafting",
  <item:mcwlights:golden_chain> * 2,
  [
    [<item:minecraft:gold_nugget>],
    [<item:minecraft:gold_ingot>],
    [<item:minecraft:gold_nugget>]
  ]
);
