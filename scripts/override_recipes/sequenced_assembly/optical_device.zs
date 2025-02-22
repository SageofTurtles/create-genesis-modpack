<recipetype:create:sequenced_assembly>.removeByName("create_optical:sequenced_assembly/optical_device");

<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("optical_device_sequenced_assembly")
    .transitionTo(<item:create_optical:incomplete_optical_device>)
    .require(<item:minecraft:amethyst_shard>)
    .loops(3)
    .addOutput(<item:create_optical:optical_device>, 1)
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:create:iron_sheet>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<tag:items:forge:glass_panes>)
    )
    .addStep<mods.createtweaker.FillingRecipe>(
      (rb) => rb.require(<fluid:minecraft:water> * 500)
    )
    .addStep<mods.createtweaker.PressingRecipe>(
      (rb1) => rb1.duration(100)
    )
);
