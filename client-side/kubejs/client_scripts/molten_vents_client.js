JEIEvents.information(event => {
  let vents = [
    'molten_vents:dormant_molten_asurine',
    'molten_vents:dormant_molten_veridium',
    'molten_vents:dormant_molten_crimsite',
    'molten_vents:dormant_molten_ochrum',
    'molten_vents:dormant_molten_scorchia',
    'molten_vents:dormant_molten_scoria',
    'molten_vents:active_molten_asurine',
    'molten_vents:active_molten_veridium',
    'molten_vents:active_molten_crimsite',
    'molten_vents:active_molten_ochrum',
    'molten_vents:active_molten_scorchia',
    'molten_vents:active_molten_scoria'
  ]
  vents.forEach(vent => {
    event.addItem(vent,
      [
        'Molten Vents in the form of a small outcropping of orestone can be found anywhere on the surface, but form more frequently underwater.',
        '\nMine the center of the outcropping until you find a Dormant Vent block.  When you explode the Dormant Vent block (such as with TNT), it will become an Active Vent.',
        '\nLava placed touching the Active Vent block in up to a 3-block range will be converted into the that type of orestone for a renewable supply.'
      ]
    )
  })
})
