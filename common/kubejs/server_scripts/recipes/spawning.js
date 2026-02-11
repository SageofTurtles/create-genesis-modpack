ServerEvents.recipes(event => {
  // Standard mob spawning
  event.custom({
    type: 'create_mob_spawners:spawning',
    input: {
      amount: 200,
      fluid: 'create:potion',
      nbt: {
        Potion: 'minecraft:long_regeneration',
        Bottle: 'REGULAR'
      }
    },
    spawn_ticks_at_max_speed: 100,
    additional_spawn_attempts: 1,
    spawnable_entity_blacklist: [
      'minecraft:wither',
      'minecraft:warden',
      'minecraft:ender_dragon'
    ]
  }).id('genesis:mob_spawning')

  // Mob boss spawning
  event.custom({
    type: 'create_mob_spawners:spawning',
    input: {
      amount: 500,
      fluid: 'create:potion',
      nbt: {
        Potion: 'minecraft:strong_regeneration',
        Bottle: 'LINGERING'
      }
    },
    spawn_ticks_at_max_speed: 250,
    additional_spawn_attempts: 0,
    spawnable_entity_whitelist: [
      'minecraft:wither',
      'minecraft:warden',
      'minecraft:ender_dragon'
    ]
  }).id('genesis:boss_spawning')
})