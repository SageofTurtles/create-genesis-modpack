<recipetype:minecraft:crafting>.removeByName("create:crafting/appliances/copper_backtank");

craftingTable.addShaped(
  "copper_backtank_shaped_crafting",
  <item:create:copper_backtank>,
  [
    [<item:create:andesite_alloy>,<item:create:shaft>,<item:create:andesite_alloy>],  
    [<item:minecraft:copper_ingot>,<item:create:fluid_tank>,<item:minecraft:copper_ingot>],
    [<item:minecraft:air>,<item:minecraft:copper_ingot>,<item:minecraft:air>]
  ]
);