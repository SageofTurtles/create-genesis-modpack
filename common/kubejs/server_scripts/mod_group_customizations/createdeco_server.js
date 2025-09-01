ServerEvents.recipes(event => {
  // Sheet Metal blocks
  event.shaped(
    'createdeco:andesite_sheet_metal',
    [
      'SS',
      'SS'
    ],
    {
      S: 'createdeco:andesite_sheet'
    }
  ).id('createdeco:andesite_sheet_metal')

  event.shaped(
    'createdeco:industrial_iron_sheet_metal',
    [
      'SS',
      'SS'
    ],
    {
      S: 'createdeco:industrial_iron_sheet'
    }
  ).id('createdeco:industrial_iron_sheet_metal')

  event.shaped(
    'createdeco:brass_sheet_metal',
    [
      'SS',
      'SS'
    ],
    {
      S: 'create:brass_sheet'
    }
  ).id('createdeco:brass_sheet_metal')

  event.shaped(
    'createdeco:copper_sheet_metal',
    [
      'SS',
      'SS'
    ],
    {
      S: 'create:copper_sheet'
    }
  ).id('createdeco:copper_sheet_metal')

  event.shaped(
    'createdeco:iron_sheet_metal',
    [
      'SS',
      'SS'
    ],
    {
      S: 'create:iron_sheet'
    }
  ).id('createdeco:iron_sheet_metal')

  event.shaped(
    'createdeco:zinc_sheet_metal',
    [
      'SS',
      'SS'
    ],
    {
      S: 'createdeco:zinc_sheet'
    }
  ).id('createdeco:zinc_sheet_metal')

  // Remove shaped crafting Hull recipes
  event.remove({ type: 'minecraft:crafting_shaped', id: /createdeco:.*_hull/ })
})