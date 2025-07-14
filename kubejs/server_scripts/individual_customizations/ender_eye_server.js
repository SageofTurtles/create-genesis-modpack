ServerEvents.recipes(event => {
  event.shaped(
    '2x minecraft:ender_eye',
    [
      ' O ',
      'NES',
      ' B '
    ],
    {
      O: 'create:powdered_obsidian',
      N: 'minecraft:nautilus_shell',
      E: 'minecraft:ender_pearl',
      S: 'minecraft:echo_shard',
      B: 'minecraft:blaze_rod'
    }
  ).id('minecraft:ender_eye')
})