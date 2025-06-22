ServerEvents.recipes(event => {
  // Add Budding Amethyst as soil
  event.custom({
    "type": "botanypots:soil",
    "input": {
      "item": "minecraft:budding_amethyst"
    },
    "display": {
      "block": "minecraft:budding_amethyst"
    },
    "categories": [
      "crystal"
    ],
    "growthModifier": 1
  })

  // Add Amethyst Shard as crop
  event.custom({
    "type": "botanypots:crop",
    "seed": {
      "item": "minecraft:amethyst_shard"
    },
    "categories": [
      "crystal"
    ],
    "growthTicks": 2400,
    "display": {
      "type": "botanypots:transitional",
      "phases": {
        "block": "minecraft:amethyst_cluster"
      }
    },
    "drops": [
      {
        "chance": 0.25,
        "output": {
          "item": "minecraft:small_amethyst_bud"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.20,
        "output": {
          "item": "minecraft:medium_amethyst_bud"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.15,
        "output": {
          "item": "minecraft:large_amethyst_bud"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.10,
        "output": {
          "item": "minecraft:amethyst_cluster"
        },
        "minRolls": 1,
        "maxRolls": 2
      }
    ]
  }).id('genesis:amethyst_shard_crop')

  // Add leaves for tree growing
  let standardTrees = [
    'acacia',
    'birch',
    'cherry',
    'jungle',
    'spruce'
  ]

  let appleTrees = [
    'oak',
    'dark_oak'
  ]

  standardTrees.forEach(type => {
    event.custom({
      "type": "botanypots:crop",
      "seed": {
        "item": `minecraft:${type}_sapling`
      },
      "categories": [
        "dirt"
      ],
      "growthTicks": 2400,
      "display": {
        "type": "botanypots:transitional",
        "phases": {
          "block": `minecraft:${type}_sapling`
        }
      },
      "drops": [
        {
          "chance": 1.00,
          "output": {
            "item": `minecraft:${type}_log`
          },
          "minRolls": 2,
          "maxRolls": 4
        },
        {
          "chance": 0.10,
          "output": {
            "item": "minecraft:stick"
          },
          "minRolls": 1,
          "maxRolls": 2
        },
        {
          "chance": 0.15,
          "output": {
            "item": `minecraft:${type}_sapling`
          },
          "minRolls": 1,
          "maxRolls": 2
        },
        {
          "chance": 0.60,
          "output": {
            "item": `minecraft:${type}_leaves`
          },
          "minRolls": 1,
          "maxRolls": 3
        }
      ]
    }).id(`botanytrees:minecraft/${type}`)
  })

  appleTrees.forEach(type => {
    event.custom({
      "type": "botanypots:crop",
      "seed": {
        "item": `minecraft:${type}_sapling`
      },
      "categories": [
        "dirt"
      ],
      "growthTicks": 2400,
      "display": {
        "type": "botanypots:transitional",
        "phases": {
          "block": `minecraft:${type}_sapling`
        }
      },
      "drops": [
        {
          "chance": 1.00,
          "output": {
            "item": `minecraft:${type}_log`
          },
          "minRolls": 2,
          "maxRolls": 4
        },
        {
          "chance": 0.10,
          "output": {
            "item": "minecraft:stick"
          },
          "minRolls": 1,
          "maxRolls": 2
        },
        {
          "chance": 0.15,
          "output": {
            "item": `minecraft:${type}_sapling`
          },
          "minRolls": 1,
          "maxRolls": 2
        },
        {
          "chance": 0.60,
          "output": {
            "item": `minecraft:${type}_leaves`
          },
          "minRolls": 1,
          "maxRolls": 3
        },
        {
          "chance": 0.05,
          "output": {
            "item": "minecraft:apple"
          },
          "minRolls": 1,
          "maxRolls": 2
        }
      ]
    }).id(`botanytrees:minecraft/${type}`)
  })

  event.custom({
    "type": "botanypots:crop",
    "seed": {
      "item": "minecraft:azalea"
    },
    "categories": [
      "dirt"
    ],
    "growthTicks": 2400,
    "display": {
      "type": "botanypots:transitional",
      "phases": {
        "block": "minecraft:azalea"
      }
    },
    "drops": [
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:oak_log"
        },
        "minRolls": 2,
        "maxRolls": 4
      },
      {
        "chance": 0.10,
        "output": {
          "item": "minecraft:stick"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:azalea"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.80,
        "output": {
          "item": "minecraft:flowering_azalea"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.50,
        "output": {
          "item": "minecraft:azalea_leaves"
        },
        "minRolls": 1,
        "maxRolls": 3
      },
      {
        "chance": 0.50,
        "output": {
          "item": "minecraft:flowering_azalea_leaves"
        },
        "minRolls": 1,
        "maxRolls": 3
      }
    ]
  }).id('botanytrees:minecraft/azalea')

  event.custom({
    "type": "botanypots:crop",
    "seed": {
      "item": "minecraft:flowering_azalea"
    },
    "categories": [
      "dirt"
    ],
    "growthTicks": 2400,
    "display": {
      "type": "botanypots:transitional",
      "phases": {
        "block": "minecraft:flowering_azalea"
      }
    },
    "drops": [
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:oak_log"
        },
        "minRolls": 2,
        "maxRolls": 4
      },
      {
        "chance": 0.10,
        "output": {
          "item": "minecraft:stick"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:azalea"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.90,
        "output": {
          "item": "minecraft:flowering_azalea"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.50,
        "output": {
          "item": "minecraft:azalea_leaves"
        },
        "minRolls": 1,
        "maxRolls": 3
      },
      {
        "chance": 0.60,
        "output": {
          "item": "minecraft:flowering_azalea_leaves"
        },
        "minRolls": 1,
        "maxRolls": 3
      }
    ]
  }).id('botanytrees:minecraft/flowering_azalea')

  event.custom({
    "type": "botanypots:crop",
    "seed": {
      "item": "minecraft:mangrove_propagule"
    },
    "categories": [
      "dirt",
      "water"
    ],
    "growthTicks": 2400,
    "display": {
      "type": "botanypots:transitional",
      "phases": {
        "block": "minecraft:mangrove_propagule"
      }
    },
    "drops": [
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:mangrove_log"
        },
        "minRolls": 2,
        "maxRolls": 4
      },
      {
        "chance": 0.10,
        "output": {
          "item": "minecraft:stick"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.15,
        "output": {
          "item": "minecraft:mangrove_propagule"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.60,
        "output": {
          "item": "minecraft:mangrove_leaves"
        },
        "minRolls": 1,
        "maxRolls": 3
      },
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:mangrove_roots"
        },
        "minRolls": 1,
        "maxRolls": 2
      }
    ]
  }).id('botanytrees:minecraft/mangrove')

  // Adjust rates for nether fungi drops
  event.custom({
    "type": "botanypots:crop",
    "seed": {
      "item": "minecraft:crimson_fungus"
    },
    "categories": [
      "crimson_nylium"
    ],
    "growthTicks": 2400,
    "display": {
      "type": "botanypots:transitional",
      "phases": {
        "block": "minecraft:crimson_fungus"
      }
    },
    "drops": [
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:crimson_stem"
        },
        "minRolls": 2,
        "maxRolls": 4
      },
      {
        "chance": 0.10,
        "output": {
          "item": "minecraft:shroomlight"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.15,
        "output": {
          "item": "minecraft:crimson_fungus"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.60,
        "output": {
          "item": "minecraft:nether_wart_block"
        },
        "minRolls": 1,
        "maxRolls": 3
      }
    ]
  }).id('botanypots:minecraft/crop/crimson_fungus')

  event.custom({
    "type": "botanypots:crop",
    "seed": {
      "item": "minecraft:warped_fungus"
    },
    "categories": [
      "warped_nylium"
    ],
    "growthTicks": 2400,
    "display": {
      "type": "botanypots:transitional",
      "phases": {
        "block": "minecraft:warped_fungus"
      }
    },
    "drops": [
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:warped_stem"
        },
        "minRolls": 2,
        "maxRolls": 4
      },
      {
        "chance": 0.10,
        "output": {
          "item": "minecraft:shroomlight"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.15,
        "output": {
          "item": "minecraft:warped_fungus"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.60,
        "output": {
          "item": "minecraft:warped_wart_block"
        },
        "minRolls": 1,
        "maxRolls": 3
      }
    ]
  }).id('botanypots:minecraft/crop/warped_fungus')

  // Add giant mushroom variants for Farmer's Delight mushroom colonies
  let colors = [
    'brown',
    'red'
  ]

  colors.forEach(color => {
    event.custom({
      "type": "botanypots:crop",
      "seed": {
        "item": `farmersdelight:${color}_mushroom_colony`
      },
      "categories": [
        "mushroom"
      ],
      "growthTicks": 2400,
      "display": {
        "type": "botanypots:transitional",
        "phases": {
          "block": `farmersdelight:${color}_mushroom_colony`
        }
      },
      "drops": [
        {
          "chance": 0.15,
          "output": {
            "item": `farmersdelight:${color}_mushroom_colony`
          },
          "minRolls": 1,
          "maxRolls": 2
        },
        {
          "chance": 0.80,
          "output": {
            "item": "minecraft:mushroom_stem"
          },
          "minRolls": 1,
          "maxRolls": 2
        },
        {
          "chance": 1.00,
          "output": {
            "item": `minecraft:${color}_mushroom_block`
          },
          "minRolls": 1,
          "maxRolls": 4
        }
      ]
    }).id(`botanypots:farmersdelight/crop/${color}_mushroom_colony`)
  })
})