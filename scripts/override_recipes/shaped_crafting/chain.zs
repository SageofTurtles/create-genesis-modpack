<recipetype:minecraft:crafting>.removeByName("minecraft:chain");

<recipetype:minecraft:crafting>.addShaped(
  "chain_shaped_crafting",
  <item:minecraft:chain> * 2,
  [
    [<item:minecraft:iron_nugget>],
    [<item:minecraft:iron_ingot>],
    [<item:minecraft:iron_nugget>]
  ]
);
