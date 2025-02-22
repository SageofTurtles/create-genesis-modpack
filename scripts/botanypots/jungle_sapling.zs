<recipetype:botanypots:crop>.removeByName("botanytrees:minecraft/jungle");

<recipetype:botanypots:crop>.addJsonRecipe(
  "jungle_sapling_as_crop",
  {
    "type": "botanypots:crop",
    "seed": {
      "item": "minecraft:jungle_sapling"
    },
    "categories": [
      "dirt"
    ],
    "growthTicks": 2400,
    "display": {
      "type": "botanypots:transitional",
      "phases": {
        "block": "minecraft:jungle_sapling"
      }
    },
    "drops": [
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:jungle_log"
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
          "item": "minecraft:jungle_sapling"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.60,
        "output": {
          "item": "minecraft:jungle_leaves"
        },
        "minRolls": 1,
        "maxRolls": 3
      }
    ]
  }
);
