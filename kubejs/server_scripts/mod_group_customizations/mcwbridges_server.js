ServerEvents.recipes(event => {
  // Rope bridges
  event.replaceInput(
    { id: /mcwbridges:rope_.*_bridge/ },
    'minecraft:string',
    'farmersdelight:rope'
  )

  // Iron Bridge Pier
  event.shaped(
    '3x mcwbridges:iron_bridge_pier',
    [
      'IBI'
    ],
    {
      I: 'minecraft:iron_ingot',
      B: 'minecraft:iron_bars'
    }
  ).id('mcwbridges:iron_bridge_pier')

  // Bamboo Bridge Pier
  event.shaped(
    '3x mcwbridges:bamboo_bridge_pier',
    [
      'BAB'
    ],
    {
      B: 'minecraft:bamboo_block',
      A: 'minecraft:bamboo'
    }
  ).id('mcwbridges:bamboo_bridge_pier')

  // Dry Bamboo Bridge Pier
  event.shaped(
    '3x mcwbridges:dry_bamboo_bridge_pier',
    [
      'BAB'
    ],
    {
      B: 'minecraft:stripped_bamboo_block',
      A: 'minecraft:bamboo'
    }
  ).id('mcwbridges:dry_bamboo_bridge_pier')
})