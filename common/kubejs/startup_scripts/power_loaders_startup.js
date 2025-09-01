// List blocks to be made unbreakable
let loaders = [
  'create_power_loader:empty_brass_chunk_loader',
  'create_power_loader:empty_andesite_chunk_loader',
  'create_power_loader:brass_chunk_loader',
  'create_power_loader:andesite_chunk_loader'
]

// Make 'loader' blocks unbreakable
loaders.forEach(loaders => {
  BlockEvents.modification(event => {
    event.modify(`${loaders}`, block => {
      block.destroySpeed = -1
      block.explosionResistance = 3600000
    })
  })
})
