<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("revolver_receiver_sequenced_assembly")
    .transitionTo(<item:genesis_additions:incomplete_revolver_receiver>)
    .require(<item:genesis_additions:steel_sheet>)
    .loops(1)
    .addOutput(<item:genesis_additions:revolver_receiver>, 1)
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:genesis_additions:hammer>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:genesis_additions:trigger>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:vintageimprovements:vanadium_spring>)
    )
    .addStep<mods.createtweaker.PressingRecipe>(
      (rb1) => rb1.duration(100)
    )
);
