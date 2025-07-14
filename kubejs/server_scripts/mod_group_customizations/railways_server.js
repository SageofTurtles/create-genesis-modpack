ServerEvents.recipes(event => {
  // Remove mechanical crafting recipes
  event.remove({ id: /railways:mechanical_crafting\/.*locometal_boiler/ })

  // Colorless Locometal Boilers
  event.stonecutting(
    'railways:locometal_boiler',
    'railways:slashed_locometal'
  ).id('genesis:locometal_boiler_from_stonecutting')

  event.stonecutting(
    'railways:brass_wrapped_locometal_boiler',
    'railways:brass_wrapped_locometal'
  ).id('genesis:brass_wrapped_locometal_boiler_from_stonecutting')

  event.stonecutting(
    'railways:copper_wrapped_locometal_boiler',
    'railways:copper_wrapped_locometal'
  ).id('genesis:copper_wrapped_locometal_boiler_from_stonecutting')

  event.stonecutting(
    'railways:iron_wrapped_locometal_boiler',
    'railways:iron_wrapped_locometal'
  ).id('genesis:iron_wrapped_locometal_boiler_from_stonecutting')

  // Colored Locometal Boilers
  global.colors.forEach(color => {
    event.stonecutting(
      `railways:${color}_locometal_boiler`,
      `railways:${color}_slashed_locometal`
    ).id(`genesis:${color}_locometal_boiler_from_stonecutting`)

    event.stonecutting(
      `railways:${color}_brass_wrapped_locometal_boiler`,
      `railways:${color}_brass_wrapped_locometal`
    ).id(`genesis:${color}_brass_wrapped_locometal_boiler_from_stonecutting`)

    event.stonecutting(
      `railways:${color}_copper_wrapped_locometal_boiler`,
      `railways:${color}_copper_wrapped_locometal`
    ).id(`genesis:${color}_copper_wrapped_locometal_boiler_from_stonecutting`)

    event.stonecutting(
      `railways:${color}_iron_wrapped_locometal_boiler`,
      `railways:${color}_iron_wrapped_locometal`
    ).id(`genesis:${color}_iron_wrapped_locometal_boiler_from_stonecutting`)
  })
})