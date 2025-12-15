global['CHAINS'] = [
  {
    name: 'chain',
    inputNugget: 'genesis:cheap_metal_nuggets',
    inputIngot: '#genesis:cheap_metal_ingots',
    output: 'minecraft:chain'
  },
  {
    name: 'chain_from_copper',
    inputNugget: 'create:copper_nugget',
    inputIngot: 'minecraft:copper_ingot',
    output: 'mcwlights:copper_chain'
  },
  {
    name: 'chain_from_gold',
    inputNugget: 'minecraft:gold_nugget',
    inputIngot: 'minecraft:gold_ingot',
    output: 'mcwlights:golden_chain'
  }
]

global['CHAIN_METALS'] = [
  {
    ingot: 'iron',
    name: 'iron'
  },
  {
    ingot: 'copper',
    name: 'copper'
  },
  {
    ingot: 'gold',
    name: 'golden'
  }
]