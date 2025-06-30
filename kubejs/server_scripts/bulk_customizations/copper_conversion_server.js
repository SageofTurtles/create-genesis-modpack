ServerEvents.recipes(event => {
  // Remove default Charging recipes
  event.remove({
    id: /createaddition:charging\/.*/,
    not: { id: 'createaddition:charging/channeling' }
  })

  let oxidizationSets = [
    { modid: 'minecraft', stage1: 'copper_block', stage2: 'exposed_copper', stage3: 'weathered_copper', stage4: 'oxidized_copper' },
    { modid: 'minecraft', stage1: 'cut_copper', stage2: 'exposed_cut_copper', stage3: 'weathered_cut_copper', stage4: 'oxidized_cut_copper' },
    { modid: 'minecraft', stage1: 'cut_copper_stairs', stage2: 'exposed_cut_copper_stairs', stage3: 'weathered_cut_copper_stairs', stage4: 'oxidized_cut_copper_stairs' },
    { modid: 'minecraft', stage1: 'cut_copper_slab', stage2: 'exposed_cut_copper_slab', stage3: 'weathered_cut_copper_slab', stage4: 'oxidized_cut_copper_slab' },
    { modid: 'copperandtuffbackport', stage1: 'chiseled_copper', stage2: 'exposed_chiseled_copper', stage3: 'weathered_chiseled_copper', stage4: 'oxidized_chiseled_copper' },
    { modid: 'copperandtuffbackport', stage1: 'copper_grate', stage2: 'exposed_copper_grate', stage3: 'weathered_copper_grate', stage4: 'oxidized_copper_grate' },
    { modid: 'copperandtuffbackport', stage1: 'copper_door', stage2: 'exposed_copper_door', stage3: 'weathered_copper_door', stage4: 'oxidized_copper_door' },
    { modid: 'copperandtuffbackport', stage1: 'copper_trapdoor', stage2: 'exposed_copper_trapdoor', stage3: 'weathered_copper_trapdoor', stage4: 'oxidized_copper_trapdoor' },
    { modid: 'copperandtuffbackport', stage1: 'copper_bulb', stage2: 'exposed_copper_bulb', stage3: 'weathered_copper_bulb', stage4: 'oxidized_copper_bulb' },
    { modid: 'create', stage1: 'copper_shingles', stage2: 'exposed_copper_shingles', stage3: 'weathered_copper_shingles', stage4: 'oxidized_copper_shingles' },
    { modid: 'create', stage1: 'copper_shingle_slab', stage2: 'exposed_copper_shingle_slab', stage3: 'weathered_copper_shingle_slab', stage4: 'oxidized_copper_shingle_slab' },
    { modid: 'create', stage1: 'copper_shingle_stairs', stage2: 'exposed_copper_shingle_stairs', stage3: 'weathered_copper_shingle_stairs', stage4: 'oxidized_copper_shingle_stairs' },
    { modid: 'create', stage1: 'copper_tiles', stage2: 'exposed_copper_tiles', stage3: 'weathered_copper_tiles', stage4: 'oxidized_copper_tiles' },
    { modid: 'create', stage1: 'copper_tile_slab', stage2: 'exposed_copper_tile_slab', stage3: 'weathered_copper_tile_slab', stage4: 'oxidized_copper_tile_slab' },
    { modid: 'create', stage1: 'copper_tile_stairs', stage2: 'exposed_copper_tile_stairs', stage3: 'weathered_copper_tile_stairs', stage4: 'oxidized_copper_tile_stairs' }
  ]

  oxidizationSets.forEach(set => {
    // Remove waxing & scraping by deployer recipes (prevents duplicate recipes)
    event.remove([
      { type: 'create:deploying', output: `${set.modid}:waxed_${set.stage1}` },
      { type: 'create:deploying', output: `${set.modid}:waxed_${set.stage2}` },
      { type: 'create:deploying', output: `${set.modid}:waxed_${set.stage3}` },
      { type: 'create:deploying', output: `${set.modid}:waxed_${set.stage4}` },
      { type: 'create:deploying', output: `${set.modid}:${set.stage1}` },
      { type: 'create:deploying', output: `${set.modid}:${set.stage2}` },
      { type: 'create:deploying', output: `${set.modid}:${set.stage3}` },
      { type: 'create:deploying', output: `${set.modid}:${set.stage4}` }
    ])

    // Add waxing by deployer recipes
    event.recipes.create.deploying(
      `${set.modid}:waxed_${set.stage1}`,
      [
        `${set.modid}:${set.stage1}`,
        'minecraft:honeycomb_block'
      ]
    ).keepHeldItem()
    event.recipes.create.deploying(
      `${set.modid}:waxed_${set.stage2}`,
      [
        `${set.modid}:${set.stage2}`,
        'minecraft:honeycomb_block'
      ]
    ).keepHeldItem()
    event.recipes.create.deploying(
      `${set.modid}:waxed_${set.stage3}`,
      [
        `${set.modid}:${set.stage3}`,
        'minecraft:honeycomb_block'
      ]
    ).keepHeldItem()
    event.recipes.create.deploying(
      `${set.modid}:waxed_${set.stage4}`,
      [
        `${set.modid}:${set.stage4}`,
        'minecraft:honeycomb_block'
      ]
    ).keepHeldItem()

    // Add scraping by Farmer's Delight cutting recipes
    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [{ "item": `${set.modid}:waxed_${set.stage1}` }],
      "result": [{ "item": `${set.modid}:${set.stage1}` }],
      "tool": {
        "type": "farmersdelight:tool_action",
        "action": "axe_dig"
      }
    })
    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [{ "item": `${set.modid}:waxed_${set.stage2}` }],
      "result": [{ "item": `${set.modid}:${set.stage2}` }],
      "tool": {
        "type": "farmersdelight:tool_action",
        "action": "axe_dig"
      }
    })
    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [{ "item": `${set.modid}:waxed_${set.stage3}` }],
      "result": [{ "item": `${set.modid}:${set.stage3}` }],
      "tool": {
        "type": "farmersdelight:tool_action",
        "action": "axe_dig"
      }
    })
    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [{ "item": `${set.modid}:waxed_${set.stage4}` }],
      "result": [{ "item": `${set.modid}:${set.stage4}` }],
      "tool": {
        "type": "farmersdelight:tool_action",
        "action": "axe_dig"
      }
    })

    // Add oxidizing by washing recipes
    event.recipes.create.splashing(
      `${set.modid}:${set.stage4}`,
      `${set.modid}:${set.stage3}`
    )
    event.recipes.create.splashing(
      `${set.modid}:${set.stage3}`,
      `${set.modid}:${set.stage2}`
    )
    event.recipes.create.splashing(
      `${set.modid}:${set.stage2}`,
      `${set.modid}:${set.stage1}`
    )

    // Add deoxidizing by charging recipes
    event.custom({
      "type": "createaddition:charging",
      "input": {
        "item": `${set.modid}:${set.stage4}`,
        "count": 1
      },
      "result": {
        "item": `${set.modid}:${set.stage3}`,
        "count": 1
      },
      "energy": 4000,
      "maxChargeRate": 200
    })
    event.custom({
      "type": "createaddition:charging",
      "input": {
        "item": `${set.modid}:${set.stage3}`,
        "count": 1
      },
      "result": {
        "item": `${set.modid}:${set.stage2}`,
        "count": 1
      },
      "energy": 4000,
      "maxChargeRate": 200
    })
    event.custom({
      "type": "createaddition:charging",
      "input": {
        "item": `${set.modid}:${set.stage2}`,
        "count": 1
      },
      "result": {
        "item": `${set.modid}:${set.stage1}`,
        "count": 1
      },
      "energy": 4000,
      "maxChargeRate": 200
    })
  })
})