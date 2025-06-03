ServerEvents.recipes(event => {
  event.remove([
    {input: 'supplementaries:rope'},
    {output: 'supplementaries:rope'},
    {id: 'farmersdelight:rope'}
  ])
  function ropeRecipe(count, input) {
    event.shaped(
      Item.of('farmersdelight:rope', count),
      [
        '1',
        '1',
        '1'
      ],
      {
        1: input
      }
    )
  }
  ropeRecipe(1, 'minecraft:string')
  ropeRecipe(2, 'supplementaries:flax')
  ropeRecipe(2, 'farmersdelight:straw')
})
ServerEvents.tags('item', event => {
  event.removeAllTagsFrom('supplementaries:rope')
  event.add('forge:ropes', 'farmersdelight:rope')
})
ServerEvents.tags('block', event => {
  event.removeAllTagsFrom('supplementaries:rope')
  event.add('forge:ropes', 'farmersdelight:rope')
  event.add('supplementaries:fast_fall_climbable', 'farmersdelight:rope')
})
