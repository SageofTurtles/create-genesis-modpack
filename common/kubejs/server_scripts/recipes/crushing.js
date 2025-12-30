ServerEvents.recipes(event => {
  // Define function to create recipes
  const add = (recipeId, input, outputs) => {
    event.recipes.create.crushing(
      outputs,
      input
    ).id(`genesis:${recipeId}_crushing`)
  }

  // Add individual recipes
  add('flint_block', 'supplementaries:flint_block', Item.of('minecraft:gravel').withChance(0.85))
  add('prismarine_bricks', 'minecraft:prismarine_bricks', [Item.of('minecraft:lapis_lazuli').withChance(0.9), Item.of('create:experience_nugget').withChance(0.5), Item.of('create:copper_nugget').withChance(0.06)])
  add('tuff', '#create:stone_types/tuff', [Item.of('minecraft:flint').withChance(0.25), Item.of('create:zinc_nugget').withChance(0.12)])

  // Add bulk recipes
  global.CORALS.forEach(entry => {
    add(`${entry}_coral_block`, `minecraft:${entry}_coral_block`, Item.of('create_aquatic_ambitions:suspicious_rock').withChance(0.05))
  })
})