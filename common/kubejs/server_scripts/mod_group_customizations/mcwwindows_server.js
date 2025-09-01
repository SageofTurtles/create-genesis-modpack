ServerEvents.recipes(event => {
  // Bamboo Shutter
  event.shaped(
    '3x mcwwindows:bamboo_shutter',
    [
      'B',
      'B',
      'B'
    ],
    {
      B: 'minecraft:bamboo_trapdoor'
    }
  ).id('mcwwindows:bamboo_shutter')
})