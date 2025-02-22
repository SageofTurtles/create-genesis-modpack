<recipetype:minecraft:crafting>.removeByName("furniture:gramophone");

craftingTable.addShaped(
  "gramophone_shaped_crafting",
  <item:furniture:gramophone>,
  [
    [<item:minecraft:air>,<item:create:brass_sheet>,<item:minecraft:air>],
    [<tag:items:minecraft:wooden_slabs>,<item:minecraft:jukebox>,<tag:items:minecraft:wooden_slabs>]
  ]
);
