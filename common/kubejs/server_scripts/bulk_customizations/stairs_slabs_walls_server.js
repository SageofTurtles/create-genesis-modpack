ServerEvents.tags('item', event => {
  event.remove('create:stone_types/andesite', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/asurine', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/calcite', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/crimsite', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/deepslate', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/diorite', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/dripstone', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/granite', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/limestone', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/ochrum', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/scorchia', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/scoria', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/tuff', /create:.*_(stairs|wall)/)
  event.remove('create:stone_types/veridium', /create:.*_(stairs|wall)/)
})

ServerEvents.recipes(event => {
  let woodFullSet = [
    { modid: 'minecraft', block: 'oak_planks', stairs: 'oak_stairs', slab: 'oak_slab' },
    { modid: 'minecraft', block: 'spruce_planks', stairs: 'spruce_stairs', slab: 'spruce_slab' },
    { modid: 'minecraft', block: 'birch_planks', stairs: 'birch_stairs', slab: 'birch_slab' },
    { modid: 'minecraft', block: 'jungle_planks', stairs: 'jungle_stairs', slab: 'jungle_slab' },
    { modid: 'minecraft', block: 'acacia_planks', stairs: 'acacia_stairs', slab: 'acacia_slab' },
    { modid: 'minecraft', block: 'dark_oak_planks', stairs: 'dark_oak_stairs', slab: 'dark_oak_slab' },
    { modid: 'minecraft', block: 'mangrove_planks', stairs: 'mangrove_stairs', slab: 'mangrove_slab' },
    { modid: 'minecraft', block: 'cherry_planks', stairs: 'cherry_stairs', slab: 'cherry_slab' },
    { modid: 'minecraft', block: 'bamboo_planks', stairs: 'bamboo_stairs', slab: 'bamboo_slab' },
    { modid: 'minecraft', block: 'bamboo_mosaic', stairs: 'bamboo_mosaic_stairs', slab: 'bamboo_mosaic_slab' },
    { modid: 'minecraft', block: 'crimson_planks', stairs: 'crimson_stairs', slab: 'crimson_slab' },
    { modid: 'minecraft', block: 'warped_planks', stairs: 'warped_stairs', slab: 'warped_slab' },
    { modid: 'packedup', block: 'grass_thatch', stairs: 'grass_thatch_stairs', slab: 'grass_thatch_slab' },
    { modid: 'supplementaries', block: 'fine_wood', stairs: 'fine_wood_stairs', slab: 'fine_wood_slab' }
  ]

  let stoneFullSet = [
    { modid: 'minecraft', block: 'cobblestone', stairs: 'cobblestone_stairs', slab: 'cobblestone_slab', wall: 'cobblestone_wall' },
    { modid: 'minecraft', block: 'mossy_cobblestone', stairs: 'mossy_cobblestone_stairs', slab: 'mossy_cobblestone_slab', wall: 'mossy_cobblestone_wall' },
    { modid: 'minecraft', block: 'stone_bricks', stairs: 'stone_brick_stairs', slab: 'stone_brick_slab', wall: 'stone_brick_wall' },
    { modid: 'minecraft', block: 'mossy_stone_bricks', stairs: 'mossy_stone_brick_stairs', slab: 'mossy_stone_brick_slab', wall: 'mossy_stone_brick_wall' },
    { modid: 'minecraft', block: 'granite', stairs: 'granite_stairs', slab: 'granite_slab', wall: 'granite_wall' },
    { modid: 'minecraft', block: 'diorite', stairs: 'diorite_stairs', slab: 'diorite_slab', wall: 'diorite_wall' },
    { modid: 'minecraft', block: 'andesite', stairs: 'andesite_stairs', slab: 'andesite_slab', wall: 'andesite_wall' },
    { modid: 'minecraft', block: 'cobbled_deepslate', stairs: 'cobbled_deepslate_stairs', slab: 'cobbled_deepslate_slab', wall: 'cobbled_deepslate_wall' },
    { modid: 'minecraft', block: 'polished_deepslate', stairs: 'polished_deepslate_stairs', slab: 'polished_deepslate_slab', wall: 'polished_deepslate_wall' },
    { modid: 'minecraft', block: 'deepslate_bricks', stairs: 'deepslate_brick_stairs', slab: 'deepslate_brick_slab', wall: 'deepslate_brick_wall' },
    { modid: 'minecraft', block: 'deepslate_tiles', stairs: 'deepslate_tile_stairs', slab: 'deepslate_tile_slab', wall: 'deepslate_tile_wall' },
    { modid: 'minecraft', block: 'bricks', stairs: 'brick_stairs', slab: 'brick_slab', wall: 'brick_wall' },
    { modid: 'minecraft', block: 'mud_bricks', stairs: 'mud_brick_stairs', slab: 'mud_brick_slab', wall: 'mud_brick_wall' },
    { modid: 'minecraft', block: 'sandstone', stairs: 'sandstone_stairs', slab: 'sandstone_slab', wall: 'sandstone_wall' },
    { modid: 'minecraft', block: 'red_sandstone', stairs: 'red_sandstone_stairs', slab: 'red_sandstone_slab', wall: 'red_sandstone_wall' },
    { modid: 'minecraft', block: 'prismarine', stairs: 'prismarine_stairs', slab: 'prismarine_slab', wall: 'prismarine_wall' },
    { modid: 'minecraft', block: 'nether_bricks', stairs: 'nether_brick_stairs', slab: 'nether_brick_slab', wall: 'nether_brick_wall' },
    { modid: 'minecraft', block: 'red_nether_bricks', stairs: 'red_nether_brick_stairs', slab: 'red_nether_brick_slab', wall: 'red_nether_brick_wall' },
    { modid: 'minecraft', block: 'blackstone', stairs: 'blackstone_stairs', slab: 'blackstone_slab', wall: 'blackstone_wall' },
    { modid: 'minecraft', block: 'polished_blackstone', stairs: 'polished_blackstone_stairs', slab: 'polished_blackstone_slab', wall: 'polished_blackstone_wall' },
    { modid: 'minecraft', block: 'polished_blackstone_bricks', stairs: 'polished_blackstone_brick_stairs', slab: 'polished_blackstone_brick_slab', wall: 'polished_blackstone_brick_wall' },
    { modid: 'minecraft', block: 'end_stone_bricks', stairs: 'end_stone_brick_stairs', slab: 'end_stone_brick_slab', wall: 'end_stone_brick_wall' },
    { modid: 'copperandtuffbackport', block: 'polished_tuff', stairs: 'polished_tuff_stairs', slab: 'polished_tuff_slab', wall: 'polished_tuff_wall' },
    { modid: 'copperandtuffbackport', block: 'tuff_bricks', stairs: 'tuff_brick_stairs', slab: 'tuff_brick_slab', wall: 'tuff_brick_wall' },
    { modid: 'create', block: 'cut_granite', stairs: 'cut_granite_stairs', slab: 'cut_granite_slab', wall: 'cut_granite_wall' },
    { modid: 'create', block: 'polished_cut_granite', stairs: 'polished_cut_granite_stairs', slab: 'polished_cut_granite_slab', wall: 'polished_cut_granite_wall' },
    { modid: 'create', block: 'cut_granite_bricks', stairs: 'cut_granite_brick_stairs', slab: 'cut_granite_brick_slab', wall: 'cut_granite_brick_wall' },
    { modid: 'create', block: 'small_granite_bricks', stairs: 'small_granite_brick_stairs', slab: 'small_granite_brick_slab', wall: 'small_granite_brick_wall' },
    { modid: 'create', block: 'cut_diorite', stairs: 'cut_diorite_stairs', slab: 'cut_diorite_slab', wall: 'cut_diorite_wall' },
    { modid: 'create', block: 'polished_cut_diorite', stairs: 'polished_cut_diorite_stairs', slab: 'polished_cut_diorite_slab', wall: 'polished_cut_diorite_wall' },
    { modid: 'create', block: 'cut_diorite_bricks', stairs: 'cut_diorite_brick_stairs', slab: 'cut_diorite_brick_slab', wall: 'cut_diorite_brick_wall' },
    { modid: 'create', block: 'small_diorite_bricks', stairs: 'small_diorite_brick_stairs', slab: 'small_diorite_brick_slab', wall: 'small_diorite_brick_wall' },
    { modid: 'create', block: 'cut_andesite', stairs: 'cut_andesite_stairs', slab: 'cut_andesite_slab', wall: 'cut_andesite_wall' },
    { modid: 'create', block: 'polished_cut_andesite', stairs: 'polished_cut_andesite_stairs', slab: 'polished_cut_andesite_slab', wall: 'polished_cut_andesite_wall' },
    { modid: 'create', block: 'cut_andesite_bricks', stairs: 'cut_andesite_brick_stairs', slab: 'cut_andesite_brick_slab', wall: 'cut_andesite_brick_wall' },
    { modid: 'create', block: 'small_andesite_bricks', stairs: 'small_andesite_brick_stairs', slab: 'small_andesite_brick_slab', wall: 'small_andesite_brick_wall' },
    { modid: 'create', block: 'cut_calcite', stairs: 'cut_calcite_stairs', slab: 'cut_calcite_slab', wall: 'cut_calcite_wall' },
    { modid: 'create', block: 'polished_cut_calcite', stairs: 'polished_cut_calcite_stairs', slab: 'polished_cut_calcite_slab', wall: 'polished_cut_calcite_wall' },
    { modid: 'create', block: 'cut_calcite_bricks', stairs: 'cut_calcite_brick_stairs', slab: 'cut_calcite_brick_slab', wall: 'cut_calcite_brick_wall' },
    { modid: 'create', block: 'small_calcite_bricks', stairs: 'small_calcite_brick_stairs', slab: 'small_calcite_brick_slab', wall: 'small_calcite_brick_wall' },
    { modid: 'create', block: 'cut_dripstone', stairs: 'cut_dripstone_stairs', slab: 'cut_dripstone_slab', wall: 'cut_dripstone_wall' },
    { modid: 'create', block: 'polished_cut_dripstone', stairs: 'polished_cut_dripstone_stairs', slab: 'polished_cut_dripstone_slab', wall: 'polished_cut_dripstone_wall' },
    { modid: 'create', block: 'cut_dripstone_bricks', stairs: 'cut_dripstone_brick_stairs', slab: 'cut_dripstone_brick_slab', wall: 'cut_dripstone_brick_wall' },
    { modid: 'create', block: 'small_dripstone_bricks', stairs: 'small_dripstone_brick_stairs', slab: 'small_dripstone_brick_slab', wall: 'small_dripstone_brick_wall' },
    { modid: 'create', block: 'cut_deepslate', stairs: 'cut_deepslate_stairs', slab: 'cut_deepslate_slab', wall: 'cut_deepslate_wall' },
    { modid: 'create', block: 'polished_cut_deepslate', stairs: 'polished_cut_deepslate_stairs', slab: 'polished_cut_deepslate_slab', wall: 'polished_cut_deepslate_wall' },
    { modid: 'create', block: 'cut_deepslate_bricks', stairs: 'cut_deepslate_brick_stairs', slab: 'cut_deepslate_brick_slab', wall: 'cut_deepslate_brick_wall' },
    { modid: 'create', block: 'small_deepslate_bricks', stairs: 'small_deepslate_brick_stairs', slab: 'small_deepslate_brick_slab', wall: 'small_deepslate_brick_wall' },
    { modid: 'create', block: 'cut_tuff', stairs: 'cut_tuff_stairs', slab: 'cut_tuff_slab', wall: 'cut_tuff_wall' },
    { modid: 'create', block: 'polished_cut_tuff', stairs: 'polished_cut_tuff_stairs', slab: 'polished_cut_tuff_slab', wall: 'polished_cut_tuff_wall' },
    { modid: 'create', block: 'cut_tuff_bricks', stairs: 'cut_tuff_brick_stairs', slab: 'cut_tuff_brick_slab', wall: 'cut_tuff_brick_wall' },
    { modid: 'create', block: 'small_tuff_bricks', stairs: 'small_tuff_brick_stairs', slab: 'small_tuff_brick_slab', wall: 'small_tuff_brick_wall' },
    { modid: 'create', block: 'cut_asurine', stairs: 'cut_asurine_stairs', slab: 'cut_asurine_slab', wall: 'cut_asurine_wall' },
    { modid: 'create', block: 'polished_cut_asurine', stairs: 'polished_cut_asurine_stairs', slab: 'polished_cut_asurine_slab', wall: 'polished_cut_asurine_wall' },
    { modid: 'create', block: 'cut_asurine_bricks', stairs: 'cut_asurine_brick_stairs', slab: 'cut_asurine_brick_slab', wall: 'cut_asurine_brick_wall' },
    { modid: 'create', block: 'small_asurine_bricks', stairs: 'small_asurine_brick_stairs', slab: 'small_asurine_brick_slab', wall: 'small_asurine_brick_wall' },
    { modid: 'create', block: 'cut_crimsite', stairs: 'cut_crimsite_stairs', slab: 'cut_crimsite_slab', wall: 'cut_crimsite_wall' },
    { modid: 'create', block: 'polished_cut_crimsite', stairs: 'polished_cut_crimsite_stairs', slab: 'polished_cut_crimsite_slab', wall: 'polished_cut_crimsite_wall' },
    { modid: 'create', block: 'cut_crimsite_bricks', stairs: 'cut_crimsite_brick_stairs', slab: 'cut_crimsite_brick_slab', wall: 'cut_crimsite_brick_wall' },
    { modid: 'create', block: 'small_crimsite_bricks', stairs: 'small_crimsite_brick_stairs', slab: 'small_crimsite_brick_slab', wall: 'small_crimsite_brick_wall' },
    { modid: 'create', block: 'cut_limestone', stairs: 'cut_limestone_stairs', slab: 'cut_limestone_slab', wall: 'cut_limestone_wall' },
    { modid: 'create', block: 'polished_cut_limestone', stairs: 'polished_cut_limestone_stairs', slab: 'polished_cut_limestone_slab', wall: 'polished_cut_limestone_wall' },
    { modid: 'create', block: 'cut_limestone_bricks', stairs: 'cut_limestone_brick_stairs', slab: 'cut_limestone_brick_slab', wall: 'cut_limestone_brick_wall' },
    { modid: 'create', block: 'small_limestone_bricks', stairs: 'small_limestone_brick_stairs', slab: 'small_limestone_brick_slab', wall: 'small_limestone_brick_wall' },
    { modid: 'create', block: 'cut_ochrum', stairs: 'cut_ochrum_stairs', slab: 'cut_ochrum_slab', wall: 'cut_ochrum_wall' },
    { modid: 'create', block: 'polished_cut_ochrum', stairs: 'polished_cut_ochrum_stairs', slab: 'polished_cut_ochrum_slab', wall: 'polished_cut_ochrum_wall' },
    { modid: 'create', block: 'cut_ochrum_bricks', stairs: 'cut_ochrum_brick_stairs', slab: 'cut_ochrum_brick_slab', wall: 'cut_ochrum_brick_wall' },
    { modid: 'create', block: 'small_ochrum_bricks', stairs: 'small_ochrum_brick_stairs', slab: 'small_ochrum_brick_slab', wall: 'small_ochrum_brick_wall' },
    { modid: 'create', block: 'cut_scoria', stairs: 'cut_scoria_stairs', slab: 'cut_scoria_slab', wall: 'cut_scoria_wall' },
    { modid: 'create', block: 'polished_cut_scoria', stairs: 'polished_cut_scoria_stairs', slab: 'polished_cut_scoria_slab', wall: 'polished_cut_scoria_wall' },
    { modid: 'create', block: 'cut_scoria_bricks', stairs: 'cut_scoria_brick_stairs', slab: 'cut_scoria_brick_slab', wall: 'cut_scoria_brick_wall' },
    { modid: 'create', block: 'small_scoria_bricks', stairs: 'small_scoria_brick_stairs', slab: 'small_scoria_brick_slab', wall: 'small_scoria_brick_wall' },
    { modid: 'create', block: 'cut_scorchia', stairs: 'cut_scorchia_stairs', slab: 'cut_scorchia_slab', wall: 'cut_scorchia_wall' },
    { modid: 'create', block: 'polished_cut_scorchia', stairs: 'polished_cut_scorchia_stairs', slab: 'polished_cut_scorchia_slab', wall: 'polished_cut_scorchia_wall' },
    { modid: 'create', block: 'cut_scorchia_bricks', stairs: 'cut_scorchia_brick_stairs', slab: 'cut_scorchia_brick_slab', wall: 'cut_scorchia_brick_wall' },
    { modid: 'create', block: 'small_scorchia_bricks', stairs: 'small_scorchia_brick_stairs', slab: 'small_scorchia_brick_slab', wall: 'small_scorchia_brick_wall' },
    { modid: 'create', block: 'cut_veridium', stairs: 'cut_veridium_stairs', slab: 'cut_veridium_slab', wall: 'cut_veridium_wall' },
    { modid: 'create', block: 'polished_cut_veridium', stairs: 'polished_cut_veridium_stairs', slab: 'polished_cut_veridium_slab', wall: 'polished_cut_veridium_wall' },
    { modid: 'create', block: 'cut_veridium_bricks', stairs: 'cut_veridium_brick_stairs', slab: 'cut_veridium_brick_slab', wall: 'cut_veridium_brick_wall' },
    { modid: 'create', block: 'small_veridium_bricks', stairs: 'small_veridium_brick_stairs', slab: 'small_veridium_brick_slab', wall: 'small_veridium_brick_wall' },
    { modid: 'createdeco', block: 'short_red_bricks', stairs: 'short_red_brick_stairs', slab: 'short_red_brick_slab', wall: 'short_red_brick_wall' },
    { modid: 'createdeco', block: 'tiled_red_bricks', stairs: 'tiled_red_brick_stairs', slab: 'tiled_red_brick_slab', wall: 'tiled_red_brick_wall' },
    { modid: 'createdeco', block: 'long_red_bricks', stairs: 'long_red_brick_stairs', slab: 'long_red_brick_slab', wall: 'long_red_brick_wall' },
    { modid: 'createdeco', block: 'corner_red_bricks', stairs: 'corner_red_brick_stairs', slab: 'corner_red_brick_slab', wall: 'corner_red_brick_wall' },
    { modid: 'createdeco', block: 'cracked_red_bricks', stairs: 'cracked_red_brick_stairs', slab: 'cracked_red_brick_slab', wall: 'cracked_red_brick_wall' },
    { modid: 'createdeco', block: 'mossy_red_bricks', stairs: 'mossy_red_brick_stairs', slab: 'mossy_red_brick_slab', wall: 'mossy_red_brick_wall' },
    { modid: 'createdeco', block: 'dean_bricks', stairs: 'dean_brick_stairs', slab: 'dean_brick_slab', wall: 'dean_brick_wall' },
    { modid: 'createdeco', block: 'short_dean_bricks', stairs: 'short_dean_brick_stairs', slab: 'short_dean_brick_slab', wall: 'short_dean_brick_wall' },
    { modid: 'createdeco', block: 'tiled_dean_bricks', stairs: 'tiled_dean_brick_stairs', slab: 'tiled_dean_brick_slab', wall: 'tiled_dean_brick_wall' },
    { modid: 'createdeco', block: 'long_dean_bricks', stairs: 'long_dean_brick_stairs', slab: 'long_dean_brick_slab', wall: 'long_dean_brick_wall' },
    { modid: 'createdeco', block: 'corner_dean_bricks', stairs: 'corner_dean_brick_stairs', slab: 'corner_dean_brick_slab', wall: 'corner_dean_brick_wall' },
    { modid: 'createdeco', block: 'cracked_dean_bricks', stairs: 'cracked_dean_brick_stairs', slab: 'cracked_dean_brick_slab', wall: 'cracked_dean_brick_wall' },
    { modid: 'createdeco', block: 'mossy_dean_bricks', stairs: 'mossy_dean_brick_stairs', slab: 'mossy_dean_brick_slab', wall: 'mossy_dean_brick_wall' },
    { modid: 'createdeco', block: 'scarlet_bricks', stairs: 'scarlet_brick_stairs', slab: 'scarlet_brick_slab', wall: 'scarlet_brick_wall' },
    { modid: 'createdeco', block: 'short_scarlet_bricks', stairs: 'short_scarlet_brick_stairs', slab: 'short_scarlet_brick_slab', wall: 'short_scarlet_brick_wall' },
    { modid: 'createdeco', block: 'tiled_scarlet_bricks', stairs: 'tiled_scarlet_brick_stairs', slab: 'tiled_scarlet_brick_slab', wall: 'tiled_scarlet_brick_wall' },
    { modid: 'createdeco', block: 'long_scarlet_bricks', stairs: 'long_scarlet_brick_stairs', slab: 'long_scarlet_brick_slab', wall: 'long_scarlet_brick_wall' },
    { modid: 'createdeco', block: 'corner_scarlet_bricks', stairs: 'corner_scarlet_brick_stairs', slab: 'corner_scarlet_brick_slab', wall: 'corner_scarlet_brick_wall' },
    { modid: 'createdeco', block: 'cracked_scarlet_bricks', stairs: 'cracked_scarlet_brick_stairs', slab: 'cracked_scarlet_brick_slab', wall: 'cracked_scarlet_brick_wall' },
    { modid: 'createdeco', block: 'mossy_scarlet_bricks', stairs: 'mossy_scarlet_brick_stairs', slab: 'mossy_scarlet_brick_slab', wall: 'mossy_scarlet_brick_wall' },
    { modid: 'createdeco', block: 'verdant_bricks', stairs: 'verdant_brick_stairs', slab: 'verdant_brick_slab', wall: 'verdant_brick_wall' },
    { modid: 'createdeco', block: 'short_verdant_bricks', stairs: 'short_verdant_brick_stairs', slab: 'short_verdant_brick_slab', wall: 'short_verdant_brick_wall' },
    { modid: 'createdeco', block: 'tiled_verdant_bricks', stairs: 'tiled_verdant_brick_stairs', slab: 'tiled_verdant_brick_slab', wall: 'tiled_verdant_brick_wall' },
    { modid: 'createdeco', block: 'long_verdant_bricks', stairs: 'long_verdant_brick_stairs', slab: 'long_verdant_brick_slab', wall: 'long_verdant_brick_wall' },
    { modid: 'createdeco', block: 'corner_verdant_bricks', stairs: 'corner_verdant_brick_stairs', slab: 'corner_verdant_brick_slab', wall: 'corner_verdant_brick_wall' },
    { modid: 'createdeco', block: 'cracked_verdant_bricks', stairs: 'cracked_verdant_brick_stairs', slab: 'cracked_verdant_brick_slab', wall: 'cracked_verdant_brick_wall' },
    { modid: 'createdeco', block: 'mossy_verdant_bricks', stairs: 'mossy_verdant_brick_stairs', slab: 'mossy_verdant_brick_slab', wall: 'mossy_verdant_brick_wall' },
    { modid: 'createdeco', block: 'blue_bricks', stairs: 'blue_brick_stairs', slab: 'blue_brick_slab', wall: 'blue_brick_wall' },
    { modid: 'createdeco', block: 'short_blue_bricks', stairs: 'short_blue_brick_stairs', slab: 'short_blue_brick_slab', wall: 'short_blue_brick_wall' },
    { modid: 'createdeco', block: 'tiled_blue_bricks', stairs: 'tiled_blue_brick_stairs', slab: 'tiled_blue_brick_slab', wall: 'tiled_blue_brick_wall' },
    { modid: 'createdeco', block: 'long_blue_bricks', stairs: 'long_blue_brick_stairs', slab: 'long_blue_brick_slab', wall: 'long_blue_brick_wall' },
    { modid: 'createdeco', block: 'corner_blue_bricks', stairs: 'corner_blue_brick_stairs', slab: 'corner_blue_brick_slab', wall: 'corner_blue_brick_wall' },
    { modid: 'createdeco', block: 'cracked_blue_bricks', stairs: 'cracked_blue_brick_stairs', slab: 'cracked_blue_brick_slab', wall: 'cracked_blue_brick_wall' },
    { modid: 'createdeco', block: 'mossy_blue_bricks', stairs: 'mossy_blue_brick_stairs', slab: 'mossy_blue_brick_slab', wall: 'mossy_blue_brick_wall' },
    { modid: 'createdeco', block: 'umber_bricks', stairs: 'umber_brick_stairs', slab: 'umber_brick_slab', wall: 'umber_brick_wall' },
    { modid: 'createdeco', block: 'short_umber_bricks', stairs: 'short_umber_brick_stairs', slab: 'short_umber_brick_slab', wall: 'short_umber_brick_wall' },
    { modid: 'createdeco', block: 'tiled_umber_bricks', stairs: 'tiled_umber_brick_stairs', slab: 'tiled_umber_brick_slab', wall: 'tiled_umber_brick_wall' },
    { modid: 'createdeco', block: 'long_umber_bricks', stairs: 'long_umber_brick_stairs', slab: 'long_umber_brick_slab', wall: 'long_umber_brick_wall' },
    { modid: 'createdeco', block: 'corner_umber_bricks', stairs: 'corner_umber_brick_stairs', slab: 'corner_umber_brick_slab', wall: 'corner_umber_brick_wall' },
    { modid: 'createdeco', block: 'cracked_umber_bricks', stairs: 'cracked_umber_brick_stairs', slab: 'cracked_umber_brick_slab', wall: 'cracked_umber_brick_wall' },
    { modid: 'createdeco', block: 'mossy_umber_bricks', stairs: 'mossy_umber_brick_stairs', slab: 'mossy_umber_brick_slab', wall: 'mossy_umber_brick_wall' },
    { modid: 'createdeco', block: 'dusk_bricks', stairs: 'dusk_brick_stairs', slab: 'dusk_brick_slab', wall: 'dusk_brick_wall' },
    { modid: 'createdeco', block: 'short_dusk_bricks', stairs: 'short_dusk_brick_stairs', slab: 'short_dusk_brick_slab', wall: 'short_dusk_brick_wall' },
    { modid: 'createdeco', block: 'tiled_dusk_bricks', stairs: 'tiled_dusk_brick_stairs', slab: 'tiled_dusk_brick_slab', wall: 'tiled_dusk_brick_wall' },
    { modid: 'createdeco', block: 'long_dusk_bricks', stairs: 'long_dusk_brick_stairs', slab: 'long_dusk_brick_slab', wall: 'long_dusk_brick_wall' },
    { modid: 'createdeco', block: 'corner_dusk_bricks', stairs: 'corner_dusk_brick_stairs', slab: 'corner_dusk_brick_slab', wall: 'corner_dusk_brick_wall' },
    { modid: 'createdeco', block: 'cracked_dusk_bricks', stairs: 'cracked_dusk_brick_stairs', slab: 'cracked_dusk_brick_slab', wall: 'cracked_dusk_brick_wall' },
    { modid: 'createdeco', block: 'mossy_dusk_bricks', stairs: 'mossy_dusk_brick_stairs', slab: 'mossy_dusk_brick_slab', wall: 'mossy_dusk_brick_wall' },
    { modid: 'createdeco', block: 'pearl_bricks', stairs: 'pearl_brick_stairs', slab: 'pearl_brick_slab', wall: 'pearl_brick_wall' },
    { modid: 'createdeco', block: 'short_pearl_bricks', stairs: 'short_pearl_brick_stairs', slab: 'short_pearl_brick_slab', wall: 'short_pearl_brick_wall' },
    { modid: 'createdeco', block: 'tiled_pearl_bricks', stairs: 'tiled_pearl_brick_stairs', slab: 'tiled_pearl_brick_slab', wall: 'tiled_pearl_brick_wall' },
    { modid: 'createdeco', block: 'long_pearl_bricks', stairs: 'long_pearl_brick_stairs', slab: 'long_pearl_brick_slab', wall: 'long_pearl_brick_wall' },
    { modid: 'createdeco', block: 'corner_pearl_bricks', stairs: 'corner_pearl_brick_stairs', slab: 'corner_pearl_brick_slab', wall: 'corner_pearl_brick_wall' },
    { modid: 'createdeco', block: 'cracked_pearl_bricks', stairs: 'cracked_pearl_brick_stairs', slab: 'cracked_pearl_brick_slab', wall: 'cracked_pearl_brick_wall' },
    { modid: 'createdeco', block: 'mossy_pearl_bricks', stairs: 'mossy_pearl_brick_stairs', slab: 'mossy_pearl_brick_slab', wall: 'mossy_pearl_brick_wall' },
    { modid: 'supplementaries', block: 'lapis_bricks', stairs: 'lapis_bricks_stairs', slab: 'lapis_bricks_slab', wall: 'lapis_bricks_wall' }
  ]

  let stoneStairs = [
    { modid: 'minecraft', block: 'stone', stairs: 'stone_stairs', slab: 'stone_slab' },
    { modid: 'minecraft', block: 'polished_granite', stairs: 'polished_granite_stairs', slab: 'polished_granite_slab' },
    { modid: 'minecraft', block: 'polished_diorite', stairs: 'polished_diorite_stairs', slab: 'polished_diorite_slab' },
    { modid: 'minecraft', block: 'polished_andesite', stairs: 'polished_andesite_stairs', slab: 'polished_andesite_slab' },
    { modid: 'minecraft', block: 'smooth_sandstone', stairs: 'smooth_sandstone_stairs', slab: 'smooth_sandstone_slab' },
    { modid: 'minecraft', block: 'smooth_red_sandstone', stairs: 'smooth_red_sandstone_stairs', slab: 'smooth_red_sandstone_slab' },
    { modid: 'minecraft', block: 'prismarine_bricks', stairs: 'prismarine_brick_stairs', slab: 'prismarine_brick_slab' },
    { modid: 'minecraft', block: 'dark_prismarine', stairs: 'dark_prismarine_stairs', slab: 'dark_prismarine_slab' },
    { modid: 'minecraft', block: 'purpur_block', stairs: 'purpur_stairs', slab: 'purpur_slab' },
    { modid: 'minecraft', block: 'quartz_block', stairs: 'quartz_stairs', slab: 'quartz_slab' },
    { modid: 'minecraft', block: 'smooth_quartz', stairs: 'smooth_quartz_stairs', slab: 'smooth_quartz_slab' },
    { modid: 'minecraft', block: 'cut_copper', stairs: 'cut_copper_stairs', slab: 'cut_copper_slab' },
    { modid: 'minecraft', block: 'exposed_cut_copper', stairs: 'exposed_cut_copper_stairs', slab: 'exposed_cut_copper_slab' },
    { modid: 'minecraft', block: 'weathered_cut_copper', stairs: 'weathered_cut_copper_stairs', slab: 'weathered_cut_copper_slab' },
    { modid: 'minecraft', block: 'oxidized_cut_copper', stairs: 'oxidized_cut_copper_stairs', slab: 'oxidized_cut_copper_slab' },
    { modid: 'minecraft', block: 'waxed_cut_copper', stairs: 'waxed_cut_copper_stairs', slab: 'waxed_cut_copper_slab' },
    { modid: 'minecraft', block: 'waxed_exposed_cut_copper', stairs: 'waxed_exposed_cut_copper_stairs', slab: 'waxed_exposed_cut_copper_slab' },
    { modid: 'minecraft', block: 'waxed_weathered_cut_copper', stairs: 'waxed_weathered_cut_copper_stairs', slab: 'waxed_weathered_cut_copper_slab' },
    { modid: 'minecraft', block: 'waxed_oxidized_cut_copper', stairs: 'waxed_oxidized_cut_copper_stairs', slab: 'waxed_oxidized_cut_copper_slab' },
    { modid: 'create', block: 'copper_shingles', stairs: 'copper_shingle_stairs', slab: 'copper_shingle_slab' },
    { modid: 'create', block: 'exposed_copper_shingles', stairs: 'exposed_copper_shingle_stairs', slab: 'exposed_copper_shingle_slab' },
    { modid: 'create', block: 'weathered_copper_shingles', stairs: 'weathered_copper_shingle_stairs', slab: 'weathered_copper_shingle_slab' },
    { modid: 'create', block: 'oxidized_copper_shingles', stairs: 'oxidized_copper_shingle_stairs', slab: 'oxidized_copper_shingle_slab' },
    { modid: 'create', block: 'waxed_copper_shingles', stairs: 'waxed_copper_shingle_stairs', slab: 'waxed_copper_shingle_slab' },
    { modid: 'create', block: 'waxed_exposed_copper_shingles', stairs: 'waxed_exposed_copper_shingle_stairs', slab: 'waxed_exposed_copper_shingle_slab' },
    { modid: 'create', block: 'waxed_weathered_copper_shingles', stairs: 'waxed_weathered_copper_shingle_stairs', slab: 'waxed_weathered_copper_shingle_slab' },
    { modid: 'create', block: 'waxed_oxidized_copper_shingles', stairs: 'waxed_oxidized_copper_shingle_stairs', slab: 'waxed_oxidized_copper_shingle_slab' },
    { modid: 'create', block: 'copper_tiles', stairs: 'copper_tile_stairs', slab: 'copper_tile_slab' },
    { modid: 'create', block: 'exposed_copper_tiles', stairs: 'exposed_copper_tile_stairs', slab: 'exposed_copper_tile_slab' },
    { modid: 'create', block: 'weathered_copper_tiles', stairs: 'weathered_copper_tile_stairs', slab: 'weathered_copper_tile_slab' },
    { modid: 'create', block: 'oxidized_copper_tiles', stairs: 'oxidized_copper_tile_stairs', slab: 'oxidized_copper_tile_slab' },
    { modid: 'create', block: 'waxed_copper_tiles', stairs: 'waxed_copper_tile_stairs', slab: 'waxed_copper_tile_slab' },
    { modid: 'create', block: 'waxed_exposed_copper_tiles', stairs: 'waxed_exposed_copper_tile_stairs', slab: 'waxed_exposed_copper_tile_slab' },
    { modid: 'create', block: 'waxed_weathered_copper_tiles', stairs: 'waxed_weathered_copper_tile_stairs', slab: 'waxed_weathered_copper_tile_slab' },
    { modid: 'create', block: 'waxed_oxidized_copper_tiles', stairs: 'waxed_oxidized_copper_tile_stairs', slab: 'waxed_oxidized_copper_tile_slab' },
    { modid: 'mcwpaths', block: 'andesite_running_bond', stairs: 'andesite_running_bond_stairs', slab: 'andesite_running_bond_slab' },
    { modid: 'mcwpaths', block: 'diorite_running_bond', stairs: 'diorite_running_bond_stairs', slab: 'diorite_running_bond_slab' },
    { modid: 'mcwpaths', block: 'granite_running_bond', stairs: 'granite_running_bond_stairs', slab: 'granite_running_bond_slab' },
    { modid: 'mcwpaths', block: 'sandstone_running_bond', stairs: 'sandstone_running_bond_stairs', slab: 'sandstone_running_bond_slab' },
    { modid: 'mcwpaths', block: 'red_sandstone_running_bond', stairs: 'red_sandstone_running_bond_stairs', slab: 'red_sandstone_running_bond_slab' },
    { modid: 'mcwpaths', block: 'brick_running_bond', stairs: 'brick_running_bond_stairs', slab: 'brick_running_bond_slab' },
    { modid: 'mcwpaths', block: 'stone_running_bond', stairs: 'stone_running_bond_stairs', slab: 'stone_running_bond_slab' },
    { modid: 'mcwpaths', block: 'mossy_stone_running_bond', stairs: 'mossy_stone_running_bond_stairs', slab: 'mossy_stone_running_bond_slab' },
    { modid: 'mcwpaths', block: 'cobbled_deepslate_running_bond', stairs: 'cobbled_deepslate_running_bond_stairs', slab: 'cobbled_deepslate_running_bond_slab' },
    { modid: 'mcwpaths', block: 'deepslate_running_bond', stairs: 'deepslate_running_bond_stairs', slab: 'deepslate_running_bond_slab' },
    { modid: 'mcwpaths', block: 'mud_brick_running_bond', stairs: 'mud_brick_running_bond_stairs', slab: 'mud_brick_running_bond_slab' },
    { modid: 'mcwpaths', block: 'blackstone_running_bond', stairs: 'blackstone_running_bond_stairs', slab: 'blackstone_running_bond_slab' },
    { modid: 'mcwpaths', block: 'dark_prismarine_running_bond', stairs: 'dark_prismarine_running_bond_stairs', slab: 'dark_prismarine_running_bond_slab' },
    { modid: 'mcwpaths', block: 'andesite_windmill_weave', stairs: 'andesite_windmill_weave_stairs', slab: 'andesite_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'diorite_windmill_weave', stairs: 'diorite_windmill_weave_stairs', slab: 'diorite_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'granite_windmill_weave', stairs: 'granite_windmill_weave_stairs', slab: 'granite_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'sandstone_windmill_weave', stairs: 'sandstone_windmill_weave_stairs', slab: 'sandstone_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'red_sandstone_windmill_weave', stairs: 'red_sandstone_windmill_weave_stairs', slab: 'red_sandstone_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'brick_windmill_weave', stairs: 'brick_windmill_weave_stairs', slab: 'brick_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'stone_windmill_weave', stairs: 'stone_windmill_weave_stairs', slab: 'stone_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'mossy_stone_windmill_weave', stairs: 'mossy_stone_windmill_weave_stairs', slab: 'mossy_stone_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'cobbled_deepslate_windmill_weave', stairs: 'cobbled_deepslate_windmill_weave_stairs', slab: 'cobbled_deepslate_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'deepslate_windmill_weave', stairs: 'deepslate_windmill_weave_stairs', slab: 'deepslate_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'mud_brick_windmill_weave', stairs: 'mud_brick_windmill_weave_stairs', slab: 'mud_brick_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'blackstone_windmill_weave', stairs: 'blackstone_windmill_weave_stairs', slab: 'blackstone_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'dark_prismarine_windmill_weave', stairs: 'dark_prismarine_windmill_weave_stairs', slab: 'dark_prismarine_windmill_weave_slab' },
    { modid: 'mcwpaths', block: 'andesite_flagstone', stairs: 'andesite_flagstone_stairs', slab: 'andesite_flagstone_slab' },
    { modid: 'mcwpaths', block: 'diorite_flagstone', stairs: 'diorite_flagstone_stairs', slab: 'diorite_flagstone_slab' },
    { modid: 'mcwpaths', block: 'granite_flagstone', stairs: 'granite_flagstone_stairs', slab: 'granite_flagstone_slab' },
    { modid: 'mcwpaths', block: 'sandstone_flagstone', stairs: 'sandstone_flagstone_stairs', slab: 'sandstone_flagstone_slab' },
    { modid: 'mcwpaths', block: 'red_sandstone_flagstone', stairs: 'red_sandstone_flagstone_stairs', slab: 'red_sandstone_flagstone_slab' },
    { modid: 'mcwpaths', block: 'brick_flagstone', stairs: 'brick_flagstone_stairs', slab: 'brick_flagstone_slab' },
    { modid: 'mcwpaths', block: 'stone_flagstone', stairs: 'stone_flagstone_stairs', slab: 'stone_flagstone_slab' },
    { modid: 'mcwpaths', block: 'mossy_stone_flagstone', stairs: 'mossy_stone_flagstone_stairs', slab: 'mossy_stone_flagstone_slab' },
    { modid: 'mcwpaths', block: 'cobbled_deepslate_flagstone', stairs: 'cobbled_deepslate_flagstone_stairs', slab: 'cobbled_deepslate_flagstone_slab' },
    { modid: 'mcwpaths', block: 'deepslate_flagstone', stairs: 'deepslate_flagstone_stairs', slab: 'deepslate_flagstone_slab' },
    { modid: 'mcwpaths', block: 'mud_brick_flagstone', stairs: 'mud_brick_flagstone_stairs', slab: 'mud_brick_flagstone_slab' },
    { modid: 'mcwpaths', block: 'blackstone_flagstone', stairs: 'blackstone_flagstone_stairs', slab: 'blackstone_flagstone_slab' },
    { modid: 'mcwpaths', block: 'dark_prismarine_flagstone', stairs: 'dark_prismarine_flagstone_stairs', slab: 'dark_prismarine_flagstone_slab' },
    { modid: 'mcwpaths', block: 'andesite_crystal_floor', stairs: 'andesite_crystal_floor_stairs', slab: 'andesite_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'diorite_crystal_floor', stairs: 'diorite_crystal_floor_stairs', slab: 'diorite_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'granite_crystal_floor', stairs: 'granite_crystal_floor_stairs', slab: 'granite_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'sandstone_crystal_floor', stairs: 'sandstone_crystal_floor_stairs', slab: 'sandstone_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'red_sandstone_crystal_floor', stairs: 'red_sandstone_crystal_floor_stairs', slab: 'red_sandstone_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'brick_crystal_floor', stairs: 'brick_crystal_floor_stairs', slab: 'brick_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'stone_crystal_floor', stairs: 'stone_crystal_floor_stairs', slab: 'stone_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'mossy_stone_crystal_floor', stairs: 'mossy_stone_crystal_floor_stairs', slab: 'mossy_stone_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'cobbled_deepslate_crystal_floor', stairs: 'cobbled_deepslate_crystal_floor_stairs', slab: 'cobbled_deepslate_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'deepslate_crystal_floor', stairs: 'deepslate_crystal_floor_stairs', slab: 'deepslate_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'mud_brick_crystal_floor', stairs: 'mud_brick_crystal_floor_stairs', slab: 'mud_brick_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'blackstone_crystal_floor', stairs: 'blackstone_crystal_floor_stairs', slab: 'blackstone_crystal_floor_slab' },
    { modid: 'mcwpaths', block: 'dark_prismarine_crystal_floor', stairs: 'dark_prismarine_crystal_floor_stairs', slab: 'dark_prismarine_crystal_floor_slab' }
  ]

  let crossmodStoneFullSet = [
    { block: 'minecraft:tuff', stairs: 'copperandtuffbackport:tuff_stairs', slab: 'copperandtuffbackport:tuff_slab', wall: 'copperandtuffbackport:tuff_wall' }
  ]

  let crossmodStoneSlab = [
    { block: 'minecraft:redstone_lamp', slab: 'mcwlights:redstone_lamp_slab' },
    { block: 'minecraft:glowstone', slab: 'mcwlights:glowstone_slab' },
    { block: 'minecraft:shroomlight', slab: 'mcwlights:shroomlight_slab' },
    { block: 'minecraft:sea_lantern', slab: 'mcwlights:sea_lantern_slab' },
    { block: 'minecraft:white_terracotta', slab: 'mcwroofs:white_roof_slab' },
    { block: 'minecraft:light_gray_terracotta', slab: 'mcwroofs:light_gray_roof_slab' },
    { block: 'minecraft:gray_terracotta', slab: 'mcwroofs:gray_roof_slab' },
    { block: 'minecraft:black_terracotta', slab: 'mcwroofs:black_roof_slab' },
    { block: 'minecraft:terracotta', slab: 'mcwroofs:base_roof_slab' }
  ]

  let stoneSlab = [
    { modid: 'minecraft', block: 'smooth_stone', slab: 'smooth_stone_slab' },
    { modid: 'minecraft', block: 'cut_sandstone', slab: 'cut_sandstone_slab' },
    { modid: 'minecraft', block: 'cut_red_sandstone', slab: 'cut_red_sandstone_slab' },
    { modid: 'supplementaries', block: 'checker_block', slab: 'checker_slab' }
  ]

  event.remove({ id: /create:.*_slab_recycling/ })
  event.remove({
    type: 'minecraft:stonecutting',
    output: /mcwfences:.*railing.*/
  })

  woodFullSet.forEach(set => {
    event.remove([
      {
        type: 'minecraft:crafting_shaped',
        output: `${set.modid}:${set.stairs}`
      },
      {
        type: 'minecraft:crafting_shaped',
        output: `${set.modid}:${set.slab}`
      },
      {
        type: 'create:cutting',
        output: `${set.modid}:${set.stairs}`
      },
      {
        type: 'create:cutting',
        output: `${set.modid}:${set.slab}`
      }
    ])
    // Add shaped crafting recipes
    event.shaped(
      Item.of(`${set.modid}:${set.stairs}`, 4),
      [
        'B  ',
        'BB ',
        'BBB'
      ],
      { B: `${set.modid}:${set.block}` }
    ).id(`genesis:${set.stairs}_crafting`)
    event.shaped(
      Item.of(`${set.modid}:${set.slab}`, 6),
      [
        'BBB'
      ],
      { B: `${set.modid}:${set.block}` }
    ).id(`genesis:${set.slab}_crafting`)
    // Add cutting recipes
    event.recipes.create.cutting(
      `${set.modid}:${set.stairs}`,
      `${set.modid}:${set.block}`
    ).id(`genesis:${set.stairs}_cutting`)
    event.recipes.create.cutting(
      `2x ${set.modid}:${set.slab}`,
      `${set.modid}:${set.block}`
    ).id(`genesis:${set.slab}_cutting`)
    // Add recycling recipes
    event.shaped(
      Item.of(`${set.modid}:${set.block}`, 3),
      [
        'SS',
        'SS'
      ],
      { S: `${set.modid}:${set.stairs}` }
    ).id(`genesis:${set.block}_from_stairs`)
    event.shaped(
      Item.of(`${set.modid}:${set.block}`, 1),
      [
        'SS'
      ],
      { S: `${set.modid}:${set.slab}` }
    ).id(`genesis:${set.block}_from_slab`)
  })

  stoneFullSet.forEach(set => {
    // Remove existing recipes
    event.remove([
      {
        type: 'minecraft:crafting_shaped',
        output: `${set.modid}:${set.stairs}`
      },
      {
        type: 'minecraft:crafting_shaped',
        output: `${set.modid}:${set.slab}`
      },
      {
        type: 'minecraft:crafting_shaped',
        output: `${set.modid}:${set.wall}`
      },
      {
        type: 'minecraft:stonecutting',
        output: `${set.modid}:${set.stairs}`
      },
      {
        type: 'minecraft:stonecutting',
        output: `${set.modid}:${set.slab}`
      },
      {
        type: 'minecraft:stonecutting',
        output: `${set.modid}:${set.wall}`
      },
      {
        type: 'create:cutting',
        output: `${set.modid}:${set.stairs}`
      },
      {
        type: 'create:cutting',
        output: `${set.modid}:${set.slab}`
      }
    ])
    // Add shaped crafting recipes
    event.shaped(
      Item.of(`${set.modid}:${set.stairs}`, 4),
      [
        'B  ',
        'BB ',
        'BBB'
      ],
      { B: `${set.modid}:${set.block}` }
    ).id(`genesis:${set.stairs}_crafting`)
    event.shaped(
      Item.of(`${set.modid}:${set.slab}`, 6),
      [
        'BBB'
      ],
      { B: `${set.modid}:${set.block}` }
    ).id(`genesis:${set.slab}_crafting`)
    event.shaped(
      Item.of(`${set.modid}:${set.wall}`, 6),
      [
        'BBB',
        'BBB'
      ],
      { B: `${set.modid}:${set.block}` }
    ).id(`genesis:${set.wall}_crafting`)
    // Add stonecutting recipes
    event.stonecutting(
      `${set.modid}:${set.stairs}`,
      `${set.modid}:${set.block}`
    ).id(`genesis:${set.stairs}_stonecutting`)
    event.stonecutting(
      `2x ${set.modid}:${set.slab}`,
      `${set.modid}:${set.block}`
    ).id(`genesis:${set.slab}_stonecutting`)
    event.stonecutting(
      `${set.modid}:${set.wall}`,
      `${set.modid}:${set.block}`
    ).id(`genesis:${set.wall}_stonecutting`)
    // Add recycling recipes
    event.shaped(
      Item.of(`${set.modid}:${set.block}`, 3),
      [
        'SS',
        'SS'
      ],
      { S: `${set.modid}:${set.stairs}` }
    ).id(`genesis:${set.block}_from_stairs`)
    event.shaped(
      Item.of(`${set.modid}:${set.block}`, 1),
      [
        'SS'
      ],
      { S: `${set.modid}:${set.slab}` }
    ).id(`genesis:${set.block}_from_slab`)
  })

  stoneStairs.forEach(set => {
    // Remove existing recipes
    event.remove([
      {
        type: 'minecraft:crafting_shaped',
        output: `${set.modid}:${set.stairs}`
      },
      {
        type: 'minecraft:crafting_shaped',
        output: `${set.modid}:${set.slab}`
      },
      {
        type: 'minecraft:stonecutting',
        output: `${set.modid}:${set.stairs}`
      },
      {
        type: 'minecraft:stonecutting',
        output: `${set.modid}:${set.slab}`
      },
      {
        type: 'create:cutting',
        output: `${set.modid}:${set.stairs}`
      },
      {
        type: 'create:cutting',
        output: `${set.modid}:${set.slab}`
      }
    ])
    // Add shaped crafting recipes
    event.shaped(
      Item.of(`${set.modid}:${set.stairs}`, 4),
      [
        'B  ',
        'BB ',
        'BBB'
      ],
      { B: `${set.modid}:${set.block}` }
    ).id(`genesis:${set.stairs}_crafting`)
    event.shaped(
      Item.of(`${set.modid}:${set.slab}`, 6),
      [
        'BBB'
      ],
      { B: `${set.modid}:${set.block}` }
    ).id(`genesis:${set.slab}_crafting`)
    // Add stonecutting recipes
    event.stonecutting(
      `${set.modid}:${set.stairs}`,
      `${set.modid}:${set.block}`
    ).id(`genesis:${set.stairs}_stonecutting`)
    event.stonecutting(
      `2x ${set.modid}:${set.slab}`,
      `${set.modid}:${set.block}`
    ).id(`genesis:${set.slab}_stonecutting`)
    // Add recycling recipes
    event.shaped(
      Item.of(`${set.modid}:${set.block}`, 3),
      [
        'SS',
        'SS'
      ],
      { S: `${set.modid}:${set.stairs}` }
    ).id(`genesis:${set.block}_from_stairs`)
    event.shaped(
      Item.of(`${set.modid}:${set.block}`, 1),
      [
        'SS'
      ],
      { S: `${set.modid}:${set.slab}` }
    ).id(`genesis:${set.block}_from_slab`)
  })

  crossmodStoneFullSet.forEach(set => {
    event.remove([
      {
        type: 'minecraft:crafting_shaped',
        output: set.stairs
      },
      {
        type: 'minecraft:crafting_shaped',
        output: set.slab
      },
      {
        type: 'minecraft:crafting_shaped',
        output: set.wall
      },
      {
        type: 'minecraft:stonecutting',
        output: set.stairs
      },
      {
        type: 'minecraft:stonecutting',
        output: set.slab
      },
      {
        type: 'minecraft:stonecutting',
        output: set.wall
      },
      {
        type: 'create:cutting',
        output: set.stairs
      },
      {
        type: 'create:cutting',
        output: set.slab
      }
    ])
    // Add shaped crafting recipes
    event.shaped(
      Item.of(set.stairs, 4),
      [
        'B  ',
        'BB ',
        'BBB'
      ],
      { B: set.block }
    )
    event.shaped(
      Item.of(set.slab, 6),
      [
        'BBB'
      ],
      { B: set.block }
    )
    event.shaped(
      Item.of(set.wall, 6),
      [
        'BBB',
        'BBB'
      ],
      { B: set.block }
    )
    // Add stonecutting recipes
    event.stonecutting(
      set.stairs,
      set.block
    )
    event.stonecutting(
      `2x ${set.slab}`,
      set.block
    )
    event.stonecutting(
      set.wall,
      set.block
    )
    // Add recycling recipes
    event.shaped(
      Item.of(set.block, 3),
      [
        'SS',
        'SS'
      ],
      { S: set.stairs }
    )
    event.shaped(
      Item.of(set.block, 1),
      [
        'SS'
      ],
      { S: set.slab }
    )
  })

  crossmodStoneSlab.forEach(set => {
    event.remove([
      {
        type: 'minecraft:crafting_shaped',
        output: set.slab
      },
      {
        type: 'minecraft:stonecutting',
        output: set.slab
      },
      {
        type: 'create:cutting',
        output: set.slab
      }
    ])
    // Add shaped crafting recipes
    event.shaped(
      Item.of(set.slab, 6),
      [
        'BBB'
      ],
      { B: set.block }
    )
    // Add stonecutting recipes
    event.stonecutting(
      `2x ${set.slab}`,
      set.block
    )
    // Add recycling recipes
    event.shaped(
      Item.of(set.block, 1),
      [
        'SS'
      ],
      { S: set.slab }
    )
  })

  stoneSlab.forEach(set => {
    event.remove([
      {
        type: 'minecraft:crafting_shaped',
        output: `${set.modid}:${set.slab}`
      },
      {
        type: 'minecraft:stonecutting',
        output: `${set.modid}:${set.slab}`
      },
      {
        type: 'create:cutting',
        output: `${set.modid}:${set.slab}`
      }
    ])
    // Add shaped crafting recipes
    event.shaped(
      Item.of(`${set.modid}:${set.slab}`, 6),
      [
        'BBB'
      ],
      { B: `${set.modid}:${set.block}` }
    ).id(`genesis:${set.slab}_crafting`)
    // Add stonecutting recipes
    event.stonecutting(
      `2x ${set.modid}:${set.slab}`,
      `${set.modid}:${set.block}`
    ).id(`genesis:${set.slab}_stonecutting`)
    // Add recycling recipes
    event.shaped(
      Item.of(`${set.modid}:${set.block}`, 1),
      [
        'SS'
      ],
      { S: `${set.modid}:${set.slab}` }
    ).id(`genesis:${set.block}_from_slab`)
  })
})