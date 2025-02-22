<recipetype:minecraft:crafting>.removeByName("mcwbridges:bridge_torch");

<recipetype:minecraft:crafting>.addShapeless(
  "bridge_torch_shapeless_crafting",
  <item:mcwbridges:bridge_torch>,
  [
    <item:minecraft:torch>
  ]
);

<recipetype:minecraft:crafting>.addShapeless(
  "torch_from_bridge_torch_shapeless_crafting",
  <item:minecraft:torch>,
  [
    <item:mcwbridges:bridge_torch>
  ]
);
