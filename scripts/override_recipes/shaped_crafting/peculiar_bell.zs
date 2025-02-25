<recipetype:minecraft:crafting>.removeByName("create:crafting/curiosities/peculiar_bell");

<recipetype:minecraft:crafting>.addShaped(
  "peculiar_bell_shaped_crafting",
  <item:create:peculiar_bell>,
  [
    [<item:minecraft:air>,<item:genesis_additions:bronze_sheet>,<item:minecraft:air>],
    [<item:minecraft:stick>,<item:genesis_additions:bronze_nugget>,<item:minecraft:stick>],
    [<item:minecraft:stick>,<item:genesis_additions:bronze_sheet>,<item:minecraft:stick>]
  ]
);
