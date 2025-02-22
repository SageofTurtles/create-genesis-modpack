<recipetype:botanypots:crop>.removeByName("botanytrees:minecraft/oak");

<recipetype:botanypots:crop>.addJsonRecipe(
  "oak_sapling_as_crop",
  {
    "type": "botanypots:crop",
    "seed": {
      "item": "minecraft:oak_sapling"
    },
    "categories": [
      "dirt"
    ],
    "growthTicks": 2400,
    "display": {
      "type": "botanypots:transitional",
      "phases": {
        "block": "minecraft:oak_sapling"
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
        "chance": 0.15,
        "output": {
          "item": "minecraft:oak_sapling"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.60,
        "output": {
          "item": "minecraft:oak_leaves"
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
  }
);
