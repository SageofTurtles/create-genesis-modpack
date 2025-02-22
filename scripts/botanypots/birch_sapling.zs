<recipetype:botanypots:crop>.removeByName("botanytrees:minecraft/birch");

<recipetype:botanypots:crop>.addJsonRecipe(
  "birch_sapling_as_crop",
  {
    "type": "botanypots:crop",
    "seed": {
      "item": "minecraft:birch_sapling"
    },
    "categories": [
      "dirt"
    ],
    "growthTicks": 2400,
    "display": {
      "type": "botanypots:transitional",
      "phases": {
        "block": "minecraft:birch_sapling"
      }
    },
    "drops": [
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:birch_log"
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
          "item": "minecraft:birch_sapling"
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.60,
        "output": {
          "item": "minecraft:birch_leaves"
        },
        "minRolls": 1,
        "maxRolls": 3
      }
    ]
  }
);
