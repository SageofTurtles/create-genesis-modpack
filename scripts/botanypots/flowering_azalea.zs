<recipetype:botanypots:crop>.removeByName("botanytrees:minecraft/flowering_azalea");

<recipetype:botanypots:crop>.addJsonRecipe(
  "flowering_azalea_as_crop",
  {
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
  }
);
