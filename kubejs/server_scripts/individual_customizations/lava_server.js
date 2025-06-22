ServerEvents.recipes(event => {
  event.remove({ id: 'create:mixing/lava_from_cobble' })
  event.custom({
    "type": "createbigcannons:melting",
    "heatRequirement": "heated",
    "ingredients": [{
      "tag": "forge:cobblestone"
    }],
    "processingTime": 100,
    "results": [{
      "amount": 50,
      "fluid": "minecraft:lava"
    }]
  }).id('genesis:lava_from_cobblestone')
})