ServerEvents.recipes(event => {
  function ropeRecipe(count, input, id) {
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
    ).id(id)
  }
  ropeRecipe(1, 'minecraft:string', 'genesis:rope_from_string')
  ropeRecipe(2, 'supplementaries:flax', 'supplementaries:rope')
  ropeRecipe(2, 'farmersdelight:straw', 'farmersdelight:rope')
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
