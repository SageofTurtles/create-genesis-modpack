ItemEvents.tooltip(event => {
  event.addAdvanced('kubejs:worldedit_wand', (item, advanced, text) => {
    text.add(1,[
      Text.gold('Used to make WorldEdit selections.')
    ])
    text.add(2, [
      Text.yellow('Left-click'), Text.gold(' to set first corner of selection.')
    ])
    text.add(3, [
      Text.yellow('Right-click'), Text.gold(' to set second corner of selection.')
    ])
    text.add(4, [
      Text.gold('Use the '), Text.yellow('//desel'), Text.gold(' or '), Text.yellow('//deselect'), Text.gold(' command to clear the selection.')
    ])
  })
})