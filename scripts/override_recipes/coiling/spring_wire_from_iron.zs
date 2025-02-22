<recipetype:create:cutting>.removeByName("createbigcannons:cutting/spring_wire_iron");

<recipetype:vintageimprovements:coiling>.addJsonRecipe(
  "spring_wire_from_iron_coiling",
  {
    "type": "vintageimprovements:coiling",
    "ingredients": [
      {
        "item": "create:iron_sheet"
      }
    ],
    "results": [
      {
        "item": "createbigcannons:spring_wire",
        "count": 1
      }
    ],
    "processingTime": 120
  }
);
