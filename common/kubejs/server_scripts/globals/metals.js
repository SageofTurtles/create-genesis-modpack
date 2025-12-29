// priority: 200

global['BASE_METALS'] = [
  {
    name: 'copper',
    block: 'minecraft:copper_block',
    ingot: 'minecraft:copper_ingot',
    nugget: 'create:copper_nugget',
    sheet: 'create:copper_sheet'
  },
  {
    name: 'iron',
    block: 'minecraft:iron_block',
    ingot: 'minecraft:iron_ingot',
    nugget: 'minecraft:iron_nugget',
    sheet: 'create:iron_sheet'
  },
  {
    name: 'gold',
    block: 'minecraft:gold_block',
    ingot: 'minecraft:gold_ingot',
    nugget: 'minecraft:gold_nugget',
    sheet: 'create:golden_sheet'
  },
  {
    name: 'tin',
    block: 'create_ironworks:tin_block',
    ingot: 'create_ironworks:tin_ingot',
    nugget: 'create_ironworks:tin_nugget',
    sheet: null
  },
  {
    name: 'zinc',
    block: 'create:zinc_block',
    ingot: 'create:zinc_ingot',
    nugget: 'create:zinc_nugget',
    sheet: 'createdeco:zinc_sheet'
  },
  {
    name: 'andesite_alloy',
    block: 'create:andesite_alloy_block',
    ingot: 'create:andesite_alloy',
    nugget: null,
    sheet: 'createdeco:andesite_sheet'
  }
]

global['ALLOYS'] = [
  {
    name: 'brass',
    block: 'create:brass_block',
    ingot: 'create:brass_ingot',
    nugget: 'create:brass_nugget',
    sheet: 'create:brass_sheet',
    heat: 'low',
    base1: Fluid.of('createmetalwork:molten_zinc', 90),
    base2: Fluid.of('createmetalwork:molten_copper', 90),
    amount: 180
  },
  {
    name: 'bronze',
    block: 'create_ironworks:bronze_block',
    ingot: 'create_ironworks:bronze_ingot',
    nugget: 'create_ironworks:bronze_nugget',
    sheet: null,
    heat: 'low',
    base1: Fluid.of('createmetalwork:molten_tin', 90),
    base2: Fluid.of('createmetalwork:molten_copper', 90),
    amount: 180
  },
  {
    name: 'steel',
    block: 'create_ironworks:steel_block',
    ingot: 'create_ironworks:steel_ingot',
    nugget: 'create_ironworks:steel_nugget',
    sheet: 'create_ironworks:steel_sheet',
    heat: 'high',
    base1: Fluid.of('createmetalwork:molten_iron', 270),
    base2: '3x create_ironworks:coal_dust',
    amount: 90
  },
  {
    name: 'netherite',
    block: 'minecraft:netherite_block',
    ingot: 'minecraft:netherite_ingot',
    nugget: 'createdeco:netherite_nugget',
    sheet: 'createdeco:netherite_sheet',
    heat: 'high',
    base1: 'createaddition:electrum_ingot',
    base2: 'minecraft:netherite_scrap',
    amount: 90
  }
]