<recipetype:minecraft:crafting>.removeByName("trading_floor:trading_depot");

<recipetype:minecraft:crafting>.addShaped(
  "trading_depot_shaped_crafting",
  <item:trading_floor:trading_depot>,
  [
    [<item:create:depot>],
    [<item:create:electron_tube>],
    [<item:minecraft:emerald_block>]
  ]
);
