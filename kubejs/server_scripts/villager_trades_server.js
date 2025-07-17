MoreJSEvents.villagerTrades((event) => {
    const armorerTrade = event.addTrade('armorer', 5, ['minecraft:netherite_scrap', TradeItem.of('minecraft:diamond', 24, 48)], 'minecraft:netherite_upgrade_smithing_template');
    armorerTrade.maxUses(2);
    armorerTrade.villagerExperience(45);
    armorerTrade.priceMultiplier(0.1);

    const toolsmithTrade = event.addTrade('toolsmith', 5, ['minecraft:netherite_scrap', TradeItem.of('minecraft:diamond', 24, 48)], 'minecraft:netherite_upgrade_smithing_template');
    toolsmithTrade.maxUses(2);
    toolsmithTrade.villagerExperience(45);
    toolsmithTrade.priceMultiplier(0.1);

    const weaponsmithTrade = event.addTrade('weaponsmith', 5, ['minecraft:netherite_scrap', TradeItem.of('minecraft:diamond', 24, 48)], 'minecraft:netherite_upgrade_smithing_template');
    weaponsmithTrade.maxUses(2);
    weaponsmithTrade.villagerExperience(45);
    weaponsmithTrade.priceMultiplier(0.1);
  });