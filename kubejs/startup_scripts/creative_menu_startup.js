/*
All creative tab IDs:

minecraft:building_blocks
minecraft:colored_blocks
minecraft:natural_blocks
minecraft:functional_blocks
minecraft:redstone_blocks
minecraft:tools_and_utilities
minecraft:combat
minecraft:food_and_drinks
minecraft:ingredients
minecraft:spawn_eggs

minecraft:inventory
minecraft:hotbar
minecraft:search
minecraft:op_blocks

mcwbridges:mcwbridges
mcwfences:fenceitemgroup
mcwfurnitures:furnitures
mcwlights:mcwlights
mcwroofs:mcwroofs
mcwwindows:mcwwindows

bellsandwhistles:bells_and_whistles_tab
botanypots:creative_tab
brewinandchewin:brewinandchewin
cgm:creative_tab
chipped:main
copycats:functional
copycats:main
create:base
create:palettes
create_central_kitchen:base
create_confectionary:create_confectionary_tab
create_connected:main
create_enchantment_industry:base
create_ironworks:create_ironworks
create_mobile_packages:create_mobile_packages_tab
create_power_loader:main
create_vibrant_vaults:base
createaddition:main
createcobblestone:main
createdeco:bricks_tab
createdeco:props_tab
createmetalwork:base
createrailwaysnavigator:createrailwaysnavigatortab
decorative_blocks:general
extra_gauges:main_tab
farmersdelight:farmersdelight
furniture:furniture
immersive_aircraft:immersive_aircraft
interiors:main
kubejs:tab
luminousblocks:luminous_tab
numismatics:main
packedup:packedup
petrolsparts:base
rechiseled:rechiseled
smallships:smallships.creative_mode_tab
sophisticatedbackpacks:main
supplementaries:jars
supplementaries:supplementaries
*/

StartupEvents.modifyCreativeTab('bellsandwhistles:bells_and_whistles_tab', event => {
	  event.remove('bellsandwhistles:metro_casing');
	  event.remove('bellsandwhistles:corrugated_metro_casing');
	  event.remove('bellsandwhistles:metro_panel');
	  event.remove('bellsandwhistles:corrugated_metro_panel');
	  event.remove('bellsandwhistles:metro_trapdoor');
	  event.remove('bellsandwhistles:metro_window');
})

StartupEvents.modifyCreativeTab('cgm:creative_tab', event => {
	  event.remove('cgm:workbench');
})

StartupEvents.modifyCreativeTab('create:base', event => {
	  event.remove('create:crushed_raw_tin');
})

StartupEvents.modifyCreativeTab('createaddition:main', event => {
	  event.remove('createaddition:straw');
})

StartupEvents.modifyCreativeTab('create_central_kitchen:base', event => {
	  event.remove('create_central_kitchen:mulberry_pie_slice');
	  event.remove('create_central_kitchen:yucca_cake_slice');
	  event.remove('create_central_kitchen:aloe_cake_slice');
	  event.remove('create_central_kitchen:passion_fruit_cake_slice');
	  event.remove('create_central_kitchen:pumpkin_cake_slice');
	  event.remove('create_central_kitchen:sweet_berry_cake_slice');
})

StartupEvents.modifyCreativeTab('createdeco:props_tab', event => {
	  event.remove('createdeco:white_shipping_container');
	  event.remove('createdeco:orange_shipping_container');
	  event.remove('createdeco:magenta_shipping_container');
	  event.remove('createdeco:light_blue_shipping_container');
	  event.remove('createdeco:yellow_shipping_container');
	  event.remove('createdeco:lime_shipping_container');
	  event.remove('createdeco:pink_shipping_container');
	  event.remove('createdeco:gray_shipping_container');
	  event.remove('createdeco:light_gray_shipping_container');
	  event.remove('createdeco:cyan_shipping_container');
	  event.remove('createdeco:purple_shipping_container');
	  event.remove('createdeco:blue_shipping_container');
	  event.remove('createdeco:brown_shipping_container');
	  event.remove('createdeco:green_shipping_container');
	  event.remove('createdeco:red_shipping_container');
	  event.remove('createdeco:black_shipping_container');
})

StartupEvents.modifyCreativeTab('create_enchantment_industry:base', event => {
	  event.remove('create_enchantment_industry:experience_rotor');
})

StartupEvents.modifyCreativeTab('furniture:furniture', event => {
	  event.remove('furniture:bin');
	  event.remove('furniture:trash_bag');
})

StartupEvents.modifyCreativeTab('createmetalwork:base', event => {
	  event.remove('createmetalwork:crushed_andesite');
	  event.remove('createmetalwork:crushed_netherite_scrap');
})

StartupEvents.modifyCreativeTab('mcwlights:mcwlights', event => {
	  event.remove('mcwlights:wall_lantern');
	  event.remove('mcwlights:striped_wall_lantern');
	  event.remove('mcwlights:covered_wall_lantern');
	  event.remove('mcwlights:chain_wall_lantern');
	  event.remove('mcwlights:tavern_wall_lantern');
	  event.remove('mcwlights:festive_wall_lantern');
	  event.remove('mcwlights:cross_wall_lantern');
	  event.remove('mcwlights:bell_wall_lantern');
})

StartupEvents.modifyCreativeTab('sophisticatedbackpacks:main', event => {
	  event.remove('sophisticatedbackpacks:stack_upgrade_omega_tier');
	  event.remove('sophisticatedbackpacks:xp_pump_upgrade');
	  event.remove('sophisticatedbackpacks:infinity_upgrade');
	  event.remove('sophisticatedbackpacks:survival_infinity_upgrade');
})
