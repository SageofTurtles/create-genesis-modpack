<recipetype:minecraft:crafting>.removeByName("railways:crafting/track_switch_brass");

<recipetype:minecraft:crafting>.addShaped(
  "track_switch_brass_shaped_crafting",
  <item:railways:track_switch_brass>,
  [
    [<item:minecraft:lever>],
    [<item:create:brass_casing>],
    [<item:create:cogwheel>]
  ]
);
