<recipetype:create:mixing>.removeByName("create:mixing/lava_from_cobble");

<recipetype:createbigcannons:melting>.addJsonRecipe(
  "cobblestone_melting",
  {
    "type": "createbigcannons:melting",
    "heatRequirement": "heated",
    "ingredients": [
      {
        "tag": "forge:cobblestone"
      }
    ],
    "processingTime": 200,
    "results": [
      {
        "amount": 250,
        "fluid": "minecraft:lava"
      }
    ]
  }
);