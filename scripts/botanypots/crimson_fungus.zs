<recipetype:botanypots:crop>.removeByName("botanypots:minecraft/crop/crimson_fungus");

<recipetype:botanypots:crop>.addJsonRecipe(
  "crimson_fungus_as_crop",
  {
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
  }
);
