<recipetype:minecraft:crafting>.removeByName("createbigcannons:machine_gun_round");
<recipetype:create:sequenced_assembly>.removeByName("createbigcannons:sequenced_assembly/assembling_machine_gun_round");

<recipetype:create:sequenced_assembly>.addRecipe(
  <recipetype:create:sequenced_assembly>.builder("machine_gun_round_sequenced_assembly")
    .transitionTo(<item:createbigcannons:partially_assembled_machine_gun_round>)
    .require(<item:createbigcannons:empty_machine_gun_round>)
    .loops(1)
    .addOutput(<item:createbigcannons:machine_gun_round>, 1)
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:createbigcannons:gunpowder_pinch>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:createbigcannons:gunpowder_pinch>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:createbigcannons:cast_iron_nugget>)
    )
    .addStep<mods.createtweaker.DeployerApplicationRecipe>(
      (rb) => rb.require(<item:createbigcannons:cast_iron_nugget>)
    )
);