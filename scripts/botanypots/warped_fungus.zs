<recipetype:botanypots:crop>.removeByName("botanypots:minecraft/crop/warped_fungus");

<recipetype:botanypots:crop>.addJsonRecipe(
  "warped_fungus_as_crop",
  {
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
  }
);
