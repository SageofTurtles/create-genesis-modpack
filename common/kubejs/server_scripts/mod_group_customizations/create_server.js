ServerEvents.recipes(event => {
  // Empty Blaze Burner
  event.shaped(
    'create:empty_blaze_burner',
    [
      'RRR',
      'R R',
      'SNS'
    ],
    {
      R: 'createaddition:iron_rod',
      S: 'create:iron_sheet',
      N: 'minecraft:netherrack'
    }
  ).id('create:crafting/kinetics/empty_blaze_burner')

  // Peculiar Bell
  event.shaped(
    'create:peculiar_bell',
    [
      ' B ',
      'SIS',
      'S S'
    ],
    {
      B: 'create:brass_block',
      S: 'minecraft:stick',
      I: 'create:brass_ingot'
    }
  ).id('create:crafting/curiosities/peculiar_bell')

  // Industrial Iron Window
  event.shaped(
    '2x create:industrial_iron_window',
    [
      'NIN',
      'IGI'
    ],
    {
      N: 'minecraft:iron_nugget',
      I: 'createdeco:industrial_iron_ingot',
      G: '#forge:glass/colorless'
    }
  ).id('create:industrial_iron_window')

  // Remove Weathered Iron Window recipe
  event.remove({ id: 'create:weathered_iron_window' })

  // Remove Netherite Diving Helmet recipe
  event.remove({ id: 'create:crafting/appliances/netherite_diving_helmet_from_netherite' })

  // Remove Netherite Diving Boots recipe
  event.remove({ id: 'create:crafting/appliances/netherite_diving_boots_from_netherite' })

  // Remove Weathered Iron Block recipe
  event.remove({ id: 'create:weathered_iron_block_from_ingots_iron_stonecutting' })

  // Remove default Experience Block recipe
  event.remove({ type: 'create:compacting', output: 'create:experience_block' })

  // Ornate Iron Window
  event.shaped(
    'create:ornate_iron_window',
    [
      ' N ',
      'NGN'
    ],
    {
      N: 'minecraft:iron_nugget',
      G: '#forge:glass/colorless'
    }
  ).id('create:ornate_iron_window')

  // Extendo Grip
  event.replaceInput(
    { id: 'create:mechanical_crafting/extendo_grip' },
    'minecraft:stick',
    'createaddition:iron_rod'
  )

  // Schematicannon
  event.replaceInput(
    { id: 'create:crafting/schematics/schematicannon' },
    'minecraft:iron_block',
    'create:industrial_iron_block'
  )

  // Remove Andesite Alloy mixing recipe
  event.remove({
    type: 'create:mixing',
    output: 'create:andesite_alloy'
  })

  // Block of Experience
  event.recipes.create.compacting(
    'create:experience_block',
    Fluid.of('create_enchantment_industry:experience', 27)
  ).id('genesis:experience_block_from_compacting')

  // Rose Quartz Tiles recipes
  event.remove({ id: 'create:crafting/materials/rose_quartz_tiles_from_conversion' })
  event.remove({ id: 'create:crafting/materials/small_rose_quartz_tiles_from_conversion' })

  event.stonecutting(
    'create:rose_quartz_tiles',
    'create_ironworks:rose_quartz_block'
  ).id('create:rose_quartz_tiles_from_polished_rose_quartz_stonecutting')

  event.stonecutting(
    'create:small_rose_quartz_tiles',
    'create_ironworks:rose_quartz_block'
  ).id('create:small_rose_quartz_tiles_from_polished_rose_quartz_stonecutting')

  event.stonecutting(
    'create:small_rose_quartz_tiles',
    'create:rose_quartz_tiles'
  ).id('genesis:small_rose_quartz_tiles_from_rose_quartz_tiles_stonecutting')

  event.stonecutting(
    'create:rose_quartz_tiles',
    'create:small_rose_quartz_tiles'
  ).id('genesis:rose_quartz_tiles_from_small_rose_quartz_tiles_stonecutting')

  // Andesite milling recipe
  event.replaceOutput(
    { id: 'create:milling/andesite' },
    'minecraft:cobblestone',
    'minecraft:gravel'
  )

  // Remove Blackstone haunting
  event.remove({ id: 'create:haunting/blackstone' })

  // Remove Ice compacting
  event.remove({ id: 'create:compacting/ice' })

  // Tuff crushing recipe
  event.remove({ id: 'create:crushing/tuff' })
  event.recipes.create.crushing(
    [
      Item.of('minecraft:flint').withChance(0.25),
      Item.of('create:zinc_nugget').withChance(0.12)
    ],
    '#create:stone_types/tuff'
  ).id('create:crushing/tuff_recycling')
})