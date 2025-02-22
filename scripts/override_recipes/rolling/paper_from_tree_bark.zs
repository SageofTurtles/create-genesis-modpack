<recipetype:minecraft:crafting>.removeByName("farmersdelight:paper_from_tree_bark");

<recipetype:createaddition:rolling>.addJsonRecipe(
  "paper_from_tree_bark_rolling",
  {
    "type": "createaddition:rolling",
    "input": {
        "item": "farmersdelight:tree_bark"
    },
    "result": {
        "item": "minecraft:paper",
        "count": 1
    }
  }
);
