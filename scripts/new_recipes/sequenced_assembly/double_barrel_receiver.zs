<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("double_barrel_receiver_sequenced_assembly")
    .transitionTo(<item:genesis_additions:incomplete_double_barrel_receiver>)
    .require(<item:create:brass_sheet>)
    .loops(2)
    .addOutput(<item:genesis_additions:double_barrel_receiver>, 1)
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:genesis_additions:hammer>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:genesis_additions:chamber>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:vintageimprovements:vanadium_spring>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:genesis_additions:trigger>)
    )
    .addStep<mods.createtweaker.PressingRecipe>(
      (rb1) => rb1.duration(100)
    )
);
