ItemEvents.tooltip(event => {
  event.addAdvanced('arrowplus:arrow_plus', (item, advanced, text) => {
    switch (item.nbt.arrow_data.material) {

      // Amethyst
      case 'minecraft:amethyst_shard':
        text.add(2, [
          Text.darkAqua('Makes the target '),
          Text.aqua('glow'),
          Text.darkAqua(' for '),
          Text.aqua('2 seconds'),
          Text.darkAqua('.')
        ])
        break;

      // Bone
      case 'minecraft:bone':
        text.add(2, [
          Text.aqua('Poisons'),
          Text.darkAqua(' the target for '),
          Text.aqua('5 seconds'),
          Text.darkAqua('.')
        ])
        break;

      // Brick
      case 'minecraft:brick':
        text.add(2, [
          Text.red('Has a shorter range than a normal arrow.')
        ])
        break;

      // Charcoal
      case 'minecraft:charcoal':
        text.add(2, [
          Text.gold('Briefly sets the target on fire.')
        ])
        break;

      // Copper
      case 'minecraft:copper_ingot':
        text.add(2, [
          Text.aqua('Stuns'),
          Text.darkAqua(' the target for '),
          Text.aqua('2 seconds'),
          Text.darkAqua('.')
        ])
        break;

      // Diamond
      case 'minecraft:diamond':
        text.add(2, [
          Text.darkAqua('Causes the target to '),
          Text.aqua('bleed'),
          Text.darkAqua(' for '),
          Text.aqua('5 seconds'),
          Text.darkAqua('.')
        ])
        break;

      // Glowstone
      case 'minecraft:glowstone_dust':
        text.add(2, [
          Text.darkAqua('Makes the target '),
          Text.aqua('glow'),
          Text.darkAqua(' for '),
          Text.aqua('2 seconds'),
          Text.darkAqua('.')
        ])
        text.add(3, [
          Text.gold('Briefly sets the target on fire.')
        ])
        break;

      // Gold
      case 'minecraft:gold_ingot':
        text.add(2, [
          Text.red('Has a shorter range than a normal arrow.')
        ])
        break;

      // Netherite
      case 'minecraft:netherite_ingot':
        text.add(2, [
          Text.aqua('Slows'),
          Text.darkAqua(' the target for '),
          Text.aqua('8 seconds'),
          Text.darkAqua('.')
        ])
        text.add(3, [
          Text.green('Has a longer range than a normal arrow.')
        ])
        break;

      // Obsidian
      case 'minecraft:obsidian':
        text.add(2, [
          Text.aqua('Blinds'),
          Text.darkAqua(' the target for '),
          Text.aqua('3 seconds'),
          Text.darkAqua('.')
        ])
        break;

      // Prismarine
      case 'minecraft:prismarine_shard':
        text.add(2, [
          Text.darkAqua('Causes the target to '),
          Text.aqua('bleed'),
          Text.darkAqua(' for '),
          Text.aqua('3 seconds'),
          Text.darkAqua('.')
        ])
        break;
    }
  })
})