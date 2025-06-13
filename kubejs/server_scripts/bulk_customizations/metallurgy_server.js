// Remove default recipes
ServerEvents.recipes(event => {
    event.remove({ mod: 'createmetalwork' })
    event.remove({ type: 'createbigcannons:melting' })
    event.remove({ mod: 'create_ironworks', type: 'create:mixing' })
    event.remove({ id: /create_ironworks:materials\/plates\/(bronze|steel|tin)_sheet2/ })
    event.remove({ id: /createbigcannons:compacting\/forge.*/ })
    event.remove({ id: /createbigcannons:compacting\/iron_to_cast_iron.*/ })
    event.remove({ id: /createbigcannons:mixing\/alloy_nethersteel.*/ })
    event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' })
    event.remove({ id: 'create:mixing/brass_ingot' })
    event.remove({ id: 'minecraft:netherite_ingot' })
})

// Add item tags to Create: Ironworks crushed raw tin
ServerEvents.tags('item', event => {
    event.add('forge:dusts/tin', 'create_ironworks:crushed_raw_tin')
    event.add('forge:crushed_raw_tin', 'create_ironworks:crushed_raw_tin')
    event.add('create:crushed_raw_materials', 'create_ironworks:crushed_raw_tin')
    event.add('forge:tin_dusts', 'create_ironworks:crushed_raw_tin')
})

