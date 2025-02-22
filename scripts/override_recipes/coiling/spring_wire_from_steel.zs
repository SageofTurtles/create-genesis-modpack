<recipetype:create:cutting>.removeByName("createbigcannons:cutting/spring_wire_steel");

<recipetype:vintageimprovements:coiling>.addJsonRecipe(
  "spring_wire_from_steel_coiling",
  {
    "type": "vintageimprovements:coiling",
    "ingredients": [
      {
        "item": "genesis_additions:steel_sheet"
      }
    ],
    "results": [
      {
        "item": "createbigcannons:spring_wire",
        "count": 3
      }
    ],
    "processingTime": 120
  }
);
