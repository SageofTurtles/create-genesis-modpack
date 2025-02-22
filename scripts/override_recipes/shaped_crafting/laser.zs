<recipetype:minecraft:crafting>.remove(<item:vintageimprovements:laser>);

<recipetype:minecraft:crafting>.addShaped(
  "laser_shaped_crafting",
  <item:vintageimprovements:laser>,
  [
    [<item:create:cogwheel>,<item:minecraft:redstone_block>,<item:create:cogwheel>],
    [<item:create:precision_mechanism>,<item:create:brass_casing>,<item:vintageimprovements:iron_spring>],
    [<item:minecraft:quartz>,<item:create_optical:optical_device>,<item:minecraft:quartz>]
  ]
);
