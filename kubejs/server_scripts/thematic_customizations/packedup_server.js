ServerEvents.recipes(event => {
  let bookBundleSet = [
    { block: 'book_bundle', slab: 'book_bundle_slab', layer: 'book_pile' },
    { block: 'white_book_bundle', slab: 'white_book_bundle_slab', layer: 'white_book_pile' },
    { block: 'light_gray_book_bundle', slab: 'light_gray_book_bundle_slab', layer: 'light_gray_book_pile' },
    { block: 'gray_book_bundle', slab: 'gray_book_bundle_slab', layer: 'gray_book_pile' },
    { block: 'black_book_bundle', slab: 'black_book_bundle_slab', layer: 'black_book_pile' },
    { block: 'brown_book_bundle', slab: 'brown_book_bundle_slab', layer: 'brown_book_pile' },
    { block: 'red_book_bundle', slab: 'red_book_bundle_slab', layer: 'red_book_pile' },
    { block: 'orange_book_bundle', slab: 'orange_book_bundle_slab', layer: 'orange_book_pile' },
    { block: 'yellow_book_bundle', slab: 'yellow_book_bundle_slab', layer: 'yellow_book_pile' },
    { block: 'lime_book_bundle', slab: 'lime_book_bundle_slab', layer: 'lime_book_pile' },
    { block: 'green_book_bundle', slab: 'green_book_bundle_slab', layer: 'green_book_pile' },
    { block: 'cyan_book_bundle', slab: 'cyan_book_bundle_slab', layer: 'cyan_book_pile' },
    { block: 'light_blue_book_bundle', slab: 'light_blue_book_bundle_slab', layer: 'light_blue_book_pile' },
    { block: 'blue_book_bundle', slab: 'blue_book_bundle_slab', layer: 'blue_book_pile' },
    { block: 'purple_book_bundle', slab: 'purple_book_bundle_slab', layer: 'purple_book_pile' },
    { block: 'magenta_book_bundle', slab: 'magenta_book_bundle_slab', layer: 'magenta_book_pile' },
    { block: 'pink_book_bundle', slab: 'pink_book_bundle_slab', layer: 'pink_book_pile' }
  ]

  bookBundleSet.forEach(set => {
    event.remove({
      type: 'minecraft:crafting_shaped',
      output: `packedup:${set.slab}`
    })
    event.shaped(
      Item.of(`packedup:${set.slab}`, 6),
      [
        'BBB'
      ],
      {
        B: `packedup:${set.block}`
      }
    ).id(`genesis:${set.slab}_from_${set.block}_crafting`)
    event.shaped(
      Item.of(`packedup:${set.slab}`, 1),
      [
        'LL'
      ],
      {
        L: `packedup:${set.layer}`
      }
    ).id(`genesis:${set.slab}_from_${set.layer}_crafting`)
    event.shaped(
      Item.of(`packedup:${set.layer}`, 6),
      [
        'SSS'
      ],
      {
        S: `packedup:${set.slab}`
      }
    ).id(`genesis:${set.layer}_from_${set.slab}_crafting`)
    event.shaped(
      Item.of(`packedup:${set.block}`, 1),
      [
        'SS'
      ],
      {
        S: `packedup:${set.slab}`
      }
    ).id(`genesis:${set.block}_from_${set.slab}_crafting`)
    event.stonecutting(
      `2x packedup:${set.slab}`,
      `packedup:${set.block}`
    ).id(`genesis:${set.slab}_from_${set.block}_stonecutting`)
    event.stonecutting(
      `4x packedup:${set.layer}`,
      `packedup:${set.block}`
    ).id(`genesis:${set.layer}_from_${set.block}_stonecutting`)
    event.stonecutting(
      `2x packedup:${set.layer}`,
      `packedup:${set.slab}`
    ).id(`genesis:${set.layer}_from_${set.slab}_stonecutting`)
  })
})