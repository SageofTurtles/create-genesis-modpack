ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'createrailwaysnavigator:navigator',
    [
      "AIA",
      "IGI",
      "IPI",
      "ATA"
    ],
    {
      A: 'create:andesite_alloy',
      I: 'create:iron_sheet',
      G: '#forge:glass_panes/colorless',
      P: 'create:precision_mechanism',
      T: 'create:transmitter'
    }
  ).id('createrailwaysnavigator:navigator')
})