ServerEvents.tags('item', event => {
  // List of item types from Rechiseled to be added to Chipped groups
  let rechiseledType = [
    'acacia_planks',
    'amethyst_block',
    'andesite',
    'bamboo_planks',
    'basalt',
    'birch_planks',
    'blackstone',
    'blue_ice',
    'bone_block',
    'cherry_planks',
    'coal_block',
    'cobblestone',
    'crimson_planks',
    'dark_oak_planks',
    'dark_prismarine',
    'diamond_block',
    'diorite',
    'dirt',
    'emerald_block',
    'end_stone',
    'glowstone',
    'gold_block',
    'granite',
    'iron_block',
    'jungle_planks',
    'lapis_block',
    'mangrove_planks',
    'mossy_cobblestone',
    'netherite_block',
    'netherrack',
    'nether_bricks',
    'oak_planks',
    'obsidian',
    'prismarine_bricks',
    'quartz_block',
    'redstone_block',
    'red_nether_bricks',
    'red_sandstone',
    'sandstone',
    'spruce_planks',
    'warped_planks'
  ]

  // Add Chipped tag for all items in each 'rechiseledType'
  rechiseledType.forEach(rechiseledType => {
    Ingredient.of(new RegExp(`rechiseled:${rechiseledType}.*`)).itemIds.forEach(itemInstance =>
      event.add(`chipped:${rechiseledType}`, `${itemInstance}`)
    )
  })
})

// Rechiseled-Chipped tag compats that don't match the generic pattern:

// borderless_bricks
ServerEvents.tags('item', event => {
  let borderlessBricks = [
    'chipped:borderless_bricks_bricks',
    'chipped:borderless_bricks_mini_tiles',
    'chipped:borderless_bricks_pillar',
    'chipped:borderless_bricks_pillar_top',
    'chipped:borderless_bricks_scales',
    'chipped:angry_borderless_bricks',
    'chipped:blank_borderless_bricks_carving',
    'chipped:carved_borderless_bricks',
    'chipped:checkered_borderless_bricks_tiles',
    'chipped:cobbled_borderless_bricks',
    'chipped:cracked_borderless_bricks_bricks',
    'chipped:cracked_disordered_borderless_bricks_bricks',
    'chipped:cracked_flat_borderless_bricks_tiles',
    'chipped:creeper_borderless_bricks_carving',
    'chipped:crying_borderless_bricks',
    'chipped:cut_blank_borderless_bricks',
    'chipped:glad_borderless_bricks',
    'chipped:duh_borderless_bricks',
    'chipped:engraved_borderless_bricks',
    'chipped:eroded_borderless_bricks',
    'chipped:etched_borderless_bricks_bricks',
    'chipped:flat_borderless_bricks_tiles',
    'chipped:inlayed_borderless_bricks',
    'chipped:inscribed_borderless_bricks',
    'chipped:loded_borderless_bricks',
    'chipped:offset_borderless_bricks_bricks',
    'chipped:pillar_borderless_bricks_bricks',
    'chipped:prismal_borderless_bricks_remnants',
    'chipped:rough_borderless_bricks',
    'chipped:rounded_borderless_bricks_bricks',
    'chipped:runic_carved_borderless_bricks',
    'chipped:sad_borderless_bricks',
    'chipped:sanded_borderless_bricks',
    'chipped:small_borderless_bricks_bricks',
    'chipped:smooth_inlayed_borderless_bricks',
    'chipped:smooth_ringed_borderless_bricks',
    'chipped:smoothed_double_inlayed_borderless_bricks',
    'chipped:spider_borderless_bricks_carving',
    'chipped:spiraled_borderless_bricks',
    'chipped:stacked_borderless_bricks_bricks',
    'chipped:tiled_borderless_bricks',
    'chipped:tiny_borderless_bricks_bricks',
    'chipped:tiny_layered_borderless_bricks_bricks',
    'chipped:tiny_layered_borderless_bricks_slabs',
    'chipped:trodden_borderless_bricks',
    'chipped:unamused_borderless_bricks',
    'chipped:vertical_cut_borderless_bricks',
    'chipped:vertical_disordered_borderless_bricks_bricks',
    'chipped:weathered_borderless_bricks',
    'chipped:bordered_borderless_bricks',
    'chipped:brick_bordered_borderless_bricks',
    'chipped:cut_borderless_bricks_column',
    'chipped:edged_borderless_bricks_bricks',
    'chipped:overlapping_borderless_bricks_tiles',
    'chipped:polished_borderless_bricks',
    'chipped:smooth_borderless_bricks_column',
    'chipped:thick_inlayed_borderless_bricks',
    'chipped:tiled_borderless_bricks_column',
    'chipped:tiled_bordered_borderless_bricks',
    'chipped:tiny_brick_bordered_borderless_bricks',
    'chipped:curly_borderless_bricks_pillar',
    'chipped:fine_borderless_bricks_pillar',
    'chipped:ornate_borderless_bricks_pillar',
    'chipped:simple_borderless_bricks_pillar',
    'chipped:massive_borderless_bricks_bricks'
  ]
  borderlessBricks.forEach(itemInstance =>
    event.add('chipped:bricks', `${itemInstance}`)
  )
})

