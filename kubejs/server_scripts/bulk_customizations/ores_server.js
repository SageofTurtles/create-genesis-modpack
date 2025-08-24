ServerEvents.recipes(event => {
  const ores = [
    {
      output: 'minecraft:coal_ore',
      base: 'stone',
      drop: 'minecraft:coal',
      count: 5,
      xp: 3,
      name: 'coal_ore'
    },
    {
      output: 'minecraft:deepslate_coal_ore',
      base: 'deepslate',
      drop: 'minecraft:coal',
      count: 5,
      xp: 3,
      name: 'deepslate_coal_ore'
    },
    {
      output: 'minecraft:redstone_ore',
      base: 'stone',
      drop: 'minecraft:redstone',
      count: 9,
      xp: 6,
      name: 'redstone_ore'
    },
    {
      output: 'minecraft:deepslate_redstone_ore',
      base: 'deepslate',
      drop: 'minecraft:redstone',
      count: 9,
      xp: 6,
      name: 'deepslate_redstone_ore'
    },
    {
      output: 'minecraft:emerald_ore',
      base: 'stone',
      drop: 'minecraft:emerald',
      count: 5,
      xp: 8,
      name: 'emerald_ore'
    },
    {
      output: 'minecraft:deepslate_emerald_ore',
      base: 'deepslate',
      drop: 'minecraft:emerald',
      count: 5,
      xp: 8,
      name: 'deepslate_emerald_ore'
    },
    {
      output: 'minecraft:lapis_ore',
      base: 'stone',
      drop: 'minecraft:lapis_block',
      count: 5,
      xp: 6,
      name: 'lapis_ore'
    },
    {
      output: 'minecraft:deepslate_lapis_ore',
      base: 'deepslate',
      drop: 'minecraft:lapis_block',
      count: 5,
      xp: 6,
      name: 'deepslate_lapis_ore'
    },
    {
      output: 'minecraft:diamond_ore',
      base: 'stone',
      drop: 'minecraft:diamond',
      count: 5,
      xp: 8,
      name: 'diamond_ore'
    },
    {
      output: 'minecraft:deepslate_diamond_ore',
      base: 'deepslate',
      drop: 'minecraft:diamond',
      count: 5,
      xp: 8,
      name: 'deepslate_diamond_ore'
    },
    {
      output: 'minecraft:nether_quartz_ore',
      base: 'netherrack',
      drop: 'minecraft:quartz',
      count: 5,
      xp: 6,
      name: 'nether_quartz_ore'
    },
    {
      output: 'minecraft:nether_gold_ore',
      base: 'netherrack',
      drop: 'minecraft:gold_ingot',
      count: 4,
      xp: 2,
      name: 'nether_gold_ore'
    },
    {
      output: 'minecraft:iron_ore',
      base: 'stone',
      drop: 'minecraft:iron_ingot',
      count: 5,
      xp: 15,
      name: 'iron_ore'
    },
    {
      output: 'minecraft:deepslate_iron_ore',
      base: 'deepslate',
      drop: 'minecraft:iron_ingot',
      count: 5,
      xp: 15,
      name: 'deepslate_iron_ore'
    },
    {
      output: 'minecraft:copper_ore',
      base: 'stone',
      drop: 'minecraft:copper_block',
      count: 3,
      xp: 75,
      name: 'copper_ore'
    },
    {
      output: 'minecraft:deepslate_copper_ore',
      base: 'deepslate',
      drop: 'minecraft:copper_block',
      count: 3,
      xp: 75,
      name: 'deepslate_copper_ore'
    },
    {
      output: 'minecraft:gold_ore',
      base: 'stone',
      drop: 'minecraft:gold_ingot',
      count: 5,
      xp: 30,
      name: 'gold_ore'
    },
    {
      output: 'minecraft:deepslate_gold_ore',
      base: 'deepslate',
      drop: 'minecraft:gold_ingot',
      count: 5,
      xp: 30,
      name: 'deepslate_gold_ore'
    },
    {
      output: 'create:zinc_ore',
      base: 'stone',
      drop: 'create:zinc_ingot',
      count: 5,
      xp: 15,
      name: 'zinc_ore'
    },
    {
      output: 'create:deepslate_zinc_ore',
      base: 'deepslate',
      drop: 'create:zinc_ingot',
      count: 5,
      xp: 15,
      name: 'deepslate_zinc_ore'
    },
    {
      output: 'create_ironworks:tin_ore',
      base: 'stone',
      drop: 'create_ironworks:tin_ingot',
      count: 5,
      xp: 15,
      name: 'tin_ore'
    },
    {
      output: 'create_ironworks:deepslate_tin_ore',
      base: 'deepslate',
      drop: 'create_ironworks:tin_ingot',
      count: 5,
      xp: 15,
      name: 'deepslate_tin_ore'
    },
    {
      output: 'minecraft:gilded_blackstone',
      base: 'blackstone',
      drop: 'minecraft:gold_ingot',
      count: 2,
      xp: 3,
      name: 'gilded_blackstone'
    }
  ]

  ores.forEach(ore => {
    event.recipes.create.compacting(
      ore.output,
      [
        Item.of(ore.drop, ore.count),
        `minecraft:${ore.base}`,
        Fluid.of('create_enchantment_industry:experience', ore.xp)
      ]
    ).heated().id(`genesis:${ore.name}`)
  })

})
