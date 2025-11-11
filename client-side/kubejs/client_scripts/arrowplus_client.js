ItemEvents.tooltip(event => {
  event.addAdvanced('arrowplus:arrow_plus', (item, advanced, text) => {
    switch (item.nbt.arrow_data) {

      // Bone
      case 'arrowplus:bone':
        text.add(2, [
          Text.aqua('Poisons'),
          Text.darkAqua(' the target for '),
          Text.aqua('5 seconds'),
          Text.darkAqua('.')
        ])
        break;

      // Charcoal
      case 'arrowplus:charcoal':
        text.add(2, [
          Text.gold('Briefly sets the target on fire.')
        ])
        break;

      // Copper
      case 'arrowplus:copper':
        text.add(2, [
          Text.aqua('Stuns'),
          Text.darkAqua(' the target for '),
          Text.aqua('3 seconds'),
          Text.darkAqua('.')
        ])
        break;

      // Diamond
      case 'arrowplus:diamond':
        text.add(2, [
          Text.aqua('Slows'),
          Text.darkAqua(' the target for '),
          Text.aqua('5 seconds'),
          Text.darkAqua('.')
        ])
        break;

      // Gold
      case 'arrowplus:gold':
        text.add(2, [
          Text.darkAqua('Gives the target '),
          Text.aqua('weakness'),
          Text.darkAqua(' for '),
          Text.aqua('5 seconds'),
          Text.darkAqua('.')
        ])
        break;

      // Netherite
      case 'arrowplus:netherite':
        text.add(2, [
          Text.darkAqua('Causes the target to '),
          Text.aqua('bleed'),
          Text.darkAqua(' for '),
          Text.aqua('10 seconds'),
          Text.darkAqua('.')
        ])
        break;

      // Obsidian
      case 'arrowplus:obsidian':
        text.add(2, [
          Text.aqua('Blinds'),
          Text.darkAqua(' the target for '),
          Text.aqua('3 seconds'),
          Text.darkAqua('.')
        ])
        break;

      // Prismarine
      case 'arrowplus:prismarine':
        text.add(2, [
          Text.darkAqua('Gives the target '),
          Text.aqua('mining fatigue'),
          Text.darkAqua(' for '),
          Text.aqua('10 seconds'),
          Text.darkAqua('.')
        ])
        break;
    }
  })
})