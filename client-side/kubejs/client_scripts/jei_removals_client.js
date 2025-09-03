JEIEvents.removeCategories(event => {
  event.remove('jeresources:enchantment')
  event.remove('jeresources:mob')
  event.remove('jeresources:plant')
  event.remove('jeresources:villager')
  event.remove('jeresources:worldgen')
  event.remove('minecraft:tag_recipes/worldgen/biome')
})

JEIEvents.removeRecipes(event => {
  event.remove('minecraft:crafting', 'minecraft:farmersdelight.dough')
})