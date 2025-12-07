MoreJSEvents.villagerTrades((event) => {
  const toolsmithTrade = event.addTrade(
    'toolsmith',
    5,
    [
      'minecraft:netherite_scrap',
      TradeItem.of('minecraft:diamond', 24, 48)
    ],
    'minecraft:netherite_upgrade_smithing_template'
  );
  toolsmithTrade.maxUses(2);
  toolsmithTrade.villagerExperience(45);
  toolsmithTrade.priceMultiplier(0.1);
});