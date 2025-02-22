<recipetype:create:sequenced_assembly>.removeByName("create_optical:sequenced_assembly/golden_coil");

<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("golden_coil_sequenced_assembly")
    .transitionTo(<item:create_optical:incomplete_golden_coil>)
    .require(<item:create:andesite_alloy>)
    .loops(5)
    .addOutput(<item:create_optical:golden_coil>, 1)
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:create:golden_sheet>)
    )
    .addStep<mods.createtweaker.FillingRecipe>(
      (rb) => rb.require(<fluid:minecraft:lava> * 250)
    )
    .addStep<mods.createtweaker.PressingRecipe>(
      (rb1) => rb1.duration(100)
    )
);
