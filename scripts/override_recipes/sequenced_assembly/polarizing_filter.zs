<recipetype:create:sequenced_assembly>.removeByName("create_optical:sequenced_assembly/polarizing_filter");

<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("polarizing_filter_sequenced_assembly")
    .transitionTo(<item:create_optical:incomplete_polarizing_filter>)
    .require(<item:minecraft:tinted_glass>)
    .loops(1)
    .addOutput(<item:create_optical:polarizing_filter>, 1)
    .addStep<mods.createtweaker.FillingRecipe>(
      (rb) => rb.require(<fluid:minecraft:water> * 250)
    )
    .addStep<mods.createtweaker.PressingRecipe>(
      (rb1) => rb1.duration(100)
    )
    .addStep<mods.createtweaker.PressingRecipe>(
      (rb1) => rb1.duration(100)
    )
);