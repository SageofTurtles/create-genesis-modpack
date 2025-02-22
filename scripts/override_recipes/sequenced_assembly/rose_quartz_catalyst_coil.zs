<recipetype:create:sequenced_assembly>.removeByName("create_optical:sequenced_assembly/rose_quartz_catalyst_coil");

<recipetype:create:sequenced_assembly>.addJsonRecipe(
  "rose_quartz_catalyst_coil_sequenced_assembly",
  {
    "type": "create:sequenced_assembly",
    "ingredient": {"item": "create:andesite_alloy"},
    "loops": 3,
    "results": [
      {
        "chance": 100.0,
        "item": "create_optical:rose_quartz_catalyst_coil"
      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {"item": "create_optical:incomplete_rose_quartz_catalyst_coil"},
          {"item": "create:rose_quartz"}
        ],
        "results": [
          {"item": "create_optical:incomplete_rose_quartz_catalyst_coil"}
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {"item": "create_optical:incomplete_rose_quartz_catalyst_coil"},
          {
            "amount": 250,
            "fluid": "minecraft:lava"
          }
        ],
        "results": [
          {"item": "create_optical:incomplete_rose_quartz_catalyst_coil"}
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {"item": "create_optical:incomplete_rose_quartz_catalyst_coil"}
        ],
        "results": [
          {"item": "create_optical:incomplete_rose_quartz_catalyst_coil"}
        ]
      },
      {
        "type": "create_optical:focusing",
        "ingredients": [
          {"item": "create_optical:incomplete_rose_quartz_catalyst_coil"}
        ],
        "processingTime": 40,
        "required_beam_type": 3,
        "results": [
          {"item": "create_optical:incomplete_rose_quartz_catalyst_coil"}
        ]
      }
    ],
    "transitionalItem": {"item": "create_optical:incomplete_rose_quartz_catalyst_coil"}
  }
);
