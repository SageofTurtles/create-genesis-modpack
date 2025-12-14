ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (input, output, count, recipeId) => {
    event.stonecutting(
      Item.of(output, count),
      input
    ).id(`genesis:${recipeId}_stonecutting`)
  }

  // Add individual recipes
  add(
    'create:zinc_ingot',
    'copycats:copycat_block', 1,
    'copycat_block_from_zinc_ingot'
  )

  // Add bulk recipes
  global.STONECUTTING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab, wall } = entry
    add(
      block,
      slab, 2,
      `${name}_slab`
    )
    if (stairs != null) {
      add(
        block,
        stairs, 1,
        `${name}_stairs`
      )
    }
    if (wall != null) {
      add(
        block,
        wall, 1,
        `${name}_wall`
      )
    }
  })

  global.COPPER_CONVERSION.forEach(entry => {
    const { base, oxidized, cut, shingles, tiles, chiseled } = entry
    add(
      `minecraft:${base}`,
      `minecraft:${cut}`, 1,
      `${cut}_from_${base}`
    )
    add(
      `minecraft:exposed_${oxidized}`,
      `minecraft:exposed_${cut}`, 1,
      `exposed_${cut}_from_exposed_${oxidized}`
    )
    add(
      `minecraft:weathered_${oxidized}`,
      `minecraft:weathered_${cut}`, 1,
      `weathered_${cut}_from_weathered_${oxidized}`
    )
    add(
      `minecraft:oxidized_${oxidized}`,
      `minecraft:oxidized_${cut}`, 1,
      `oxidized_${cut}_from_oxidized_${oxidized}`
    )
    add(
      `minecraft:waxed_${base}`,
      `minecraft:waxed_${cut}`, 1,
      `waxed_${cut}_from_waxed_${base}`
    )
    add(
      `minecraft:waxed_exposed_${oxidized}`,
      `minecraft:waxed_exposed_${cut}`, 1,
      `waxed_exposed_${cut}_from_waxed_exposed_${oxidized}`
    )
    add(
      `minecraft:waxed_weathered_${oxidized}`,
      `minecraft:waxed_weathered_${cut}`, 1,
      `waxed_weathered_${cut}_from_waxed_weathered_${oxidized}`
    )
    add(
      `minecraft:waxed_oxidized_${oxidized}`,
      `minecraft:waxed_oxidized_${cut}`, 1,
      `waxed_oxidized_${cut}_from_waxed_oxidized_${oxidized}`
    )
    add(
      `minecraft:${base}`,
      `create:${shingles}`, 1,
      `${shingles}_from_${base}`
    )
    add(
      `minecraft:exposed_${oxidized}`,
      `create:exposed_${shingles}`, 1,
      `exposed_${shingles}_from_exposed_${oxidized}`
    )
    add(
      `minecraft:weathered_${oxidized}`,
      `create:weathered_${shingles}`, 1,
      `weathered_${shingles}_from_weathered_${oxidized}`
    )
    add(
      `minecraft:oxidized_${oxidized}`,
      `create:oxidized_${shingles}`, 1,
      `oxidized_${shingles}_from_oxidized_${oxidized}`
    )
    add(
      `minecraft:waxed_${base}`,
      `create:waxed_${shingles}`, 1,
      `waxed_${shingles}_from_waxed_${base}`
    )
    add(
      `minecraft:waxed_exposed_${oxidized}`,
      `create:waxed_exposed_${shingles}`, 1,
      `waxed_exposed_${shingles}_from_waxed_exposed_${oxidized}`
    )
    add(
      `minecraft:waxed_weathered_${oxidized}`,
      `create:waxed_weathered_${shingles}`, 1,
      `waxed_weathered_${shingles}_from_waxed_weathered_${oxidized}`
    )
    add(
      `minecraft:waxed_oxidized_${oxidized}`,
      `create:waxed_oxidized_${shingles}`, 1,
      `waxed_oxidized_${shingles}_from_waxed_oxidized_${oxidized}`
    )
    add(
      `minecraft:${base}`,
      `create:${tiles}`, 1,
      `${tiles}_from_${base}`
    )
    add(
      `minecraft:exposed_${oxidized}`,
      `create:exposed_${tiles}`, 1,
      `exposed_${tiles}_from_exposed_${oxidized}`
    )
    add(
      `minecraft:weathered_${oxidized}`,
      `create:weathered_${tiles}`, 1,
      `weathered_${tiles}_from_weathered_${oxidized}`
    )
    add(
      `minecraft:oxidized_${oxidized}`,
      `create:oxidized_${tiles}`, 1,
      `oxidized_${tiles}_from_oxidized_${oxidized}`
    )
    add(
      `minecraft:waxed_${base}`,
      `create:waxed_${tiles}`, 1,
      `waxed_${tiles}_from_waxed_${base}`
    )
    add(
      `minecraft:waxed_exposed_${oxidized}`,
      `create:waxed_exposed_${tiles}`, 1,
      `waxed_exposed_${tiles}_from_waxed_exposed_${oxidized}`
    )
    add(
      `minecraft:waxed_weathered_${oxidized}`,
      `create:waxed_weathered_${tiles}`, 1,
      `waxed_weathered_${tiles}_from_waxed_weathered_${oxidized}`
    )
    add(
      `minecraft:waxed_oxidized_${oxidized}`,
      `create:waxed_oxidized_${tiles}`, 1,
      `waxed_oxidized_${tiles}_from_waxed_oxidized_${oxidized}`
    )
    if (chiseled != null) {
      add(
        `minecraft:${base}`,
        `copperandtuffbackport:${chiseled}`, 1,
        `${chiseled}_from_${base}`
      )
      add(
        `minecraft:exposed_${oxidized}`,
        `copperandtuffbackport:exposed_${chiseled}`, 1,
        `exposed_${chiseled}_from_exposed_${oxidized}`
      )
      add(
        `minecraft:weathered_${oxidized}`,
        `copperandtuffbackport:weathered_${chiseled}`, 1,
        `weathered_${chiseled}_from_weathered_${oxidized}`
      )
      add(
        `minecraft:oxidized_${oxidized}`,
        `copperandtuffbackport:oxidized_${chiseled}`, 1,
        `oxidized_${chiseled}_from_oxidized_${oxidized}`
      )
      add(
        `minecraft:waxed_${base}`,
        `copperandtuffbackport:waxed_${chiseled}`, 1,
        `waxed_${chiseled}_from_waxed_${base}`
      )
      add(
        `minecraft:waxed_exposed_${oxidized}`,
        `copperandtuffbackport:waxed_exposed_${chiseled}`, 1,
        `waxed_exposed_${chiseled}_from_waxed_exposed_${oxidized}`
      )
      add(
        `minecraft:waxed_weathered_${oxidized}`,
        `copperandtuffbackport:waxed_weathered_${chiseled}`, 1,
        `waxed_weathered_${chiseled}_from_waxed_weathered_${oxidized}`
      )
      add(
        `minecraft:waxed_oxidized_${oxidized}`,
        `copperandtuffbackport:waxed_oxidized_${chiseled}`, 1,
        `waxed_oxidized_${chiseled}_from_waxed_oxidized_${oxidized}`
      )
    }
  })

  global.COPYCATS.forEach(entry => {
    const { modid, output, count } = entry
    add(
      'create:zinc_ingot',
      `${modid}:${output}`, count,
      `${output}_from_zinc_ingot`
    )
    add(
      'copycats:copycat_block',
      `${modid}:${output}`, count,
      `${output}_from_block`
    )
  })
})