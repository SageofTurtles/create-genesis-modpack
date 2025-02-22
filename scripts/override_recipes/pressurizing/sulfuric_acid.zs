<recipetype:vintageimprovements:pressurizing>.removeByName("vintageimprovements:pressurizing/sulfuric_acid");

<recipetype:vintageimprovements:pressurizing>.addJsonRecipe(
  "sulfuric_acid_pressurizing",
  {
    "type": "vintageimprovements:pressurizing",
    "heatRequirement": "heated",
    "ingredients": [
      {
        "item": "vintageimprovements:sulfur"
      },
      {
        "item": "minecraft:nether_wart"
      },
      {
        "fluid": "minecraft:water",
        "amount": 1000
      }
    ],
    "results": [
      {
        "fluid": "vintageimprovements:sulfuric_acid",
        "amount": 1000
      }
    ],
    "processingTime": 600
  }
);