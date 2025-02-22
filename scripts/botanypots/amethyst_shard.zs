<recipetype:botanypots:crop>.addJsonRecipe(
  "amethyst_shard_as_crop",
  {
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
  }
);
