ServerEvents.recipes(event => {
  event.shaped(
    '2x minecraft:ender_eye',
    [
      ' O ',
      'HES',
      ' B '
    ],
    {
      O: 'create:powdered_obsidian',
      H: 'create_aquatic_ambitions:spiky_shell',
      E: 'minecraft:ender_pearl',
      S: 'minecraft:echo_shard',
      B: 'minecraft:blaze_rod'
    }
  ).id('minecraft:ender_eye')
})