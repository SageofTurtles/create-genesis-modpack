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
})