// Add new recipes
ServerEvents.recipes(event => {
    let melting = [
        { molten: 'createmetalwork:molten_copper', block: 'minecraft:copper_block', ingot: 'minecraft:copper_ingot', nugget: 'create:copper_nugget', heat: 'heated' },
        { molten: 'createmetalwork:molten_gold', block: 'minecraft:gold_block', ingot: 'minecraft:gold_ingot', nugget: 'minecraft:gold_nugget', heat: 'heated' },
        { molten: 'createmetalwork:molten_iron', block: 'minecraft:iron_block', ingot: 'minecraft:iron_ingot', nugget: 'minecraft:iron_nugget', heat: 'heated' },
        { molten: 'createmetalwork:molten_zinc', block: 'create:zinc_block', ingot: 'create:zinc_ingot', nugget: 'create:zinc_nugget', heat: 'heated' },
        { molten: 'createmetalwork:molten_tin', block: 'create_ironworks:tin_block', ingot: 'create_ironworks:tin_ingot', nugget: 'create_ironworks:tin_nugget', heat: 'heated' },
        { molten: 'createmetalwork:molten_brass', block: 'create:brass_block', ingot: 'create:brass_ingot', nugget: 'create:brass_nugget', heat: 'heated' },
        { molten: 'createbigcannons:molten_bronze', block: 'create_ironworks:bronze_block', ingot: 'create_ironworks:bronze_ingot', nugget: 'create_ironworks:bronze_nugget', heat: 'heated' },
        { molten: 'createbigcannons:molten_cast_iron', block: 'createbigcannons:cast_iron_block', ingot: 'createbigcannons:cast_iron_ingot', nugget: 'createbigcannons:cast_iron_nugget', heat: 'superheated' },
        { molten: 'createmetalwork:molten_netherite', block: 'minecraft:netherite_block', ingot: 'minecraft:netherite_ingot', nugget: 'createdeco:netherite_nugget', heat: 'superheated' },
        { molten: 'createbigcannons:molten_steel', block: 'create_ironworks:steel_block', ingot: 'create_ironworks:steel_ingot', nugget: 'create_ironworks:steel_nugget', heat: 'superheated' },
        { molten: 'createbigcannons:molten_nethersteel', block: 'createbigcannons:nethersteel_block', ingot: 'createbigcannons:nethersteel_ingot', nugget: 'createbigcannons:nethersteel_nugget', heat: 'superheated' }
    ]

    let heatedAlloys = [
        { output: Fluid.of('createmetalwork:molten_andesite_alloy', 90), input1: Fluid.of('createmetalwork:molten_andesite', 405), input2: Fluid.of('createmetalwork:molten_iron', 10) },
        { output: Fluid.of('createmetalwork:molten_andesite_alloy', 90), input1: Fluid.of('createmetalwork:molten_andesite', 405), input2: Fluid.of('createmetalwork:molten_zinc', 10) },
        { output: Fluid.of('createmetalwork:molten_brass', 180), input1: Fluid.of('createmetalwork:molten_zinc', 90), input2: Fluid.of('createmetalwork:molten_copper', 90) },
        { output: Fluid.of('createbigcannons:molten_bronze', 180), input1: Fluid.of('createmetalwork:molten_tin', 90), input2: Fluid.of('createmetalwork:molten_copper', 90) }
    ]

    let superheatedAlloys = [
        { output: Fluid.of('createmetalwork:molten_netherite', 90), input1: Item.of('minecraft:netherite_scrap', 4), input2: Fluid.of('createmetalwork:molten_gold', 360) },
        { output: Fluid.of('createbigcannons:molten_steel', 90), input1: Item.of('create_ironworks:coal_dust', 2), input2: Fluid.of('createbigcannons:molten_cast_iron', 270) },
        { output: Fluid.of('createbigcannons:molten_nethersteel', 180), input1: Fluid.of('createmetalwork:molten_netherite', 90), input2: Fluid.of('createbigcannons:molten_steel', 90) }
    ]

    // Add standard melting & compacting recipes
    melting.forEach(instance => {
        event.custom({
            "type": "createbigcannons:melting",
            "heatRequirement": instance.heat,
            "ingredients": [{
                "item": instance.block
            }],
            "processingTime": 1620,
            "results": [{
                "amount": 810,
                "fluid": instance.molten
            }]
        })
        event.custom({
            "type": "createbigcannons:melting",
            "heatRequirement": instance.heat,
            "ingredients": [{
                "item": instance.ingot
            }],
            "processingTime": 180,
            "results": [{
                "amount": 90,
                "fluid": instance.molten
            }]
        })
        event.custom({
            "type": "createbigcannons:melting",
            "heatRequirement": instance.heat,
            "ingredients": [{
                "item": instance.nugget
            }],
            "processingTime": 20,
            "results": [{
                "amount": 10,
                "fluid": instance.molten
            }]
        })
        event.recipes.create.compacting(instance.ingot, Fluid.of(instance.molten, 90))
    })

    // Add non-standard melting & compacting recipes
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": 'heated',
        "ingredients": [{
            "item": 'minecraft:andesite'
        }],
        "processingTime": 1620,
        "results": [{
            "amount": 810,
            "fluid": 'createmetalwork:molten_andesite'
        }]
    })
    event.recipes.create.compacting('minecraft:andesite', Fluid.of('createmetalwork:molten_andesite', 810))
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": 'heated',
        "ingredients": [{
            "item": 'create:andesite_alloy_block'
        }],
        "processingTime": 1620,
        "results": [{
            "amount": 810,
            "fluid": 'createmetalwork:molten_andesite_alloy'
        }]
    })
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": 'heated',
        "ingredients": [{
            "item": 'create:andesite_alloy'
        }],
        "processingTime": 180,
        "results": [{
            "amount": 90,
            "fluid": 'createmetalwork:molten_andesite_alloy'
        }]
    })
    event.recipes.create.compacting('create:andesite_alloy', Fluid.of('createmetalwork:molten_andesite_alloy', 90))
    event.recipes.create.mixing(Fluid.of('createbigcannons:molten_cast_iron', 90), Fluid.of('createmetalwork:molten_iron', 90)).superheated()
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": 'heated',
        "ingredients": [{
            "item": 'createbigcannons:bronze_scrap'
        }],
        "processingTime": 20,
        "results": [{
            "amount": 10,
            "fluid": 'createbigcannons:molten_bronze'
        }]
    })
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": 'superheated',
        "ingredients": [{
            "item": 'createbigcannons:steel_scrap'
        }],
        "processingTime": 20,
        "results": [{
            "amount": 10,
            "fluid": 'createbigcannons:molten_steel'
        }]
    })

    // Add recipes for alloys
    heatedAlloys.forEach(instance => {
        event.recipes.create.mixing(instance.output, [instance.input1, instance.input2]).heated()
    })
    superheatedAlloys.forEach(instance => {
        event.recipes.create.mixing(instance.output, [instance.input1, instance.input2]).superheated()
    })
})
