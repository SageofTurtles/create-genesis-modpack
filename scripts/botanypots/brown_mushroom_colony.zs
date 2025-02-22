<recipetype:botanypots:crop>.removeByName("botanypots:farmersdelight/crop/brown_mushroom_colony");

<recipetype:botanypots:crop>.addJsonRecipe(
  "brown_mushroom_colony_as_crop",
  {
    "type": "botanypots:crop",
    "seed": {
      "item": "farmersdelight:brown_mushroom_colony"
    },
    "categories": [
      "mushroom"
    ],
    "growthTicks": 2400,
    "display": {
      "type": "botanypots:transitional",
      "phases": {
        "block": "farmersdelight:brown_mushroom_colony"
      }
    },
    "drops": [
      {
        "chance": 0.15,
        "output": {
          "item": "farmersdelight:brown_mushroom_colony"
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
          "item": "minecraft:brown_mushroom_block"
        },
        "minRolls": 1,
        "maxRolls": 4
      }
    ]
  }
);
