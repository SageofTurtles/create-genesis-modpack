<recipetype:minecraft:crafting>.removeByName("supplementaries:checker");

<recipetype:minecraft:crafting>.addShaped(
  "checker_block_shaped_crafting",
  <item:supplementaries:checker_block> * 4,
  [
    [<item:minecraft:polished_blackstone>,<item:minecraft:polished_diorite>],
    [<item:minecraft:polished_diorite>,<item:minecraft:polished_blackstone>]
  ]
);
