ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, output, count) => {
    event.stonecutting(
      Item.of(output, count),
      input
    ).id(`genesis:${recipeId}_stonecutting`)
  }

  // Add individual recipes
  add('advanced_display_half_panel', 'createrailwaysnavigator:advanced_display_block', 'createrailwaysnavigator:advanced_display_half_panel', 8)
  add('advanced_display_panel', 'createrailwaysnavigator:advanced_display_block', 'createrailwaysnavigator:advanced_display_panel', 4)
  add('advanced_display_slab', 'createrailwaysnavigator:advanced_display_block', 'createrailwaysnavigator:advanced_display_slab', 2)
  add('advanced_display_sloped', 'createrailwaysnavigator:advanced_display_block', 'createrailwaysnavigator:advanced_display_sloped', 2)
  add('advanced_display_small', 'createrailwaysnavigator:advanced_display_block', 'createrailwaysnavigator:advanced_display_small', 4)
  add('advanced_display', 'createrailwaysnavigator:advanced_display_block', 'createrailwaysnavigator:advanced_display', 2)
  add('copycat_block_from_zinc_ingot', 'create:zinc_ingot', 'copycats:copycat_block', 1)
  add('riveted_locometal', 'minecraft:iron_block', 'railways:riveted_locometal', 1)
  add('rose_quartz_tiles_from_polished_rose_quartz', 'create_ironworks:rose_quartz_block', 'create:rose_quartz_tiles', 1)
  add('rose_quartz_tiles_from_small_rose_quartz_tiles', 'create:small_rose_quartz_tiles', 'create:rose_quartz_tiles', 1)
  add('small_rose_quartz_tiles_from_polished_rose_quartz', 'create_ironworks:rose_quartz_block', 'create:small_rose_quartz_tiles', 1)
  add('small_rose_quartz_tiles_from_rose_quartz_tiles', 'create:rose_quartz_tiles', 'create:small_rose_quartz_tiles', 1)

  // Add bulk recipes
  global.MCW_ROOFS.forEach(entry => {
    const { input, name } = entry
    add(`${name}_attic_roof`, input, `mcwroofs:${name}_attic_roof`, 1)
    add(`${name}_lower_roof`, input, `mcwroofs:${name}_lower_roof`, 1)
    add(`${name}_roof`, input, `mcwroofs:${name}_roof`, 1)
    add(`${name}_steep_roof`, input, `mcwroofs:${name}_steep_roof`, 1)
    add(`${name}_top_roof`, input, `mcwroofs:${name}_top_roof`, 1)
    add(`${name}_upper_lower_roof`, input, `mcwroofs:${name}_upper_lower_roof`, 1)
    add(`${name}_upper_steep_roof`, input, `mcwroofs:${name}_upper_steep_roof`, 1)
  })

  global.WOOD_TYPES.forEach(entry => {
    const { type, name, log, bark, stripped, stripped_bark, planks } = entry
    add(`${name}_attic_roof`, planks, `mcwroofs:${name}_attic_roof`, 1)
    add(`${name}_lower_roof`, planks, `mcwroofs:${name}_lower_roof`, 1)
    add(`${name}_planks_attic_roof`, planks, `mcwroofs:${name}_planks_attic_roof`, 1)
    add(`${name}_planks_lower_roof`, planks, `mcwroofs:${name}_planks_lower_roof`, 1)
    add(`${name}_planks_roof`, planks, `mcwroofs:${name}_planks_roof`, 1)
    add(`${name}_planks_steep_roof`, planks, `mcwroofs:${name}_planks_steep_roof`, 1)
    add(`${name}_planks_top_roof`, planks, `mcwroofs:${name}_planks_top_roof`, 1)
    add(`${name}_planks_upper_lower_roof`, planks, `mcwroofs:${name}_planks_upper_lower_roof`, 1)
    add(`${name}_planks_upper_steep_roof`, planks, `mcwroofs:${name}_planks_upper_steep_roof`, 1)
    add(`${name}_roof`, planks, `mcwroofs:${name}_roof`, 1)
    add(`${name}_steep_roof`, planks, `mcwroofs:${name}_steep_roof`, 1)
    add(`${name}_top_roof`, planks, `mcwroofs:${name}_top_roof`, 1)
    add(`${name}_upper_lower_roof`, planks, `mcwroofs:${name}_upper_lower_roof`, 1)
    add(`${name}_upper_steep_roof`, planks, `mcwroofs:${name}_upper_steep_roof`, 1)
  })

  global.STONECUTTING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab, wall } = entry
    add(`${name}_slab`, block, slab, 2)
    if (stairs != null) {
      add(`${name}_stairs`, block, stairs, 1)
    }
    if (wall != null) {
      add(`${name}_wall`, block, wall, 1)
    }
  })

  global.COPPER_CONVERSION.forEach(entry => {
    const { modid, block } = entry
    add(`${block}_from_copper_block`, 'minecraft:copper_block', `${modid}:${block}`, 1)
    add(`exposed_${block}_from_exposed_copper`, 'minecraft:exposed_copper', `${modid}:exposed_${block}`, 1)
    add(`oxidized_${block}_from_oxidized_copper`, 'minecraft:oxidized_copper', `${modid}:oxidized_${block}`, 1)
    add(`waxed_${block}_from_waxed_copper_block`, 'minecraft:waxed_copper_block', `${modid}:waxed_${block}`, 1)
    add(`waxed_exposed_${block}_from_waxed_exposed_copper`, 'minecraft:waxed_exposed_copper', `${modid}:waxed_exposed_${block}`, 1)
    add(`waxed_oxidized_${block}_from_waxed_oxidized_copper`, 'minecraft:waxed_oxidized_copper', `${modid}:waxed_oxidized_${block}`, 1)
    add(`waxed_weathered_${block}_from_waxed_weathered_copper`, 'minecraft:waxed_weathered_copper', `${modid}:waxed_weathered_${block}`, 1)
    add(`weathered_${block}_from_weathered_copper`, 'minecraft:weathered_copper', `${modid}:weathered_${block}`, 1)
  })

  global.COPYCATS.forEach(entry => {
    const { modid, output, count } = entry
    add(`${output}_from_block`, 'copycats:copycat_block', `${modid}:${output}`, count)
    add(`${output}_from_zinc_ingot`, 'create:zinc_ingot', `${modid}:${output}`, count)
  })

  global.COLORS_PFX.forEach(entry => {
    add(`${entry}book_bundle_pile_from_block`, `packedup:${entry}book_bundle`, `packedup:${entry}book_pile`, 4)
    add(`${entry}book_bundle_pile_from_slab`, `packedup:${entry}book_bundle_slab`, `packedup:${entry}book_pile`, 2)
    add(`${entry}book_bundle_slab_from_block`, `packedup:${entry}book_bundle`, `packedup:${entry}book_bundle_slab`, 2)
    add(`${entry}brass_wrapped_locometal_boiler`, `railways:${entry}brass_wrapped_locometal`, `railways:${entry}brass_wrapped_locometal_boiler`, 1)
    add(`${entry}copper_wrapped_locometal_boiler`, `railways:${entry}copper_wrapped_locometal`, `railways:${entry}copper_wrapped_locometal_boiler`, 1)
    add(`${entry}iron_wrapped_locometal_boiler`, `railways:${entry}iron_wrapped_locometal`, `railways:${entry}iron_wrapped_locometal_boiler`, 1)
    add(`${entry}locometal_boiler`, `railways:${entry}slashed_locometal`, `railways:${entry}locometal_boiler`, 1)
  })
})