<recipetype:create:sequenced_assembly>.removeByName("createbigcannons:sequenced_assembly/bronze_autocannon_breech_extractor");

<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("bronze_autocannon_breech_extender_sequenced_assembly")
    .transitionTo(<item:createbigcannons:partial_bronze_autocannon_breech_extractor>)
    .require(<item:genesis_additions:bronze_ingot>)
    .loops(3)
    .addOutput(<item:createbigcannons:bronze_autocannon_breech_extractor>, 1)
    .addStep<mods.createtweaker.CuttingRecipe>(
      (rb) => rb.duration(100)
    )
);