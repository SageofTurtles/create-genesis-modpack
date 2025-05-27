// Items to be bulk deleted
let deleteItems = [
  'create_enchantment_industry:experience_rotor',
  'bellsandwhistles:metro_casing',
  'bellsandwhistles:corrugated_metro_casing',
  'bellsandwhistles:metro_panel',
  'bellsandwhistles:corrugated_metro_panel',
  'bellsandwhistles:metro_trapdoor',
  'bellsandwhistles:metro_window',
  'create:crushed_raw_tin',
  'createmetalwork:crushed_andesite',
  'createmetalwork:crushed_netherite_scrap',
  'cgm:workbench',
  'create_central_kitchen:mulberry_pie_slice',
  'create_central_kitchen:yucca_cake_slice',
  'create_central_kitchen:aloe_cake_slice',
  'create_central_kitchen:passion_fruit_cake_slice',
  'create_central_kitchen:pumpkin_cake_slice',
  'create_central_kitchen:sweet_berry_cake_slice',
  'createdeco:white_shipping_container',
  'createdeco:orange_shipping_container',
  'createdeco:magenta_shipping_container',
  'createdeco:light_blue_shipping_container',
  'createdeco:yellow_shipping_container',
  'createdeco:lime_shipping_container',
  'createdeco:pink_shipping_container',
  'createdeco:gray_shipping_container',
  'createdeco:light_gray_shipping_container',
  'createdeco:cyan_shipping_container',
  'createdeco:purple_shipping_container',
  'createdeco:blue_shipping_container',
  'createdeco:brown_shipping_container',
  'createdeco:green_shipping_container',
  'createdeco:red_shipping_container',
  'createdeco:black_shipping_container',
  'brewinandchewin:kombucha',
  'createaddition:straw'
]


// Bulk recipe & tag removal
ServerEvents.recipes(event => {
  deleteItems.forEach(itemInstance =>
    event.remove([
      {input: itemInstance},
      {output: itemInstance}
    ])
  )
})
ServerEvents.tags('item', event => {
  deleteItems.forEach(itemInstance =>
    event.removeAllTagsFrom(itemInstance)
  )
})
ServerEvents.tags('block', event => {
  deleteItems.forEach(itemInstance =>
    event.removeAllTagsFrom(itemInstance)
  )
})
ServerEvents.compostableRecipes(event => {
  deleteItems.forEach(itemInstance =>
    event.remove(itemInstance)
  )
})


// Remove recipe for Apotheosis 'Chronicle of Shadows'
ServerEvents.recipes(event => {
  event.remove([
    {output: Item.of('patchouli:guide_book', '{"patchouli:book":"apotheosis:apoth_chronicle"}').weakNBT()}
  ])
})


// Remove tags from Sophisticated Backpacks XP
ServerEvents.tags('fluid', event => {
  event.removeAllTagsFrom('sophisticatedcore:xp_still')
})
