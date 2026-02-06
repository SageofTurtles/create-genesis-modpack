
// Give players Book of the Mechanist on first login
PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has('previously_joined')) {
    event.player.stages.add('previously_joined')
    event.player.give(Item.of("patchouli:guide_book").withNBT({ "patchouli:book": "patchouli:genesis_guidebook" }))
    event.player.tell([
      { text: 'An ', color: 'dark_aqua' },
      { text: 'unknown entity', color: 'aqua' },
      { text: ' has gifted you with one ', color: 'dark_aqua' },
      { text: 'Book of the Mechanist', color: 'aqua' },
      { text: '...', color: 'dark_aqua' }
    ])
  }
})