global['BASE_METALS'] = [
  {
    name: 'copper',
    block: 'minecraft:copper_block',
    ingot: 'minecraft:copper_ingot',
    nugget: 'create:copper_nugget'
  },
  {
    name: 'iron',
    block: 'minecraft:iron_block',
    ingot: 'minecraft:iron_ingot',
    nugget: 'minecraft:iron_nugget'
  },
  {
    name: 'gold',
    block: 'minecraft:gold_block',
    ingot: 'minecraft:gold_ingot',
    nugget: 'minecraft:gold_nugget'
  },
  {
    name: 'tin',
    block: 'create_ironworks:tin_block',
    ingot: 'create_ironworks:tin_ingot',
    nugget: 'create_ironworks:tin_nugget'
  },
  {
    name: 'zinc',
    block: 'create:zinc_block',
    ingot: 'create:zinc_ingot',
    nugget: 'create:zinc_nugget'
  },
  {
    name: 'andesite_alloy',
    block: 'create:andesite_alloy_block',
    ingot: 'create:andesite_alloy',
    nugget: null
  }
]

global['ALLOYS'] = [
  {
    name: 'brass',
    block: 'create:brass_block',
    ingot: 'create:brass_ingot',
    nugget: 'create:copper_nugget',
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
    heat: 'high',
    base1: 'createaddition:electrum_ingot',
    base2: 'minecraft:netherite_scrap',
    amount: 90
  }
]