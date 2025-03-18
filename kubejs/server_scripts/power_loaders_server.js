// List blocks to be made unbreakable with 'create:wrench'
let loaders = [
  'create_power_loader:empty_brass_chunk_loader',
  'create_power_loader:empty_andesite_chunk_loader',
  'create_power_loader:brass_chunk_loader',
  'create_power_loader:andesite_chunk_loader'
]

// Make blocks unbreakable with 'create:wrench'
loaders.forEach(loaders => {
  BlockEvents.broken(`${loaders}`, event => {
    if (!event.player.isCreative()) {
      event.player.tell('§cYou do not have permission to do that.')
      event.cancel()
    }
  })
})
