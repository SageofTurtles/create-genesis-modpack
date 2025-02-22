<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("incomplete_kart_10_sequenced_assembly")
    .transitionTo(<item:create_kart:incomplete_kart_stage_8>)
    .require(<item:create_kart:incomplete_kart_stage_6>)
    .loops(4)
    .addOutput(<item:create_kart:incomplete_kart_stage_10>, 1)
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:create_kart:echapement>)
    )
);
