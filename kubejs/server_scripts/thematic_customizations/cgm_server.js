ServerEvents.recipes(event => {
  // Short Sight
  event.shaped(
    Item.of('cgm:short_scope', 1),
    [
      'N',
      'S'
    ],
    {
      N: 'createdeco:industrial_iron_nugget',
      S: 'createdeco:industrial_iron_sheet'
    }
  ).id('genesis:short_scope')

  // Medium Scope
  event.recipes.create.deploying(
    'cgm:medium_scope',
    [
      'minecraft:spyglass',
      'create:brass_sheet'
    ]
  ).id('genesis:medium_scope')

  // Long Scope
  event.recipes.create.deploying(
    'cgm:long_scope',
    [
      'cgm:medium_scope',
      'create:framed_glass'
    ]
  ).id('genesis:long_scope')
})