// cobbled_deepslate
ServerEvents.tags('item', event => {
  event.add('chipped:cobbled_deepslate', 'minecraft:cobbled_deepslate')
  event.add('chipped:cobbled_deepslate', 'minecraft:chiseled_deepslate')
  event.add('chipped:cobbled_deepslate', 'minecraft:deepslate_tiles')
  event.add('chipped:cobbled_deepslate', 'minecraft:polished_deepslate')
  event.add('chipped:cobbled_deepslate', 'minecraft:deepslate_bricks')
  Ingredient.of(new RegExp('rechiseled:cobbled_deepslate.*')).itemIds.forEach(itemInstance =>
    event.add('chipped:cobbled_deepslate', `${itemInstance}`)
  )
})

// copper_block
ServerEvents.tags('item', event => {
  Ingredient.of(new RegExp('rechiseled:copper_block.*')).itemIds.forEach(itemInstance =>
    event.add('chipped:waxed_copper_block', `${itemInstance}`)
  )
})

// prismarine_bricks
ServerEvents.tags('item', event => {
  event.add('chipped:prismarine_bricks', 'minecraft:prismarine_bricks')
})

// purpur
ServerEvents.tags('item', event => {
  event.add('chipped:purpur_block', 'minecraft:purpur_pillar')
  Ingredient.of(new RegExp('rechiseled:purpur.*')).itemIds.forEach(itemInstance =>
    event.add('chipped:purpur_block', `${itemInstance}`)
  )
})

// stone & smooth_stone
ServerEvents.tags('item', event => {
  event.add('chipped:stone', 'minecraft:stone_bricks')
  event.add('chipped:stone', 'minecraft:chiseled_stone_bricks')
  Ingredient.of(new RegExp(`rechiseled:stone_(?!smooth).*`)).itemIds.forEach(itemInstance =>
    event.add('chipped:stone', `${itemInstance}`)
  ),
    Ingredient.of(new RegExp(`rechiseled:stone_smooth.*`)).itemIds.forEach(itemInstance =>
      event.add('chipped:smooth_stone', `${itemInstance}`)
    )
})

// Macaw's Windows mosaic glass
ServerEvents.recipes(event => {
  global.colors.forEach(color => {
    event.remove([
      { type: 'minecraft:crafting_shaped', input: `mcwwindows:${color}_mosaic_glass` },
      { type: 'minecraft:crafting_shaped', output: `mcwwindows:${color}_mosaic_glass` },
      { type: 'minecraft:crafting_shaped', input: `mcwwindows:${color}_mosaic_glass_pane` },
      { type: 'minecraft:crafting_shaped', output: `mcwwindows:${color}_mosaic_glass_pane` }
    ])
  })
})
ServerEvents.tags('item', event => {
  global.colors.forEach(color => {
    event.add(`chipped:${color}_stained_glass`, `mcwwindows:${color}_mosaic_glass`)
    event.add(`chipped:${color}_stained_glass_pane`, `mcwwindows:${color}_mosaic_glass_pane`)
  })
})

// Add remaining Rechiseled-compatible items to relevant Chipped tags
ServerEvents.tags('item', event => {
  event.add('chipped:andesite', 'minecraft:polished_andesite')
  event.add('chipped:diorite', 'minecraft:polished_diorite')
  event.add('chipped:granite', 'minecraft:polished_granite')
  event.add('chipped:basalt', 'minecraft:polished_basalt')
  event.add('chipped:blackstone', 'minecraft:polished_blackstone')
  event.add('chipped:blackstone', 'minecraft:polished_blackstone_bricks')
  event.add('chipped:blackstone', 'minecraft:chiseled_polished_blackstone')
  event.add('chipped:end_stone', 'minecraft:end_stone_bricks')
  event.add('chipped:nether_bricks', 'minecraft:chiseled_nether_bricks')
  event.add('chipped:quartz_block', 'minecraft:quartz_pillar')
  event.add('chipped:quartz_block', 'minecraft:quartz_bricks')
  event.add('chipped:quartz_block', 'minecraft:chiseled_quartz_block')
  event.add('chipped:red_sandstone', 'minecraft:chiseled_red_sandstone')
  event.add('chipped:red_sandstone', 'minecraft:cut_red_sandstone')
  event.add('chipped:sandstone', 'minecraft:chiseled_sandstone')
  event.add('chipped:sandstone', 'minecraft:cut_sandstone')
})

