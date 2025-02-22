<recipetype:minecraft:smelting>.removeByName("supplementaries:ash_brick");

<recipetype:create:compacting>.addRecipe(
  "ash_brick_compacting",
  <constant:create:heat_condition:none>,
  [
    <item:supplementaries:ash_brick> * 2
  ],
  [
    <item:minecraft:clay_ball>,
    <item:supplementaries:ash>
  ],
  [],
  100
);
