JEIEvents.information(event => {
  let breeches = [
    'createbigcannons:quickfiring_mechanism',
    'createbigcannons:cast_iron_sliding_breech',
    'createbigcannons:cast_iron_quickfiring_breech',
    'createbigcannons:bronze_sliding_breech',
    'createbigcannons:bronze_quickfiring_breech',
    'createbigcannons:steel_sliding_breech',
    'createbigcannons:steel_quickfiring_breech'
  ]
  breeches.forEach(breech => {
    event.addItem(breech,
      ['Right-click on a Sliding Breech with a Quick-Firing Mechanism to convert it into a Quick-Firing Breech.']
    )
  })
})