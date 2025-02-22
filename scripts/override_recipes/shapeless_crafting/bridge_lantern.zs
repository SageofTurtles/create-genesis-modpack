<recipetype:minecraft:crafting>.removeByName("mcwbridges:bridge_lantern");

<recipetype:minecraft:crafting>.addShapeless(
  "bridge_lantern_shapeless_crafting",
  <item:mcwbridges:bridge_lantern>,
  [
    <item:minecraft:lantern>
  ]
);

<recipetype:minecraft:crafting>.addShapeless(
  "lantern_from_bridge_lantern_shapeless_crafting",
  <item:minecraft:lantern>,
  [
    <item:mcwbridges:bridge_lantern>
  ]
);
