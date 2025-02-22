<recipetype:minecraft:crafting>.removeByName("mcwroofs:gutter");
<recipetype:minecraft:crafting>.removeByName("mcwroofs:gutter_base");
<recipetype:minecraft:crafting>.removeByName("mcwroofs:gutter_middle");

<recipetype:minecraft:crafting>.addShaped(
  "gutter_base_shaped_crafting",
  <item:mcwroofs:gutter_base> * 2,
  [
    [<item:create:iron_sheet>, <item:create:iron_sheet>, <item:create:iron_sheet>]
  ]
);

<recipetype:minecraft:crafting>.addShaped(
  "gutter_middle_shaped_crafting",
  <item:mcwroofs:gutter_middle> * 2,
  [
    [<item:create:iron_sheet>],
    [<item:create:iron_sheet>],
    [<item:create:iron_sheet>]
  ]
);
