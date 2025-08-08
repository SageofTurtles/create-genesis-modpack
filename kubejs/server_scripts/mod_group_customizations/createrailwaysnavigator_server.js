ServerEvents.recipes(event => {
  // Navigator
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

  // Remove Advanced Display recipes
  event.remove({ output: /createrailwaysnavigator:advanced_display.*/ })

  // Advanced Display Block
  event.shaped(
    '4x createrailwaysnavigator:advanced_display_block',
    [
      'ASA',
      'DDD',
      'ASA'
    ],
    {
      A: 'create:andesite_alloy',
      S: 'create:sturdy_sheet',
      D: 'create:display_board'
    }
  ).id('genesis:advanced_display_block')

  event.shaped(
    'createrailwaysnavigator:advanced_display_block',
    [
      'AA'
    ],
    {
      A: 'createrailwaysnavigator:advanced_display'
    }
  ).id('genesis:advanced_display_block_from_advanced_display')

  event.shaped(
    'createrailwaysnavigator:advanced_display_block',
    [
      'AA'
    ],
    {
      A: 'createrailwaysnavigator:advanced_display_slab'
    }
  ).id('genesis:advanced_display_block_from_advanced_display_slab')

  event.shaped(
    'createrailwaysnavigator:advanced_display_block',
    [
      'AA'
    ],
    {
      A: 'createrailwaysnavigator:advanced_display_sloped'
    }
  ).id('genesis:advanced_display_block_from_advanced_display_sloped')

  event.shaped(
    'createrailwaysnavigator:advanced_display_block',
    [
      'AA',
      'AA'
    ],
    {
      A: 'createrailwaysnavigator:advanced_display_small'
    }
  ).id('genesis:advanced_display_block_from_advanced_display_small')

  event.shaped(
    'createrailwaysnavigator:advanced_display_block',
    [
      'AA',
      'AA'
    ],
    {
      A: 'createrailwaysnavigator:advanced_display_panel'
    }
  ).id('genesis:advanced_display_block_from_advanced_display_panel')

  // Advanced Display
  event.shaped(
    'createrailwaysnavigator:advanced_display',
    [
      'A'
    ],
    {
      A: 'createrailwaysnavigator:advanced_display_slab'
    }
  ).id('genesis:advanced_display_from_advanced_display_slab')

  event.stonecutting(
    '2x createrailwaysnavigator:advanced_display',
    'createrailwaysnavigator:advanced_display_block'
  ).id('genesis:advanced_display_stonecutting')

  // Advanced Display Slab
  event.shaped(
    'createrailwaysnavigator:advanced_display_slab',
    [
      'A'
    ],
    {
      A: 'createrailwaysnavigator:advanced_display'
    }
  ).id('genesis:advanced_display_slab_from_advanced_display')

  event.stonecutting(
    '2x createrailwaysnavigator:advanced_display_slab',
    'createrailwaysnavigator:advanced_display_block'
  ).id('genesis:advanced_display_slab_stonecutting')

  // Advanced Display Panel
  event.shaped(
    'createrailwaysnavigator:advanced_display_panel',
    [
      'AA'
    ],
    {
      A: 'createrailwaysnavigator:advanced_display_half_panel'
    }
  ).id('genesis:advanced_display_panel_from_advanced_display_half_panel')

  event.stonecutting(
    '4x createrailwaysnavigator:advanced_display_panel',
    'createrailwaysnavigator:advanced_display_block'
  ).id('genesis:advanced_display_panel_stonecutting')

  // Advanced Display Small
  event.stonecutting(
    '4x createrailwaysnavigator:advanced_display_small',
    'createrailwaysnavigator:advanced_display_block'
  ).id('genesis:advanced_display_small_stonecutting')

  // Advanced Display Half Panel
  event.stonecutting(
    '8x createrailwaysnavigator:advanced_display_half_panel',
    'createrailwaysnavigator:advanced_display_block'
  ).id('genesis:advanced_display_half_panel_stonecutting')

  // Advanced Display Sloped
  event.stonecutting(
    '2x createrailwaysnavigator:advanced_display_sloped',
    'createrailwaysnavigator:advanced_display_block'
  ).id('genesis:advanced_display_sloped_stonecutting')
})