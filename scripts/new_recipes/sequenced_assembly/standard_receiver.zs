<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("standard_receiver_sequenced_assembly")
    .transitionTo(<item:genesis_additions:incomplete_standard_receiver>)
    .require(<item:create:brass_sheet>)
    .loops(1)
    .addOutput(<item:genesis_additions:standard_receiver>, 1)
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:genesis_additions:chamber>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:genesis_additions:trigger>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:vintageimprovements:vanadium_spring>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:genesis_additions:firing_pin>)
    )
    .addStep<mods.createtweaker.PressingRecipe>(
      (rb1) => rb1.duration(100)
    )
);
