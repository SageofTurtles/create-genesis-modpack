ServerEvents.recipes(event => {
  // Pickup Upgrade
  event.replaceInput(
    { id: 'sophisticatedbackpacks:pickup_upgrade' },
    'minecraft:sticky_piston',
    'create:chute'
  )

  // Restock Upgrade
  event.replaceInput(
    { id: 'sophisticatedbackpacks:restock_upgrade' },
    'minecraft:sticky_piston',
    'create:smart_chute'
  )

  // Deposit Upgrade
  event.replaceInput(
    { id: 'sophisticatedbackpacks:deposit_upgrade' },
    'minecraft:chest',
    'create:smart_chute'
  )
  event.replaceInput(
    { id: 'sophisticatedbackpacks:deposit_upgrade' },
    'minecraft:piston',
    'minecraft:chest'
  )

  // Filter Upgrade
  event.shaped(
    Item.of('sophisticatedbackpacks:filter_upgrade', 1),
    [
      ' F ',
      'SUS',
      'RRR'
    ], {
    F: 'create:filter',
    S: 'minecraft:string',
    U: 'sophisticatedbackpacks:upgrade_base',
    R: 'minecraft:redstone'
  }
  ).id('sophisticatedbackpacks:filter_upgrade')

  // Advanced Filter Upgrade
  event.shaped(
    Item.of('sophisticatedbackpacks:advanced_filter_upgrade', 1),
    [
      ' D ',
      'GFG',
      'RRR'
    ], {
    D: 'minecraft:diamond',
    G: 'minecraft:gold_ingot',
    F: 'sophisticatedbackpacks:filter_upgrade',
    R: 'minecraft:redstone'
  }
  ).id('sophisticatedbackpacks:advanced_filter_upgrade')

  // Tank Upgrade
  event.shaped(
    Item.of('sophisticatedbackpacks:tank_upgrade', 1),
    [
      ' T ',
      'GUG',
      ' T '
    ], {
    T: 'create:fluid_tank',
    G: '#forge:glass',
    U: 'sophisticatedbackpacks:upgrade_base'
  }
  ).id('sophisticatedbackpacks:tank_upgrade')

  // Battery Upgrade
  event.shaped(
    Item.of('sophisticatedbackpacks:battery_upgrade', 1),
    [
      'RAR',
      'CUC',
      'RAR'
    ], {
    R: 'minecraft:redstone',
    A: 'createaddition:modular_accumulator',
    C: 'createaddition:connector',
    U: 'sophisticatedbackpacks:upgrade_base'
  }
  ).id('sophisticatedbackpacks:battery_upgrade')

  // Pump Upgrade
  event.shaped(
    Item.of('sophisticatedbackpacks:pump_upgrade', 1),
    [
      ' P ',
      'SUS',
      'RRR'
    ], {
    P: 'create:mechanical_pump',
    S: 'minecraft:string',
    U: 'sophisticatedbackpacks:upgrade_base',
    R: 'minecraft:redstone'
  }
  ).id('sophisticatedbackpacks:pump_upgrade')
})