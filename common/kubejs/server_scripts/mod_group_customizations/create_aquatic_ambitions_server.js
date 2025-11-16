ServerEvents.recipes(event => {
  // Remove default recipes
  event.remove([
    { id: 'create:smelting/veridium' },
    { id: 'create:crafting/materials/prismarine_alloy_rod' },
    { id: 'create:crafting/materials/prismarine_alloy' },
    { id: 'create_aquatic_ambitions:mixing/prismarine_alloy' },
    { id: 'create_aquatic_ambitions:milling/limestone' }
  ])

  // Prismarine Alloy Rod
  event.custom({
    type: "createaddition:rolling",
    input: {
      item: "create_aquatic_ambitions:prismarine_alloy"
    },
    result: {
      item: "create_aquatic_ambitions:prismarine_alloy_rod",
      count: 2
    }
  }).id('genesis:prismarine_alloy_rod')

  // Prismarine Alloy
  event.recipes.create.mixing(
    'create_aquatic_ambitions:prismarine_alloy',
    [
      Fluid.of('createmetalwork:molten_copper', 90),
      '4x minecraft:prismarine_shard'
    ]
  ).heated().id('genesis:prismarine_alloy')

  // Coral Blocks crushing
  let corals = [
    'tube',
    'brain',
    'bubble',
    'fire',
    'horn'
  ]
  
  corals.forEach(type => {
    event.recipes.create.crushing(
      Item.of('create_aquatic_ambitions:suspicious_rock').withChance(0.05),
      `minecraft:${type}_coral_block`
    ).id(`genesis:${type}_coral_block_crushing`)
  })

  // Spiky Shell milling
  event.recipes.create.milling(
    '3x minecraft:bone_meal',
    'create_aquatic_ambitions:spiky_shell'
  ).id('genesis:spiky_shell_milling')

  // Sponge channeling
  event.custom({
    type: "create_aquatic_ambitions:channeling",
    ingredients: [
      {
        item: "minecraft:sponge"
      }
    ],
    results: [
      {
        item: "minecraft:wet_sponge"
      },
      {
        chance: 0.1,
        item: "minecraft:wet_sponge"
      }
    ]
  }).id('create_aquatic_ambitions:channeling/sponge')
})