ServerEvents.recipes(event => {
  const copperBlocks = [
    { base: 'copper_block', modded: 'chiseled_copper' },
    { base: 'exposed_copper', modded: 'exposed_chiseled_copper' },
    { base: 'weathered_copper', modded: 'weathered_chiseled_copper' },
    { base: 'oxidized_copper', modded: 'oxidized_chiseled_copper' },
    { base: 'waxed_copper_block', modded: 'waxed_chiseled_copper' },
    { base: 'waxed_exposed_copper', modded: 'waxed_exposed_chiseled_copper' },
    { base: 'waxed_weathered_copper', modded: 'waxed_weathered_chiseled_copper' },
    { base: 'waxed_oxidized_copper', modded: 'waxed_oxidized_chiseled_copper' }
  ]

  copperBlocks.forEach(set => {
    event.stonecutting(
      `copperandtuffbackport:${set.modded}`,
      `minecraft:${set.base}`
    ).id(`copperandtuffbackport:${set.modded}_from_${set.base}_stonecutting`)
  })
})