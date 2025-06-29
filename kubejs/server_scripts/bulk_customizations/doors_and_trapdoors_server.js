ServerEvents.recipes(event => {
  let basicDoors = [
    { input: 'minecraft:oak_planks', output: 'minecraft:oak_door' },
    { input: 'minecraft:spruce_planks', output: 'minecraft:spruce_door' },
    { input: 'minecraft:birch_planks', output: 'minecraft:birch_door' },
    { input: 'minecraft:jungle_planks', output: 'minecraft:jungle_door' },
    { input: 'minecraft:acacia_planks', output: 'minecraft:acacia_door' },
    { input: 'minecraft:dark_oak_planks', output: 'minecraft:dark_oak_door' },
    { input: 'minecraft:mangrove_planks', output: 'minecraft:mangrove_door' },
    { input: 'minecraft:cherry_planks', output: 'minecraft:cherry_door' },
    { input: 'minecraft:bamboo_planks', output: 'minecraft:bamboo_door' },
    { input: 'minecraft:crimson_planks', output: 'minecraft:crimson_door' },
    { input: 'minecraft:warped_planks', output: 'minecraft:warped_door' },
    { input: 'minecraft:copper_block', output: 'copperandtuffbackport:copper_door' },
    { input: 'minecraft:exposed_copper', output: 'copperandtuffbackport:exposed_copper_door' },
    { input: 'minecraft:weathered_copper', output: 'copperandtuffbackport:weathered_copper_door' },
    { input: 'minecraft:oxidized_copper', output: 'copperandtuffbackport:oxidized_copper_door' },
    { input: 'minecraft:waxed_copper_block', output: 'copperandtuffbackport:waxed_copper_door' },
    { input: 'minecraft:waxed_exposed_copper', output: 'copperandtuffbackport:waxed_exposed_copper_door' },
    { input: 'minecraft:waxed_weathered_copper', output: 'copperandtuffbackport:waxed_weathered_copper_door' },
    { input: 'minecraft:waxed_oxidized_copper', output: 'copperandtuffbackport:waxed_oxidized_copper_door' },
    { input: 'minecraft:iron_ingot', output: 'minecraft:iron_door' },
    { input: 'create:andesite_alloy', output: 'createdeco:andesite_door' },
    { input: 'create:brass_ingot', output: 'createdeco:brass_door' },
    { input: 'minecraft:copper_ingot', output: 'createdeco:copper_door' },
    { input: 'createdeco:industrial_iron_ingot', output: 'createdeco:industrial_iron_door' },
    { input: 'create:zinc_ingot', output: 'createdeco:zinc_door' },
    { input: 'minecraft:gold_ingot', output: 'supplementaries:gold_door' },
    { input: 'minecraft:netherite_ingot', output: 'supplementaries:netherite_door' }
  ]

  basicDoors.forEach(door => {
    event.remove({ type: 'minecraft:crafting_shaped', output: door.output })
    event.shaped(
      Item.of(door.output, 3),
      [
        'II',
        'II',
        'II'
      ],
      { I: door.input }
    )
  })
  event.remove({ id: 'supplementaries:netherite_door' })

  let additiveDoors = [
    { base: '#minecraft:wooden_doors', item: 'create:andesite_casing', output: 'create:andesite_door' },
    { base: '#minecraft:wooden_doors', item: 'create:brass_casing', output: 'create:brass_door' },
    { base: '#minecraft:wooden_doors', item: 'create:copper_casing', output: 'create:copper_door' },
    { base: '#minecraft:wooden_doors', item: 'create:railway_casing', output: 'create:train_door' },
    { base: '#minecraft:wooden_trapdoors', item: 'create:railway_casing', output: 'create:train_trapdoor' },
    { base: '#minecraft:wooden_doors', item: 'create:framed_glass', output: 'create:framed_glass_door' },
    { base: '#minecraft:wooden_trapdoors', item: 'create:framed_glass', output: 'create:framed_glass_trapdoor' },
    { base: '#minecraft:wooden_trapdoors', item: 'create:ornate_iron_window', output: 'bellsandwhistles:ornate_iron_trapdoor' },
    { base: 'createdeco:andesite_door', item: 'minecraft:redstone_torch', output: 'createdeco:locked_andesite_door' },
    { base: 'createdeco:brass_door', item: 'minecraft:redstone_torch', output: 'createdeco:locked_brass_door' },
    { base: 'createdeco:copper_door', item: 'minecraft:redstone_torch', output: 'createdeco:locked_copper_door' },
    { base: 'createdeco:industrial_iron_door', item: 'minecraft:redstone_torch', output: 'createdeco:locked_industrial_iron_door' },
    { base: 'createdeco:zinc_door', item: 'minecraft:redstone_torch', output: 'createdeco:locked_zinc_door' }
  ]

  additiveDoors.forEach(door => {
    event.remove({ type: 'minecraft:crafting_shapeless', output: door.output })
    event.shapeless(
      Item.of(door.output, 1),
      [
        door.base,
        door.item
      ],
    )
  })

  let blockTrapdoors = [
    { input: 'minecraft:oak_planks', output: 'minecraft:oak_trapdoor' },
    { input: 'minecraft:spruce_planks', output: 'minecraft:spruce_trapdoor' },
    { input: 'minecraft:birch_planks', output: 'minecraft:birch_trapdoor' },
    { input: 'minecraft:jungle_planks', output: 'minecraft:jungle_trapdoor' },
    { input: 'minecraft:acacia_planks', output: 'minecraft:acacia_trapdoor' },
    { input: 'minecraft:dark_oak_planks', output: 'minecraft:dark_oak_trapdoor' },
    { input: 'minecraft:mangrove_planks', output: 'minecraft:mangrove_trapdoor' },
    { input: 'minecraft:cherry_planks', output: 'minecraft:cherry_trapdoor' },
    { input: 'minecraft:bamboo_planks', output: 'minecraft:bamboo_trapdoor' },
    { input: 'minecraft:crimson_planks', output: 'minecraft:crimson_trapdoor' },
    { input: 'minecraft:warped_planks', output: 'minecraft:warped_trapdoor' },
    { input: 'minecraft:copper_block', output: 'copperandtuffbackport:copper_trapdoor' },
    { input: 'minecraft:exposed_copper', output: 'copperandtuffbackport:exposed_copper_trapdoor' },
    { input: 'minecraft:weathered_copper', output: 'copperandtuffbackport:weathered_copper_trapdoor' },
    { input: 'minecraft:oxidized_copper', output: 'copperandtuffbackport:oxidized_copper_trapdoor' },
    { input: 'minecraft:waxed_copper_block', output: 'copperandtuffbackport:waxed_copper_trapdoor' },
    { input: 'minecraft:waxed_exposed_copper', output: 'copperandtuffbackport:waxed_exposed_copper_trapdoor' },
    { input: 'minecraft:waxed_weathered_copper', output: 'copperandtuffbackport:waxed_weathered_copper_trapdoor' },
    { input: 'minecraft:waxed_oxidized_copper', output: 'copperandtuffbackport:waxed_oxidized_copper_trapdoor' }
  ]

  blockTrapdoors.forEach(trapdoor => {
    event.remove({ type: 'minecraft:crafting_shaped', output: trapdoor.output })
    event.shaped(
      Item.of(trapdoor.output, 4),
      [
        'III',
        'III'
      ],
      { I: trapdoor.input }
    )
  })

  let itemTrapdoors = [
    { input: 'minecraft:iron_ingot', output: 'minecraft:iron_trapdoor' },
    { input: 'create:andesite_alloy', output: 'createdeco:andesite_trapdoor' },
    { input: 'create:brass_ingot', output: 'createdeco:brass_trapdoor' },
    { input: 'minecraft:copper_ingot', output: 'createdeco:copper_trapdoor' },
    { input: 'createdeco:industrial_iron_ingot', output: 'createdeco:industrial_iron_trapdoor' },
    { input: 'create:zinc_ingot', output: 'createdeco:zinc_trapdoor' },
    { input: 'minecraft:gold_ingot', output: 'supplementaries:gold_trapdoor' },
    { input: 'minecraft:netherite_ingot', output: 'supplementaries:netherite_trapdoor' }
  ]

  itemTrapdoors.forEach(trapdoor => {
    event.remove({ type: 'minecraft:crafting_shaped', output: trapdoor.output })
    event.shaped(
      Item.of(trapdoor.output, 2),
      [
        'II',
        'II'
      ],
      { I: trapdoor.input }
    )
  })
  event.remove({ id: 'supplementaries:netherite_trapdoor' })
})