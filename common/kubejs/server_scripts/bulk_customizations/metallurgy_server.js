// Remove default recipes
ServerEvents.recipes(event => {
  event.remove({ mod: 'createmetalwork' })
  event.remove({ mod: 'create_ironworks', type: 'create:mixing' })
  event.remove({ id: /create_ironworks:materials\/plates\/(bronze|steel|tin)_sheet2/ })
  event.remove({ id: /create_ironworks:compat\/.*/ })
  event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' })
  event.remove({ id: 'create:mixing/brass_ingot' })
  event.remove({ id: 'minecraft:netherite_ingot' })
})

// Add item tags to Create: Ironworks crushed raw tin
ServerEvents.tags('item', event => {
  event.add('forge:dusts/tin', 'create_ironworks:crushed_raw_tin')
  event.add('forge:crushed_raw_tin', 'create_ironworks:crushed_raw_tin')
  event.add('create:crushed_raw_materials', 'create_ironworks:crushed_raw_tin')
  event.add('forge:tin_dusts', 'create_ironworks:crushed_raw_tin')
})

// Add new recipes
ServerEvents.recipes(event => {
  // Remove duplicate Create: Ironworks recipes
  event.remove([
    { id: 'create_ironworks:materials/tin/crushed_raw_tin_from_crushing_raw_ore' },
    { id: 'create_ironworks:materials/tin/crushed_raw_tin_from_crushing_deepslate_ore' },
    { id: 'create_ironworks:materials/tin/crushed_raw_tin_from_crushing_ore' },
    { id: 'create_ironworks:materials/tin/tin_ingot_from_crushing_raw_tin' }
  ])

  let metals = [
    { name: 'copper', molten: 'createmetalwork:molten_copper', block: 'minecraft:copper_block', ingot: 'minecraft:copper_ingot', nugget: 'create:copper_nugget' },
    { name: 'gold', molten: 'createmetalwork:molten_gold', block: 'minecraft:gold_block', ingot: 'minecraft:gold_ingot', nugget: 'minecraft:gold_nugget' },
    { name: 'iron', molten: 'createmetalwork:molten_iron', block: 'minecraft:iron_block', ingot: 'minecraft:iron_ingot', nugget: 'minecraft:iron_nugget' },
    { name: 'zinc', molten: 'createmetalwork:molten_zinc', block: 'create:zinc_block', ingot: 'create:zinc_ingot', nugget: 'create:zinc_nugget' },
    { name: 'tin', molten: 'createmetalwork:molten_tin', block: 'create_ironworks:tin_block', ingot: 'create_ironworks:tin_ingot', nugget: 'create_ironworks:tin_nugget' },
    { name: 'brass', molten: 'createmetalwork:molten_brass', block: 'create:brass_block', ingot: 'create:brass_ingot', nugget: 'create:brass_nugget' },
    { name: 'bronze', molten: 'createmetalwork:molten_bronze', block: 'create_ironworks:bronze_block', ingot: 'create_ironworks:bronze_ingot', nugget: 'create_ironworks:bronze_nugget' },
    { name: 'netherite', molten: 'createmetalwork:molten_netherite', block: 'minecraft:netherite_block', ingot: 'minecraft:netherite_ingot', nugget: 'createdeco:netherite_nugget' },
    { name: 'steel', molten: 'createmetalwork:molten_steel', block: 'create_ironworks:steel_block', ingot: 'create_ironworks:steel_ingot', nugget: 'create_ironworks:steel_nugget' }
  ]

  let softMetals = [
    { name: 'copper', molten: 'createmetalwork:molten_copper', block: 'minecraft:copper_block', ingot: 'minecraft:copper_ingot', nugget: 'create:copper_nugget' },
    { name: 'gold', molten: 'createmetalwork:molten_gold', block: 'minecraft:gold_block', ingot: 'minecraft:gold_ingot', nugget: 'minecraft:gold_nugget' },
    { name: 'iron', molten: 'createmetalwork:molten_iron', block: 'minecraft:iron_block', ingot: 'minecraft:iron_ingot', nugget: 'minecraft:iron_nugget' },
    { name: 'zinc', molten: 'createmetalwork:molten_zinc', block: 'create:zinc_block', ingot: 'create:zinc_ingot', nugget: 'create:zinc_nugget' },
    { name: 'tin', molten: 'createmetalwork:molten_tin', block: 'create_ironworks:tin_block', ingot: 'create_ironworks:tin_ingot', nugget: 'create_ironworks:tin_nugget' },
    { name: 'brass', molten: 'createmetalwork:molten_brass', block: 'create:brass_block', ingot: 'create:brass_ingot', nugget: 'create:brass_nugget' },
    { name: 'bronze', molten: 'createmetalwork:molten_bronze', block: 'create_ironworks:bronze_block', ingot: 'create_ironworks:bronze_ingot', nugget: 'create_ironworks:bronze_nugget' }
  ]

  let hardMetals = [
    { name: 'netherite', molten: 'createmetalwork:molten_netherite', block: 'minecraft:netherite_block', ingot: 'minecraft:netherite_ingot', nugget: 'createdeco:netherite_nugget' },
    { name: 'steel', molten: 'createmetalwork:molten_steel', block: 'create_ironworks:steel_block', ingot: 'create_ironworks:steel_ingot', nugget: 'create_ironworks:steel_nugget' }
  ]

  let heatedAlloys = [
    { output: Fluid.of('createmetalwork:molten_andesite_alloy', 90), input1: Fluid.of('createmetalwork:molten_andesite', 405), input2: Fluid.of('createmetalwork:molten_iron', 10) },
    { output: Fluid.of('createmetalwork:molten_andesite_alloy', 90), input1: Fluid.of('createmetalwork:molten_andesite', 405), input2: Fluid.of('createmetalwork:molten_zinc', 10) },
    { output: Fluid.of('createmetalwork:molten_brass', 180), input1: Fluid.of('createmetalwork:molten_zinc', 90), input2: Fluid.of('createmetalwork:molten_copper', 90) },
    { output: Fluid.of('createmetalwork:molten_bronze', 180), input1: Fluid.of('createmetalwork:molten_tin', 90), input2: Fluid.of('createmetalwork:molten_copper', 90) }
  ]

  let superheatedAlloys = [
    { output: Fluid.of('createmetalwork:molten_netherite', 90), input1: Item.of('minecraft:netherite_scrap', 1), input2: Item.of('createaddition:electrum_ingot', 1) },
    { output: Fluid.of('createmetalwork:molten_steel', 90), input1: Item.of('create_ironworks:coal_dust', 3), input2: Fluid.of('createmetalwork:molten_iron', 270) }
  ]

  // Add standard compacting recipes
  metals.forEach(metal => {
    event.recipes.create.compacting(
      metal.ingot,
      Fluid.of(metal.molten, 90)
    ).id(`genesis:${metal.name}_compacting`)
  })

  // Add heated melting by mixing recipes
  softMetals.forEach(metal => {
    event.recipes.create.mixing(
      Fluid.of(metal.molten, 10),
      metal.nugget
    ).heated().id(`genesis:${metal.name}_nugget_melting`)

    event.recipes.create.mixing(
      Fluid.of(metal.molten, 90),
      metal.ingot
    ).heated().id(`genesis:${metal.name}_ingot_melting`)

    event.recipes.create.mixing(
      Fluid.of(metal.molten, 810),
      metal.block
    ).heated().id(`genesis:${metal.name}_block_melting`)
  })

  event.recipes.create.mixing(
    Fluid.of('createmetalwork:molten_andesite', 810),
    'minecraft:andesite'
  ).heated().id('genesis:andesite_melting')

  // Add superheated melting by mixing recipes
  hardMetals.forEach(metal => {
    event.recipes.create.mixing(
      Fluid.of(metal.molten, 10),
      metal.nugget
    ).superheated().id(`genesis:${metal.name}_nugget_melting`)

    event.recipes.create.mixing(
      Fluid.of(metal.molten, 90),
      metal.ingot
    ).superheated().id(`genesis:${metal.name}_ingot_melting`)

    event.recipes.create.mixing(
      Fluid.of(metal.molten, 810),
      metal.block
    ).superheated().id(`genesis:${metal.name}_block_melting`)
  })

  // Add non-standard compacting recipes
  event.recipes.create.compacting('minecraft:andesite', Fluid.of('createmetalwork:molten_andesite', 810))
  event.recipes.create.compacting('create:andesite_alloy', Fluid.of('createmetalwork:molten_andesite_alloy', 90))

  // Add recipes for alloys
  heatedAlloys.forEach(instance => {
    event.recipes.create.mixing(instance.output, [instance.input1, instance.input2]).heated()
  })
  superheatedAlloys.forEach(instance => {
    event.recipes.create.mixing(instance.output, [instance.input1, instance.input2]).superheated()
  })
})
