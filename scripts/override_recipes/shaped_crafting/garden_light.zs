<recipetype:minecraft:crafting>.removeByName("mcwlights:garden_light");

<recipetype:minecraft:crafting>.addShaped(
  "garden_light_shaped_crafting",
  <item:mcwlights:garden_light>,
  [
    [<item:create:iron_sheet>],
    [<item:minecraft:glowstone_dust>],
    [<item:createaddition:iron_rod>]
  ]
);
