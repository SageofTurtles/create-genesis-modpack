<recipetype:minecraft:crafting>.removeByName("mcwlights:copper_chain");

<recipetype:minecraft:crafting>.addShaped(
  "copper_chain_shaped_crafting",
  <item:mcwlights:copper_chain> * 2,
  [
    [<item:create:copper_nugget>],
    [<item:minecraft:copper_ingot>],
    [<item:create:copper_nugget>]
  ]
);
