ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting('create_jetpack:jetpack', [
    ' BSB ',
    'BPCPB',
    'BRTRB',
    ' H H '
  ], {
    B: 'create:brass_sheet',
    S: 'create:shaft',
    P: 'create:precision_mechanism',
    C: 'create:copper_backtank',
    R: 'create:propeller',
    T: 'create_ironworks:steel_armor_chestplate',
    H: 'create:chute'
  }).id('create_jetpack:jetpack')
  event.remove({ id: 'create_jetpack:netherite_jetpack_upgrade_from_netherite' })
  event.remove({ id: 'create_jetpack:netherite_jetpack' })
})
