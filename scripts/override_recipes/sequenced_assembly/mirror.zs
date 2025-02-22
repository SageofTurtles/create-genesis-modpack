<recipetype:create:sequenced_assembly>.removeByName("create_optical:sequenced_assembly/mirror_item");

<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("mirror_sequenced_assembly")
    .transitionTo(<item:create_optical:incomplete_mirror>)
    .require(<item:minecraft:glass>)
    .loops(2)
    .addOutput(<item:create_optical:mirror> * 4, 1)
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