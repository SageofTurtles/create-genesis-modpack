ServerEvents.recipes(event => {
  event.remove({ id: 'create:rose_quartz_block_from_rose_quartz_stonecutting'})
  event.shaped(
    Item.of('create:rose_quartz_block', 1),
    [
      '111',
      '111',
      '111'
    ],
    {
      1: 'create:rose_quartz'
    }
  )
  event.shapeless(
    Item.of('create:rose_quartz', 9),
    [
      'create:rose_quartz_block'
    ]
  )
})