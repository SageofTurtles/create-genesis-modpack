<recipetype:botanypots:crop>.removeByName("botanypots:minecraft/crop/chorus");

<recipetype:botanypots:crop>.addJsonRecipe(
  "chorus_as_crop",
  {
    "type": "botanypots:crop",
    "seed": [
      {
        "item": "minecraft:chorus_fruit"
      },
      {
        "item": "minecraft:chorus_flower"
      }
    ],
    "categories": [
      "end_stone"
    ],
    "growthTicks": 1200,
    "display": {
      "type": "botanypots:transitional",
      "phases": [
        {
          "block": "minecraft:chorus_plant"
        },
        {
          "block": "minecraft:chorus_plant"
        },
        {
          "block": "minecraft:chorus_flower"
        }
      ]
    },
    "drops": [
      {
        "chance": 1.00,
        "output": {
          "item": "minecraft:chorus_fruit"
        }
      },
      {
        "chance": 0.05,
        "output": {
          "item": "minecraft:chorus_plant"
        }
      },
      {
        "chance": 0.05,
        "output": {
          "item": "minecraft:chorus_flower"
        }
      }
    ]
  }
);
