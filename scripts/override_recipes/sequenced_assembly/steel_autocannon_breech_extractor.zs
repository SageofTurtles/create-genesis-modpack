<recipetype:create:sequenced_assembly>.removeByName("createbigcannons:sequenced_assembly/steel_autocannon_breech_extractor");

<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("steel_autocannon_breech_extender_sequenced_assembly")
    .transitionTo(<item:createbigcannons:partial_steel_autocannon_breech_extractor>)
    .require(<item:genesis_additions:steel_ingot>)
    .loops(3)
    .addOutput(<item:createbigcannons:steel_autocannon_breech_extractor>, 1)
    .addStep<mods.createtweaker.CuttingRecipe>(
      (rb) => rb.duration(100)
    )
);