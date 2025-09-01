ServerEvents.recipes(event => {

  let longAllowed = [
    'slow_falling',
    'leaping',
    'poison',
    'regeneration',
    'strength',
    'fire_resistance',
    'turtle_master',
    'night_vision',
    'water_breathing',
    'swiftness',
    'weakness',
    'slowness',
    'invisibility'
  ]

  let strongAllowed = [
    'leaping',
    'healing',
    'poison',
    'regeneration',
    'strength',
    'turtle_master',
    'swiftness',
    'slowness',
    'harming'
  ]

  let effectList = [
    'slow_falling',
    'leaping',
    'healing',
    'poison',
    'regeneration',
    'strength',
    'fire_resistance',
    'turtle_master',
    'night_vision',
    'water_breathing',
    'swiftness',
    'weakness',
    'slowness',
    'harming',
    'invisibility'
  ]

  let otherBases = [
    { input: Fluid.of('minecraft:water', 1000), ingredient: 'minecraft:fermented_spider_eye', type: 'REGULAR', output: 'weakness' },
    { input: Fluid.of('minecraft:water', 1000), ingredient: 'minecraft:nether_wart', type: 'REGULAR', output: 'awkward' },
    { input: Fluid.of('minecraft:water', 1000), ingredient: 'minecraft:redstone', type: 'REGULAR', output: 'mundane' },
    { input: Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: 'minecraft:awkward' }), ingredient: 'minecraft:gunpowder', type: 'SPLASH', output: 'awkward' },
    { input: Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: 'minecraft:awkward' }), ingredient: Fluid.of('create_central_kitchen:dragon_breath', 250), type: 'LINGERING', output: 'awkward' }
  ]

  let conversionBases = [
    { ingredient: 'phantom_membrane', output: 'slow_falling' },
    { ingredient: 'rabbit_foot', output: 'leaping' },
    { ingredient: 'glistering_melon_slice', output: 'healing' },
    { ingredient: 'spider_eye', output: 'poison' },
    { ingredient: 'ghast_tear', output: 'regeneration' },
    { ingredient: 'blaze_powder', output: 'strength' },
    { ingredient: 'magma_cream', output: 'fire_resistance' },
    { ingredient: 'turtle_helmet', output: 'turtle_master' },
    { ingredient: 'golden_carrot', output: 'night_vision' },
    { ingredient: 'pufferfish', output: 'water_breathing' },
    { ingredient: 'sugar', output: 'swiftness' }
  ]

  let inversionBases = [
    { input: 'leaping', output: 'slowness' },
    { input: 'long_leaping', output: 'long_slowness' },
    { input: 'strong_leaping', output: 'strong_slowness' },
    { input: 'swiftness', output: 'slowness' },
    { input: 'long_swiftness', output: 'long_slowness' },
    { input: 'strong_swiftness', output: 'strong_slowness' },
    { input: 'healing', output: 'harming' },
    { input: 'strong_healing', output: 'strong_harming' },
    { input: 'poison', output: 'harming' },
    { input: 'strong_poison', output: 'strong_harming' },
    { input: 'night_vision', output: 'invisibility' },
    { input: 'long_night_vision', output: 'long_invisibility' }
  ]

  // Long Effects
  longAllowed.forEach(effect => {
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: `minecraft:long_${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: `minecraft:${effect}` }),
        'minecraft:redstone'
      ]
    ).heated().id(`genesis:long_${effect}_from_regular_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:long_${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: `minecraft:long_${effect}` }),
        'minecraft:gunpowder'
      ]
    ).heated().id(`genesis:long_splash_${effect}_from_long_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:long_${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:${effect}` }),
        'minecraft:redstone'
      ]
    ).heated().id(`genesis:long_splash_${effect}_from_splash_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'LINGERING', Potion: `minecraft:long_${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:long_${effect}` }),
        Fluid.of('create_central_kitchen:dragon_breath', 250)
      ]
    ).heated().id(`genesis:long_lingering_${effect}_from_long_splash_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'LINGERING', Potion: `minecraft:long_${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'LINGERING', Potion: `minecraft:${effect}` }),
        'minecraft:redstone'
      ]
    ).heated().id(`genesis:long_lingering_${effect}_from_lingering_potion_mixing`)
  })

  // Strong Effects
  strongAllowed.forEach(effect => {
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: `minecraft:strong_${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: `minecraft:${effect}` }),
        'minecraft:glowstone_dust'
      ]
    ).heated().id(`genesis:strong_${effect}_from_regular_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:strong_${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: `minecraft:strong_${effect}` }),
        'minecraft:gunpowder'
      ]
    ).heated().id(`genesis:strong_splash_${effect}_from_strong_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:strong_${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:${effect}` }),
        'minecraft:glowstone_dust'
      ]
    ).heated().id(`genesis:strong_splash_${effect}_from_splash_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'LINGERING', Potion: `minecraft:strong_${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:strong_${effect}` }),
        Fluid.of('create_central_kitchen:dragon_breath', 250)
      ]
    ).heated().id(`genesis:strong_lingering_${effect}_from_strong_splash_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'LINGERING', Potion: `minecraft:strong_${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'LINGERING', Potion: `minecraft:${effect}` }),
        'minecraft:glowstone_dust'
      ]
    ).heated().id(`genesis:strong_lingering_${effect}_from_lingering_potion_mixing`)
  })

  // Splash & Lingering Modifiers
  effectList.forEach(effect => {
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: `minecraft:${effect}` }),
        'minecraft:gunpowder'
      ]
    ).heated().id(`genesis:splash_${effect}_from_regular_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'LINGERING', Potion: `minecraft:${effect}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:${effect}` }),
        Fluid.of('create_central_kitchen:dragon_breath', 250)
      ]
    ).heated().id(`genesis:lingering_${effect}_from_splash_mixing`)
  })

  // Non-Standard Bases
  otherBases.forEach(effect => {
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: `${effect.type}`, Potion: `minecraft:${effect.output}` })],
      [effect.input, effect.ingredient]
    ).heated()
  })

  // Conversion Recipes from Awkward
  conversionBases.forEach(effect => {
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: `minecraft:${effect.output}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: 'minecraft:awkward' }),
        `minecraft:${effect.ingredient}`
      ]
    ).heated().id(`genesis:${effect.output}_from_awkward_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:${effect.output}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: 'minecraft:awkward' }),
        `minecraft:${effect.ingredient}`
      ]
    ).heated().id(`genesis:splash_${effect.output}_from_splash_awkward_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'LINGERING', Potion: `minecraft:${effect.output}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'LINGERING', Potion: 'minecraft:awkward' }),
        `minecraft:${effect.ingredient}`
      ]
    ).heated().id(`genesis:lingering_${effect.output}_from_lingering_awkward_potion_mixing`)
  })

  // Inversion Recipes using Fermented Spider Eye
  inversionBases.forEach(effect => {
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: `minecraft:${effect.output}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'REGULAR', Potion: `minecraft:${effect.input}` }),
        'minecraft:fermented_spider_eye'
      ]
    ).heated().id(`genesis:${effect.output}_from_${effect.input}_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:${effect.output}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: `minecraft:${effect.input}` }),
        'minecraft:fermented_spider_eye'
      ]
    ).heated().id(`genesis:splash_${effect.output}_from_splash_${effect.input}_potion_mixing`)
    event.recipes.create.mixing(
      [Fluid.of('create:potion', 1000, { Bottle: 'LINGERING', Potion: `minecraft:${effect.output}` })],
      [
        Fluid.of('create:potion', 1000, { Bottle: 'LINGERING', Potion: `minecraft:${effect.input}` }),
        'minecraft:fermented_spider_eye'
      ]
    ).heated().id(`genesis:lingering_${effect.output}_from_lingering_${effect.input}_potion_mixing`)
  })

  // Splash Water Bottle
  event.recipes.create.mixing(
    [Fluid.of('create:potion', 1000, { Bottle: 'SPLASH', Potion: 'minecraft:water' })],
    [
      Fluid.water(1000),
      'minecraft:gunpowder'
    ]
  ).heated().id('genesis:splash_water_potion_mixing')
})