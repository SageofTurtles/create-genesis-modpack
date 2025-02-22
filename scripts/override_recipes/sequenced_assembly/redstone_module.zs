<recipetype:create:sequenced_assembly>.remove(<item:vintageimprovements:redstone_module>);

<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("redstone_module_sequenced_assembly")
    .transitionTo(<item:vintageimprovements:incomplete_redstone_module>)
    .require(<item:create:golden_sheet>)
    .loops(1)
    .addOutput(<item:vintageimprovements:redstone_module>, 1)
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:minecraft:redstone>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:minecraft:quartz>)
    )
    .addStep<mods.createtweaker.PressingRecipe>(
      (rb1) => rb1.duration(100)
    )
);
