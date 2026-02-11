ServerEvents.recipes(event => {
  // Define functions to create recipes
  const add = (recipeId, pattern, keys, output, count) => {
    event.recipes.create.mechanical_crafting(
      Item.of(output, count),
      pattern,
      keys
    ).id(`genesis:${recipeId}_mechanical_crafting`)
  }

  // Add recipes
  add('airship', ['AAAAA', ' B B ', ' CDE ', ' FFF '], { A: 'immersive_aircraft:sail', B: 'farmersdelight:rope', C: '#create:seats', D: 'immersive_aircraft:engine', E: 'immersive_aircraft:propeller', F: 'immersive_aircraft:hull' }, 'immersive_aircraft:airship', 1)
  add('biplane', ['   A ', 'A  A ', 'BBCDE', 'A  A ', '   A '], { A: 'immersive_aircraft:sail', B: 'immersive_aircraft:hull', C: '#create:seats', D: 'immersive_aircraft:engine', E: 'immersive_aircraft:propeller' }, 'immersive_aircraft:biplane', 1)
  add('cargo_airship', ['AAAAA', 'BC CB', 'BDEFB', ' GGG '], { A: 'immersive_aircraft:sail', B: 'minecraft:chest', C: 'farmersdelight:rope', D: '#create:seats', E: 'immersive_aircraft:engine', F: 'immersive_aircraft:propeller', G: 'immersive_aircraft:hull' }, 'immersive_aircraft:cargo_airship', 1)
  add('copper_seaplane', ['   A ', 'ABBCD', 'A EEE', 'ABBCD', '   A '], { A: 'immersive_aircraft:sail', B: 'immersive_aircraft:hull', C: 'immersive_aircraft:engine', D: 'immersive_aircraft:propeller', E: '#create:seats' }, 'immersive_aircraft:bamboo_hopper', 1)
  add('economy_plane', ['   A ', 'A BA ', 'CCDAE', 'A BA ', '   A '], { A: 'immersive_aircraft:sail', B: 'immersive_aircraft:propeller', C: 'immersive_aircraft:hull', D: 'immersive_aircraft:eco_engine', E: '#create:seats' }, 'man_of_many_planes:economy_plane', 1)
  add('inert_totem', [' ABA ', 'BBCBB', ' BBB ', '  B  '], { A: 'minecraft:emerald', B: 'createaddition:electrum_ingot', C: 'minecraft:nether_star' }, 'kubejs:inert_totem', 1)
  add('jetpack', [' ABA ', 'ACDCA', 'AEFEA', ' G G '], { A: 'create:brass_sheet', B: 'create:shaft', C: 'create:precision_mechanism', D: 'create:copper_backtank', E: 'create:propeller', F: 'create_ironworks:steel_armor_chestplate', G: 'create:chute' }, 'create_jetpack:jetpack', 1)
  add('mechanical_spawner', [' ABA ', 'CDEDC', 'CDFDC', 'CDEDC', ' ABA '], { A: 'create:brass_casing', B: 'create:shaft', C: 'minecraft:chain', D: 'minecraft:netherite_ingot', E: 'minecraft:end_crystal', F: 'minecraft:totem_of_undying' }, 'create_mob_spawners:mechanical_spawner', 1)
  add('navigator', ['ABA', 'CDC', 'CEC', 'ACA'], { A: 'create:andesite_alloy', B: 'create:transmitter', C: 'create:iron_sheet', D: '#forge:glass_panes/colorless', E: 'create:precision_mechanism' }, 'createrailwaysnavigator:navigator', 1)
  add('netherite_jetpack', [' ABA ', 'ACDCA', 'AEFEA', ' G G '], { A: 'create:brass_sheet', B: 'create:shaft', C: 'create:precision_mechanism', D: 'create:netherite_backtank', E: 'create:propeller', F: 'create_ironworks:steel_armor_chestplate', G: 'create:chute' }, 'create_jetpack:netherite_jetpack', 1)
  add('scarlet_biplane', ['   A ', 'A BA ', 'CCDEF', 'A BA ', '   A '], { A: 'decorative_blocks:dark_oak_support', B: 'minecraft:red_dye', C: 'immersive_aircraft:hull', D: '#create:seats', E: 'immersive_aircraft:engine', F: 'immersive_aircraft:enhanced_propeller' }, 'man_of_many_planes:scarlet_biplane', 1)
  add('warship', ['AAAAA', ' B B ', 'CDECD', ' FFF '], { A: 'immersive_aircraft:sail', B: 'farmersdelight:rope', C: 'immersive_aircraft:propeller', D: 'immersive_aircraft:engine', E: 'immersive_aircraft:cargo_airship', F: 'immersive_aircraft:hull_reinforcement' }, 'immersive_aircraft:warship', 1)
})