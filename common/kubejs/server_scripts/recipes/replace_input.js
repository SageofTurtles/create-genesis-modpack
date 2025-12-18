ServerEvents.recipes(event => {
  // Define function to modify recipes
  const id = (filter, originalInput, newInput) => {
    event.replaceInput(
      { id: filter },
      originalInput,
      newInput
    )
  }
  const input = (filter, originalInput, newInput) => {
    event.replaceInput(
      { input: filter },
      originalInput,
      newInput
    )
  }
  const mod = (filter, originalInput, newInput) => {
    event.replaceInput(
      { mod: filter },
      originalInput,
      newInput
    )
  }
  const custom = (filter, originalInput, newInput) => {
    event.replaceInput(
      filter,
      originalInput,
      newInput
    )
  }

  // Add recipe modifications by ID
  id(
    'supplementaries:checker',
    'minecraft:cobblestone',
    'minecraft:calcite'
  )
  id(
    'sophisticatedbackpacks:inception_upgrade',
    'minecraft:ender_eye',
    'minecraft:echo_shard'
  )
  id(
    'minecraft:lodestone',
    'minecraft:netherite_ingot',
    'minecraft:iron_ingot'
  )
  id(
    /mcwlights:.*garden_light/,
    'minecraft:iron_nugget',
    '#genesis:cheap_metal_nuggets'
  )
  id(
    /mcwlights:.*garden_light/,
    'minecraft:iron_ingot',
    '#genesis:cheap_metal_ingots'
  )
  id(
    /mcwlights:.*_lantern/,
    'minecraft:iron_nugget',
    '#genesis:cheap_metal_nuggets'
  )
  id(
    /mcwlights:.*_lantern/,
    'minecraft:iron_ingot',
    '#genesis:cheap_metal_ingots'
  )
  id(
    'create:mechanical_crafting/wand_of_symmetry',
    '#forge:glass',
    '#luminous_blocks:luminous_glass_blocks'
  )
  id(
    'create:mechanical_crafting/wand_of_symmetry',
    'minecraft:ender_pearl',
    'minecraft:echo_shard'
  )
  id(
    'create:mechanical_crafting/extendo_grip',
    'minecraft:stick',
    'createaddition:iron_rod'
  )
  id(
    'create:crafting/schematics/schematicannon',
    'minecraft:iron_block',
    'create:industrial_iron_block'
  )
  id(
    'farmersdelight:canvas',
    'farmersdelight:straw',
    '#supplementaries:straw'
  )
  id(
    /mcwbridges:rope_.*_bridge$/,
    'minecraft:string',
    'farmersdelight:rope'
  )
  id(
    /mcwdoors:bamboo_(beach|classic|cottage|four_panel|mystic|nether|paper|swamp|tropical|waffle|whispering)_door/,
    'minecraft:bamboo',
    'minecraft:bamboo_planks'
  )
  id(
    'mcwdoors:metal_reinforced_door',
    'minecraft:iron_nugget',
    'createdeco:industrial_iron_nugget'
  )
  id(
    'mcwdoors:iron_portcullis',
    'minecraft:iron_bars',
    'createdeco:industrial_iron_ingot'
  )
  id(
    'mcwdoors:mangrove_bamboo_door',
    'minecraft:bamboo',
    'minecraft:mangrove_planks'
  )
  id(
    /mcwfences:.*_wired_fence/,
    'minecraft:iron_bars',
    'createaddition:barbed_wire'
  )
  id(
    /mcwfences:.*_grass_topped_wall/,
    'minecraft:dirt',
    'minecraft:grass_block'
  )
  id(
    'mcwfences:iron_cheval_de_frise',
    'minecraft:iron_nugget',
    'createaddition:iron_rod'
  )
  id(
    'mcwtrpdoors:bamboo_barrel_trapdoor',
    'minecraft:bamboo',
    'minecraft:bamboo_planks'
  )
  id(
    'smallships:bamboo_galley',
    'smallships:bamboo_cog',
    'smallships:bamboo_galley'
  )
  id(
    'sophisticatedbackpacks:pickup_upgrade',
    'minecraft:sticky_piston',
    'create:chute'
  )
  id(
    'sophisticatedbackpacks:restock_upgrade',
    'minecraft:sticky_piston',
    'create:smart_chute'
  )
  id(
    'sophisticatedbackpacks:deposit_upgrade',
    'minecraft:chest',
    'create:smart_chute'
  )
  id(
    'sophisticatedbackpacks:deposit_upgrade',
    'minecraft:piston',
    'create:chute'
  )
  id(
    'supplementaries:relayer',
    'minecraft:cobblestone',
    '#minecraft:stone_crafting_materials'
  )
  id(
    'supplementaries:slice_map',
    'supplementaries:altimeter',
    'minecraft:black_dye'
  )
  id(
    'supplementaries:sack',
    '#forge:crops/flax',
    'farmersdelight:canvas'
  )

  // Add recipe modifications by input
  input(
    'mcwroofs:gutter_base',
    'mcwroofs:gutter_base',
    '#genesis:gutters'
  )
  input(
    'mcwroofs:gutter_middle',
    'mcwroofs:gutter_middle',
    '#genesis:downspouts'
  )
  input(
    'mcwlights:white_paper_lamp',
    'mcwlights:white_paper_lamp',
    '#genesis:paper_lamps'
  )

  // Add recipe modifications by input
  mod(
    'interiors',
    'minecraft:dried_kelp',
    'create:belt_connector'
  )

  // Add recipe modifications by custom filters
  custom(
    [
      { id: 'brewinandchewin:pizza' },
      { id: 'farmersdelight:pie_crust' },
      { id: 'farmersdelight:sweet_berry_cookie' },
      { id: 'minecraft:cookie' }
    ],
    'minecraft:wheat',
    'create:dough'
  )
  custom(
    [
      { id: 'railways:crafting/remote_lens' },
      { id: 'minecraft:end_crystal' },
      { id: 'minecraft:ender_chest' }
    ],
    'minecraft:ender_eye',
    'kubejs:inert_ender_eye'
  )
  custom(
    [
      { type: 'minecraft:crafting_shaped' },
      { id: /^smallships:.*/ }
    ],
    'minecraft:lead',
    'comforts:rope_and_nail'
  )
  custom(
    [
      { type: 'minecraft:crafting_shaped' },
      { id: /^smallships:.*/ }
    ],
    'minecraft:string',
    'farmersdelight:rope'
  )
})