<recipetype:create:pressing>.removeByName("create:pressing/sugar_cane");

<recipetype:createaddition:rolling>.addJsonRecipe(
  "paper_from_sugar_cane_rolling",
  {
    "type": "createaddition:rolling",
    "input": {
        "item": "minecraft:sugar_cane"
    },
    "result": {
        "item": "minecraft:paper",
        "count": 1
    }
  }
);
