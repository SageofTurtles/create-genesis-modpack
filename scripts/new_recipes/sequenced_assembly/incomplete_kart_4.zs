<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("incomplete_kart_4_sequenced_assembly")
    .transitionTo(<item:create_kart:incomplete_kart_stage_2>)
    .require(<item:create_kart:chassie>)
    .loops(4)
    .addOutput(<item:create_kart:incomplete_kart_stage_4>, 1)
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:create_kart:roue>)
    )
);
