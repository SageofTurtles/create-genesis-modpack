<recipetype:botanypots:crop>.removeByName("botanytrees:minecraft/mangrove");

<recipetype:botanypots:crop>.addJsonRecipe(
  "mangrove_propagule_as_crop",
  {
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
  }
);
