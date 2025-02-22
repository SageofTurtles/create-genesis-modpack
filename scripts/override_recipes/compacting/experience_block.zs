<recipetype:create:compacting>.removeByName("create_enchantment_industry:compacting/experience_block_from_honeycomb");
<recipetype:create:compacting>.removeByName("create_enchantment_industry:compacting/experience_block_from_slime_ball");

<recipetype:create:compacting>.addRecipe(
  "experience_block_compacting",
  <constant:create:heat_condition:none>,
  [
    <item:create:experience_block>
  ],
  [],
  [
    <fluid:create_enchantment_industry:experience> * 27
  ],
  100
);
