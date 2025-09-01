ServerEvents.recipes(event => {
  const woodRoofs = [
    { type: 'oak', log: 'log' },
    { type: 'spruce', log: 'log' },
    { type: 'birch', log: 'log' },
    { type: 'jungle', log: 'log' },
    { type: 'acacia', log: 'log' },
    { type: 'dark_oak', log: 'log' },
    { type: 'mangrove', log: 'log' },
    { type: 'cherry', log: 'log' },
    { type: 'bamboo', log: 'block' },
    { type: 'crimson', log: 'stem' },
    { type: 'warped', log: 'stem' }
  ]

  const otherRoofs = [
    { in: 'minecraft:bamboo_mosaic', out: 'bamboo_mosaic' },
    { in: 'minecraft:hay_block', out: 'thatch' },
    { in: 'packedup:grass_bale', out: 'grass' }
  ]

  woodRoofs.forEach(wood => {
    // Log roofs
    event.stonecutting(
      `mcwroofs:${wood.type}_roof`,
      `minecraft:${wood.type}_${wood.log}`
    ).id(`mcwroofs:${wood.type}_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_attic_roof`,
      `minecraft:${wood.type}_${wood.log}`
    ).id(`mcwroofs:${wood.type}_attic_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_top_roof`,
      `minecraft:${wood.type}_${wood.log}`
    ).id(`mcwroofs:${wood.type}_top_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_lower_roof`,
      `minecraft:${wood.type}_${wood.log}`
    ).id(`mcwroofs:${wood.type}_lower_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_steep_roof`,
      `minecraft:${wood.type}_${wood.log}`
    ).id(`mcwroofs:${wood.type}_steep_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_upper_lower_roof`,
      `minecraft:${wood.type}_${wood.log}`
    ).id(`mcwroofs:${wood.type}_upper_lower_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_upper_steep_roof`,
      `minecraft:${wood.type}_${wood.log}`
    ).id(`mcwroofs:${wood.type}_upper_steep_roof`)

    // Planks roofs
    event.stonecutting(
      `mcwroofs:${wood.type}_planks_roof`,
      `minecraft:${wood.type}_planks`
    ).id(`mcwroofs:${wood.type}_planks_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_planks_attic_roof`,
      `minecraft:${wood.type}_planks`
    ).id(`mcwroofs:${wood.type}_planks_attic_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_planks_top_roof`,
      `minecraft:${wood.type}_planks`
    ).id(`mcwroofs:${wood.type}_planks_top_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_planks_lower_roof`,
      `minecraft:${wood.type}_planks`
    ).id(`mcwroofs:${wood.type}_planks_lower_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_planks_steep_roof`,
      `minecraft:${wood.type}_planks`
    ).id(`mcwroofs:${wood.type}_planks_steep_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_planks_upper_lower_roof`,
      `minecraft:${wood.type}_planks`
    ).id(`mcwroofs:${wood.type}_planks_upper_lower_roof`)
    event.stonecutting(
      `mcwroofs:${wood.type}_planks_upper_steep_roof`,
      `minecraft:${wood.type}_planks`
    ).id(`mcwroofs:${wood.type}_planks_upper_steep_roof`)
  })

  // Log roofs
  otherRoofs.forEach(type => {
    event.stonecutting(
      `mcwroofs:${type.out}_roof`,
      type.in
    ).id(`mcwroofs:${type.out}_roof`)
    event.stonecutting(
      `mcwroofs:${type.out}_attic_roof`,
      type.in
    ).id(`mcwroofs:${type.out}_attic_roof`)
    event.stonecutting(
      `mcwroofs:${type.out}_top_roof`,
      type.in
    ).id(`mcwroofs:${type.out}_top_roof`)
    event.stonecutting(
      `mcwroofs:${type.out}_lower_roof`,
      type.in
    ).id(`mcwroofs:${type.out}_lower_roof`)
    event.stonecutting(
      `mcwroofs:${type.out}_steep_roof`,
      type.in
    ).id(`mcwroofs:${type.out}_steep_roof`)
    event.stonecutting(
      `mcwroofs:${type.out}_upper_lower_roof`,
      type.in
    ).id(`mcwroofs:${type.out}_upper_lower_roof`)
    event.stonecutting(
      `mcwroofs:${type.out}_upper_steep_roof`,
      type.in
    ).id(`mcwroofs:${type.out}_upper_steep_roof`)
  })
})
