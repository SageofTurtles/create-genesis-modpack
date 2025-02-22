<recipetype:minecraft:crafting>.addShapeless(
  "piglin_banner_pattern_from_piglin_head_shapeless_crafting",
  <item:minecraft:piglin_banner_pattern>,
  [
    <item:minecraft:paper>,
    <item:minecraft:piglin_head>
  ]
);

<recipetype:minecraft:crafting>.addShapeless(
  "piglin_banner_pattern_from_piglin_brute_head_shapeless_crafting",
  <item:minecraft:piglin_banner_pattern>,
  [
    <item:minecraft:paper>,
    <item:minecraft:player_head>.withTag({SkullOwner: {Id: [-1179055889, 425870002, -1373572226, 1177565319], Properties: {textures: [{Value: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjQ4ODc5OWM4M2VjYjI5NDUyY2ViYTg5YzNjMDA5OTIxOTI3NGNlNWIyYmZiOGFkMGIzZWE0YzY1ZmFjNDYzMCJ9fX0="}]}, Name: "Piglin Brute"}, BlockEntityTag: {note_block_sound: "minecraft:entity.piglin_brute.ambient"}})
  ]
);
