ServerEvents.recipes(event => {
  // Define functions to create recipes
  const custom = (pattern, keys, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      pattern,
      keys
    ).id(`genesis:${recipeId}_shaped`)
  }
  const oneXone = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['A'],
      { A: input }
    ).id(`genesis:${recipeId}`)
  }
  const oneXthree = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['A', 'A', 'A'],
      { A: input }
    ).id(`genesis:${recipeId}`)
  }
  const twoXone = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AA'],
      { A: input }
    ).id(`genesis:${recipeId}`)
  }
  const twoXtwo = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AA', 'AA'],
      { A: input }
    ).id(`genesis:${recipeId}`)
  }
  const twoXthree = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AA', 'AA', 'AA'],
      { A: input }
    ).id(`genesis:${recipeId}`)
  }
  const threeXone = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AAA'],
      { A: input }
    ).id(`genesis:${recipeId}`)
  }
  const threeXtwo = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AAA', 'AAA'],
      { A: input }
    ).id(`genesis:${recipeId}`)
  }
  const threeXthree = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['AAA', 'AAA', 'AAA'],
      { A: input }
    ).id(`genesis:${recipeId}`)
  }
  const stairs = (input, output, count, recipeId) => {
    event.shaped(
      Item.of(output, count),
      ['A', 'AA', 'AAA'],
      { A: input }
    ).id(`genesis:${recipeId}`)
  }

  // Add 1x1 recipes
  oneXone(
    'minecraft:stone',
    'minecraft:stone_button', 8,
    'stone_button'
  )
  oneXone(
    'minecraft:polished_blackstone',
    'minecraft:polished_blackstone_button', 8,
    'polished_blackstone_button'
  )
  oneXone(
    'create:rose_quartz_block',
    'create:rose_quartz', 9,
    'rose_quartz'
  )

  // Add 1x3 recipes
  oneXthree(
    'create:iron_sheet',
    'mcwroofs:gutter_middle', 3,
    'downspout'
  )
  oneXthree(
    'minecraft:string',
    'farmersdelight:rope', 1,
    'rope_from_string'
  )
  oneXthree(
    'supplementaries:flax',
    'farmersdelight:rope', 2,
    'rope_from_flax'
  )
  oneXthree(
    'famersdelight:straw',
    'farmersdelight:rope', 2,
    'rope_from_straw'
  )

  // Add 2x1 recipes
  twoXone(
    'minecraft:stone',
    'minecraft:stone_pressure_plate', 8,
    'stone_pressure_plate'
  )
  twoXone(
    'minecraft:polished_blackstone',
    'minecraft:polished_blackstone_pressure_plate', 8,
    'polished_blackstone_pressure_plate'
  )
  twoXone(
    'minecraft:iron_ingot',
    'minecraft:heavy_weighted_pressure_plate', 2,
    'heavy_weighted_pressure_plate'
  )
  twoXone(
    'minecraft:gold_ingot',
    'minecraft:light_weighted_pressure_plate', 2,
    'light_weighted_pressure_plate'
  )

  // Add 3x1 recipes
  threeXone(
    'create:iron_sheet',
    'mcwroofs:gutter_base', 3,
    'gutter'
  )

  // Add 3x3 recipes
  threeXthree(
    'create:rose_quartz',
    'create:rose_quartz_block', 1,
    'rose_quartz_block'
  )

  // Add custom recipes
  custom(
    [
      ' 1 ',
      '232',
      '2 2'
    ],
    {
      1: 'create_ironworks:bronze_block',
      2: 'minecraft:stick',
      3: 'create_ironworks:bronze_ingot'
    },
    'minecraft:bell', 1,
    'bell'
  )
  custom(
    [
      ' 1 ',
      '234',
      ' 5 '
    ],
    {
      1: 'create_aquatic_ambitions:spiky_shell',
      2: 'create:powdered_obsidian',
      3: 'minecraft:ender_pearl',
      4: 'createaddition:diamond_grit',
      5: 'minecraft:blaze_powder'
    },
    'kubejs:inert_ender_eye', 1,
    'inert_ender_eye'
  )
  custom(
    [
      ' 1 ',
      '232',
      '444'
    ],
    {
      1: 'create:electron_tube',
      2: 'minecraft:redstone_torch',
      3: 'create:brass_sheet',
      4: '#bookshelf:stones'
    },
    'create_connected:sequenced_pulse_generator', 1,
    'sequenced_pulse_generator'
  )

  // Add bulk recipes
  global.CHAINS.forEach(entry => {
    const { name, inputNugget, inputIngot, output } = entry
    custom(
      [
        '1',
        '2',
        '1'
      ],
      {
        1: inputNugget,
        2: inputIngot
      },
      output, 3,
      name
    )
  })

  global.PLANK_SETS.forEach(entry => {
    oneXone(
      `minecraft:${entry}_planks`,
      `minecraft:${entry}_button`, 8,
      `${entry}_button`
    )
    twoXone(
      `minecraft:${entry}_planks`,
      `minecraft:${entry}_pressure_plate`, 8,
      `${entry}_pressure_plate`
    )
  })

  global.SAWING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab } = entry
    threeXone(
      block,
      slab, 6,
      `${name}_slab`
    )
    twoXone(
      slab,
      block, 1,
      `${name}_block_from_slab`
    )
    stairs(
      block,
      stairs, 8,
      `${name}_stairs`
    )
    twoXtwo(
      stairs,
      block, 3,
      `${name}_block_from_stairs`
    )
  })

  global.STONECUTTING_BLOCKS.forEach(entry => {
    const { name, block, stairs, slab, wall } = entry
    threeXone(
      block,
      slab, 6,
      `${name}_slab`
    )
    twoXone(
      slab,
      block, 1,
      `${name}_block_from_slab`
    )
    if (stairs != null) {
      stairs(
        block,
        stairs, 8,
        `${name}_stairs`
      )
      twoXtwo(
        stairs,
        block, 3,
        `${name}_block_from_stairs`
      )
    }
    if (wall != null) {
      threeXtwo(
        block,
        wall, 6,
        `${name}_wall`
      )
    }
  })

  global.BASIC_DOORS.forEach(entry => {
    const { name, input, door, trapdoor } = entry
    twoXthree(
      input,
      door, 3,
      `${name}_door`
    )
    threeXtwo(
      input,
      trapdoor, 4,
      `${name}_trapdoor`
    )
  })

  global.INGOT_DOORS.forEach(entry => {
    const { name, input, door, trapdoor } = entry
    twoXthree(
      input,
      door, 1,
      `${name}_door`
    )
    twoXtwo(
      input,
      trapdoor, 1,
      `${name}_trapdoor`
    )
  })
})