<recipetype:create:compacting>.removeByName("create:compacting/diorite_from_flint");

<recipetype:create:compacting>.addRecipe(
  "diorite_compacting",
  <constant:create:heat_condition:none>,
  [
    <item:minecraft:diorite>
  ],
  [
    <item:minecraft:flint> * 2,
    <item:minecraft:quartz>
  ],
  [
    <fluid:minecraft:lava> * 100
  ],
  100
);