// Add '#chipped:obsidian' block tag to 'rechiseled:obsidian' blocks
// (For 'custom_nether_portals' datapack compat)
ServerEvents.tags('block', event => {
  Ingredient.of(new RegExp(`rechiseled:obsidian.*`)).itemIds.forEach(itemInstance =>
    event.add('chipped:obsidian', `${itemInstance}`)
  )
})

// Remove all items from redundant tags
ServerEvents.tags('item', event => {
  event.removeAll('chipped:special_lantern')
  event.removeAll('chipped:special_soul_lantern')
  event.removeAll('chipped:borderless_bricks')
})

ServerEvents.recipes(event => {
  // List of tags from Chipped to have 'create:cutting' recipes added
  let chippedTag = [
    'acacia_door',
    'acacia_leaves',
    'acacia_log',
    'acacia_planks',
    'acacia_trapdoor',
    'amethyst_block',
    'ancient_debris',
    'andesite',
    'bamboo_door',
    'bamboo_planks',
    'bamboo_trapdoor',
    'barrel',
    'basalt',
    'birch_door',
    'birch_leaves',
    'birch_log',
    'birch_planks',
    'birch_trapdoor',
    'blackstone',
    'black_carpet',
    'black_concrete',
    'black_glazed_terracotta',
    'black_stained_glass',
    'black_stained_glass_pane',
    'black_terracotta',
    'black_wool',
    'blue_carpet',
    'blue_concrete',
    'blue_glazed_terracotta',
    'blue_ice',
    'blue_stained_glass',
    'blue_stained_glass_pane',
    'blue_terracotta',
    'blue_wool',
    'bone_block',
    'bookshelf',
    'bricks',
    'brown_carpet',
    'brown_concrete',
    'brown_glazed_terracotta',
    'brown_mushroom',
    'brown_mushroom_block',
    'brown_stained_glass',
    'brown_stained_glass_pane',
    'brown_terracotta',
    'brown_wool',
    'calcite',
    'carved_pumpkin',
    'cherry_door',
    'cherry_log',
    'cherry_planks',
    'cherry_trapdoor',
    'clay',
    'coal_block',
    'cobbled_deepslate',
    'cobblestone',
    'cobweb',
    'crimson_door',
    'crimson_fungus',
    'crimson_planks',
    'crimson_roots',
    'crimson_stem',
    'crimson_trapdoor',
    'crying_obsidian',
    'cyan_carpet',
    'cyan_concrete',
    'cyan_glazed_terracotta',
    'cyan_stained_glass',
    'cyan_stained_glass_pane',
    'cyan_terracotta',
    'cyan_wool',
    'dark_oak_door',
    'dark_oak_leaves',
    'dark_oak_log',
    'dark_oak_planks',
    'dark_oak_trapdoor',
    'dark_prismarine',
    'deepslate',
    'diamond_block',
    'diorite',
    'dirt',
    'dried_kelp_block',
    'dripstone_block',
    'emerald_block',
    'end_stone',
    'gilded_blackstone',
    'glass',
    'glass_pane',
    'glowstone',
    'gold_block',
    'granite',
    'gravel',
    'gray_carpet',
    'gray_concrete',
    'gray_glazed_terracotta',
    'gray_stained_glass',
    'gray_stained_glass_pane',
    'gray_terracotta',
    'gray_wool',
    'green_carpet',
    'green_concrete',
    'green_glazed_terracotta',
    'green_stained_glass',
    'green_stained_glass_pane',
    'green_terracotta',
    'green_wool',
    'hay_block',
    'ice',
    'iron_bars',
    'iron_block',
    'jack_o_lantern',
    'jungle_door',
    'jungle_leaves',
    'jungle_log',
    'jungle_planks',
    'jungle_trapdoor',
    'ladder',
    'lantern',
    'lapis_block',
    'light_blue_carpet',
    'light_blue_concrete',
    'light_blue_glazed_terracotta',
    'light_blue_stained_glass',
    'light_blue_stained_glass_pane',
    'light_blue_terracotta',
    'light_blue_wool',
    'light_gray_carpet',
    'light_gray_concrete',
    'light_gray_glazed_terracotta',
    'light_gray_stained_glass',
    'light_gray_stained_glass_pane',
    'light_gray_terracotta',
    'light_gray_wool',
    'lily_pad',
    'lime_carpet',
    'lime_concrete',
    'lime_glazed_terracotta',
    'lime_stained_glass',
    'lime_stained_glass_pane',
    'lime_terracotta',
    'lime_wool',
    'lodestone',
    'magenta_carpet',
    'magenta_concrete',
    'magenta_glazed_terracotta',
    'magenta_stained_glass',
    'magenta_stained_glass_pane',
    'magenta_terracotta',
    'magenta_wool',
    'magma_block',
    'mangrove_door',
    'mangrove_log',
    'mangrove_planks',
    'mangrove_roots',
    'mangrove_trapdoor',
    'melon',
    'mossy_cobblestone',
    'mossy_stone_bricks',
    'moss_block',
    'mud',
    'mud_bricks',
    'mushroom_stem',
    'netherite_block',
    'netherrack',
    'nether_bricks',
    'nether_sprouts',
    'nether_wart_block',
    'oak_door',
    'oak_leaves',
    'oak_log',
    'oak_planks',
    'oak_trapdoor',
    'obsidian',
    'ochre_froglight',
    'orange_carpet',
    'orange_concrete',
    'orange_glazed_terracotta',
    'orange_stained_glass',
    'orange_stained_glass_pane',
    'orange_terracotta',
    'orange_wool',
    'packed_ice',
    'packed_mud',
    'pearlescent_froglight',
    'pink_carpet',
    'pink_concrete',
    'pink_glazed_terracotta',
    'pink_stained_glass',
    'pink_stained_glass_pane',
    'pink_terracotta',
    'pink_wool',
    'pointed_dripstone',
    'prismarine',
    'prismarine_bricks',
    'pumpkin',
    'purple_carpet',
    'purple_concrete',
    'purple_glazed_terracotta',
    'purple_stained_glass',
    'purple_stained_glass_pane',
    'purple_terracotta',
    'purple_wool',
    'purpur_block',
    'quartz_block',
    'raw_copper_block',
    'raw_gold_block',
    'raw_iron_block',
    'redstone_block',
    'redstone_lamp',
    'redstone_torch',
    'red_carpet',
    'red_concrete',
    'red_glazed_terracotta',
    'red_mushroom',
    'red_mushroom_block',
    'red_nether_bricks',
    'red_sandstone',
    'red_stained_glass',
    'red_stained_glass_pane',
    'red_terracotta',
    'red_wool',
    'sand',
    'sandstone',
    'sea_lantern',
    'shroomlight',
    'smooth_stone',
    'snow_block',
    'soul_lantern',
    'soul_sand',
    'sponge',
    'spruce_door',
    'spruce_leaves',
    'spruce_log',
    'spruce_planks',
    'spruce_trapdoor',
    'stone',
    'stripped_acacia_log',
    'stripped_birch_log',
    'stripped_cherry_log',
    'stripped_crimson_stem',
    'stripped_dark_oak_log',
    'stripped_jungle_log',
    'stripped_mangrove_log',
    'stripped_oak_log',
    'stripped_spruce_log',
    'stripped_warped_stem',
    'terracotta',
    'torch',
    'tuff',
    'verdant_froglight',
    'vine',
    'warped_door',
    'warped_fungus',
    'warped_planks',
    'warped_roots',
    'warped_stem',
    'warped_trapdoor',
    'warped_wart_block',
    'waxed_copper_block',
    'waxed_exposed_copper_block',
    'waxed_oxidized_copper',
    'waxed_weathered_copper',
    'white_carpet',
    'white_concrete',
    'white_glazed_terracotta',
    'white_stained_glass',
    'white_stained_glass_pane',
    'white_terracotta',
    'white_wool',
    'yellow_carpet',
    'yellow_concrete',
    'yellow_glazed_terracotta',
    'yellow_stained_glass',
    'yellow_stained_glass_pane',
    'yellow_terracotta',
    'yellow_wool'
  ]

  // Add 'create:cutting' recipe for all items in each 'chippedTag'
  chippedTag.forEach(chippedTag => {
    Ingredient.of(`#chipped:${chippedTag}`).itemIds.forEach(taggedItem =>
      event.custom({
        "type": "create:cutting",
        "ingredients": [{ "tag": `chipped:${chippedTag}` }],
        "results": [{ "item": `${taggedItem}` }],
        "processingTime": 200
      })
    )
  })
})

// Edit chisel crafting recipe to use Chipped tables
ServerEvents.recipes(event => {
  event.remove({ output: 'rechiseled:chisel' })
  event.shaped(
    Item.of('rechiseled:chisel', 1),
    [
      'BGC',
      'LIM',
      'SAT'
    ],
    {
      B: 'chipped:botanist_workbench',
      G: 'chipped:glassblower',
      C: 'chipped:carpenters_table',
      L: 'chipped:loom_table',
      I: 'minecraft:iron_ingot',
      M: 'chipped:mason_table',
      S: 'minecraft:stick',
      A: 'chipped:alchemy_bench',
      T: 'chipped:tinkering_table'
    }
  ).id('rechiseled:chisel')
})