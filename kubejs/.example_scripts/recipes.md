## Visit the official wiki:  https://kubejs.com/wiki/
## Official Discord:  https://discord.gg/lat

Server scripts can be reloaded in-game using the '/reload' command.
Use 'console.log()' to print text to the game's log when specific scripts are run.

---

## MODIFYING RECIPES

ServerEvents.recipes(event => {

  // You can replace 'event' with any name you like, as
  // long as you change it inside the callback too!

  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.

})


## ADDING RECIPES

The following events can be used inside the above script within '(event => { ... })' by replacing the '...' with the desired modification.


### Shaped Crafting

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('MODID:ITEM', COUNT),  // Output item & count (as integer)
    [
      'A A',
      ' B ',  // Crafting pattern (spaces = empty slots)
      'CBC'
    ],
    {
      A: 'MODID:ITEM',
      B: 'MODID:ITEM',  // Define items in crafting pattern
      C: 'MODID:ITEM'
    }
  )
})


### Shapeless Crafting

ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('MODID:ITEM', COUNT),  // Output item & count (as integer)
    [
      'MODID:ITEM',
      'MODID:ITEM',  // Input items (up to 9 items, each on own line)
      'MODID:ITEM'
    ]
  )
})


### Smelting

There are two script formats that can be used if you want to add a custom xp output and/or cook time.  These scripts can use any of the following events:
 - event.smelting()  // for regular furnace smelting
 - event.blasting()  // for blast furnace smelting
 - event.smoking()  // for smoker cooking
 - event.campfireCooking()  // for campfire cooking

// If optional XP or COOKTIME variables used in this format, both must be included!
ServerEvents.recipes(event => {
  event.smelting(
    'COUNTx MODID:ITEM',  // Output item and (optional) count (ex. '3x minecraft:gravel')
    'MODID:ITEM',  // Input item
    XP,  // (Optional) xp output as a decimal (1.00 = 1xp)
    COOKTIME  // (Optional) cook time in ticks (default 200)
  )
})

// Either .xp() or .cookingTime() or both can be used in this format
ServerEvents.recipes(event => {
  event.smelting(
    'COUNTx MODID:ITEM',  // Output item and (optional) count (ex. '3x minecraft:gravel')
    'MODID:ITEM'  // Input item
  )
  .xp(XP)  // (Optional) xp output as a decimal (1.00 = 1xp)
  .cookingTime(COOKTIME)  // (Optional) cook time in ticks (default 200)
})


### Smithing

ServerEvents.recipes(event => {
  event.smithing(
    'MODID:ITEM',  // Output item
    'MODID:ITEM',  // Smithing template item
    'MODID:ITEM',  // Base item to be upgraded
    'MODID:ITEM'   // Trim or upgrade material item
  )
})


### Stonecutting

ServerEvents.recipes(event => {
  event.stonecutting(
    'COUNTx MODID:ITEM',  // Output item and (optional) count (ex. '3x minecraft:gravel')
    'MODID:ITEM'  // Input item
  )
})


## REMOVING & REPLACING RECIPES

// Removing recipes
ServerEvents.recipes(event => {
  event.remove(
    // Insert recipe filter here
  )
})

// Replacing recipes
ServerEvents.recipes(event => {
  event.replaceInput(
    RECIPEFILTER,  // Insert recipe filter here
    'MODID:ITEM',  // Item in recipe(s) to be replaced
    'MODID:ITEM'  // Item or tag to replace it with
  )
})


### Recipe Filter

// Remove all recipes
{}

// Remove recipes by recipe type
{type: 'MODID:RECIPETYPE'}

// Remove recipes by output item
{output: 'MODID:ITEM'}

// Remove recipes by input item
{input: 'MODID:ITEM'}

// Remove recipes by mod
{mod: 'MODID'}

// Remove recipes by recipe ID
{id: 'RECIPEID'})


### Combining Filter Conditions

// All conditions must be met ("AND")
{
  CONDITION_1: 'VALUE_1',
  CONDITION_2: 'VALUE_2'
}

// Any condition can be met ("OR")
[
  {CONDITION_1: 'VALUE_1'},
  {CONDITION_2: 'VALUE_2'}
]

// Condition must not be met ("NOT")
{not:
  {CONDITION: 'VALUE'}
}


## DATAPACK RECIPES

ServerEvents.recipes(event => {
  event.custom(

    // You can write a JSON file here to add a
    // recipe using the same format as a datapack.
    // This is useful for adding modded and
    // unsupported recipe types.

  )
})


## HELPER FUNCTIONS

Helper functions can be used to bulk-produce similar scripts by replacing specified variables with each repitition.

ServerEvents.recipes(event => {
  function NAME(VARIABLE_1, VARIABLE_2) {
    // Insert recipe script here, using variables for dynamic conditions
  }
  // Now list the function above with the variables defined for each repitition
  NAME(NEW_VARIABLE_1, NEW_VARIABLE_2)
  NAME(NEW_VARIABLE_3, NEW_VARIABLE_4)
})


### Helper Function Examples

An example below of this principle in practice.  This example will create three new shaped crafting recipes.
 - The first will produce the item 'kubejs:potted_snowball' as the variable output from three bricks and the variable input as 'minecraft:snowball'.
 - The second will produce the item 'kubejs:potted_lava' as the variable output from three bricks and the variable input as 'minecraft:lava_bucket'.
 - The third will produce the item 'minecraft:blast_furnace' as the variable output from three bricks and the variable input as 'minecraft:furnace'.

ServerEvents.recipes(event => {
  function potting(output, pottedInput) {
    event.shaped(output, [
      'BIB',
      ' B '
    ], {
      B: 'minecraft:brick',
      I: pottedInput
    })
  }
  potting('kubejs:potted_snowball', 'minecraft:snowball')
  potting('kubejs:potted_lava', 'minecraft:lava_bucket')
  potting('minecraft:blast_furnace', 'minecraft:furnace')
})

