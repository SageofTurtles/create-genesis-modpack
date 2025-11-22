StartupEvents.modifyCreativeTab('bellsandwhistles:bells_and_whistles_tab', event => {
	event.remove('bellsandwhistles:metro_casing');
	event.remove('bellsandwhistles:corrugated_metro_casing');
	event.remove('bellsandwhistles:metro_panel');
	event.remove('bellsandwhistles:corrugated_metro_panel');
	event.remove('bellsandwhistles:metro_trapdoor');
	event.remove('bellsandwhistles:metro_window');
})

StartupEvents.modifyCreativeTab('brewinandchewin:brewinandchewin', event => {
	event.remove('brewinandchewin:cocoa_fudge');
})

StartupEvents.modifyCreativeTab('create:base', event => {
	event.remove('create:crushed_raw_tin');
})

StartupEvents.modifyCreativeTab('create:palettes', event => {
	event.addAfter('create:limestone', 'kubejs:limesand');
})

StartupEvents.modifyCreativeTab('createaddition:main', event => {
	event.remove('createaddition:zinc_sheet');
	event.addAfter('createaddition:redstone_relay', 'createaddition:cake_base');
	event.addAfter('createaddition:cake_base', 'createaddition:cake_base_baked');
})

StartupEvents.modifyCreativeTab('create_aquatic_ambitions:base', event => {
	event.remove('create_aquatic_ambitions:calcium_rich_powder');
})

StartupEvents.modifyCreativeTab('create_central_kitchen:base', event => {
	event.remove('create_central_kitchen:mulberry_pie_slice');
	event.remove('create_central_kitchen:yucca_cake_slice');
	event.remove('create_central_kitchen:aloe_cake_slice');
	event.remove('create_central_kitchen:passion_fruit_cake_slice');
	event.remove('create_central_kitchen:pumpkin_cake_slice');
	event.remove('create_central_kitchen:sweet_berry_cake_slice');
})

StartupEvents.modifyCreativeTab('create_connected:main', event => {
	event.remove('create_connected:control_chip');
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

StartupEvents.modifyCreativeTab('createfisheryindustry:fishery_tab', event => {
	event.remove('createfisheryindustry:zinc_sheet');
})

StartupEvents.modifyCreativeTab('create_ironworks:create_ironworks', event => {
	event.remove('create_ironworks:charcoal_dust');
})

StartupEvents.modifyCreativeTab('createmetalwork:base', event => {
	event.remove('createmetalwork:crushed_andesite');
	event.remove('createmetalwork:crushed_netherite_scrap');
})

StartupEvents.modifyCreativeTab('farmersdelight:farmersdelight', event => {
	event.remove('farmersdelight:wheat_dough');
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
	event.remove('mcwlights:wall_lamp');
	event.remove('mcwlights:square_wall_lamp');
	event.remove('mcwlights:white_lamp');
	event.remove('mcwlights:light_gray_lamp');
	event.remove('mcwlights:gray_lamp');
	event.remove('mcwlights:black_lamp');
	event.remove('mcwlights:brown_lamp');
	event.remove('mcwlights:red_lamp');
	event.remove('mcwlights:orange_lamp');
	event.remove('mcwlights:yellow_lamp');
	event.remove('mcwlights:lime_lamp');
	event.remove('mcwlights:green_lamp');
	event.remove('mcwlights:cyan_lamp');
	event.remove('mcwlights:light_blue_lamp');
	event.remove('mcwlights:blue_lamp');
	event.remove('mcwlights:purple_lamp');
	event.remove('mcwlights:magenta_lamp');
	event.remove('mcwlights:pink_lamp');
})

StartupEvents.modifyCreativeTab('mcwroofs:mcwroofs', event => {
	event.remove('mcwroofs:rain_gutter');
})

StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
	event.addAfter('minecraft:diamond', 'kubejs:rough_diamond');
	event.addAfter('minecraft:ink_sac', 'kubejs:empty_ink_sac');
})

StartupEvents.modifyCreativeTab('minecraft:op_blocks', event => {
	event.remove(Item.of('structure_gel:red_gel'));
	event.remove(Item.of('structure_gel:blue_gel'));
	event.remove(Item.of('structure_gel:green_gel'));
	event.remove(Item.of('structure_gel:cyan_gel'));
	event.remove(Item.of('structure_gel:orange_gel'));
	event.remove(Item.of('structure_gel:yellow_gel'));
	event.remove(Item.of('structure_gel:data_handler'));
	event.remove(Item.of('structure_gel:building_tool'));
	event.remove(Item.of('structure_gel:dynamic_spawner'));
})

StartupEvents.modifyCreativeTab('minecraft:search', event => {
	event.remove(/railways:.*incomplete.*/);
	event.remove(/create_connected:.*control_chip/);
	event.remove(/create_central_kitchen:incomplete.*/);
	event.remove('create_enchantment_industry:experience_rotor');
	event.remove('createmetalwork:crushed_andesite');
	event.remove('createmetalwork:crushed_netherite_scrap');
	event.remove('create_central_kitchen:mulberry_pie_slice');
	event.remove('create_central_kitchen:yucca_cake_slice');
	event.remove('create_central_kitchen:aloe_cake_slice');
	event.remove('create_central_kitchen:passion_fruit_cake_slice');
	event.remove('create_central_kitchen:pumpkin_cake_slice');
	event.remove('create_central_kitchen:sweet_berry_cake_slice');
	event.remove('createaddition:zinc_sheet');
	event.remove(Item.of('patchouli:guide_book', '{"patchouli:book":"apotheosis:apoth_chronicle"}'));
	event.remove('create_jetpack:jetpack_placeable');
	event.remove('create_jetpack:netherite_jetpack_placeable');
	event.addAfter('createaddition:redstone_relay', 'createaddition:cake_base');
	event.addAfter('createaddition:cake_base', 'createaddition:cake_base_baked');
})

StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {
	event.remove(Item.of('patchouli:guide_book', '{"patchouli:book":"apotheosis:apoth_chronicle"}'));
	event.remove(Item.of('minecraft:recovery_compass'));
})

StartupEvents.modifyCreativeTab('sophisticatedbackpacks:main', event => {
	event.remove('sophisticatedbackpacks:stack_upgrade_omega_tier');
	event.remove('sophisticatedbackpacks:xp_pump_upgrade');
	event.remove('sophisticatedbackpacks:infinity_upgrade');
	event.remove('sophisticatedbackpacks:survival_infinity_upgrade');
})

StartupEvents.modifyCreativeTab('supplementaries:supplementaries', event => {
	event.remove('supplementaries:rope');
	event.remove('supplementaries:candle_holder');
	event.remove('supplementaries:candle_holder_white');
	event.remove('supplementaries:candle_holder_light_gray');
	event.remove('supplementaries:candle_holder_gray');
	event.remove('supplementaries:candle_holder_black');
	event.remove('supplementaries:candle_holder_brown');
	event.remove('supplementaries:candle_holder_red');
	event.remove('supplementaries:candle_holder_orange');
	event.remove('supplementaries:candle_holder_yellow');
	event.remove('supplementaries:candle_holder_lime');
	event.remove('supplementaries:candle_holder_green');
	event.remove('supplementaries:candle_holder_cyan');
	event.remove('supplementaries:candle_holder_light_blue');
	event.remove('supplementaries:candle_holder_blue');
	event.remove('supplementaries:candle_holder_purple');
	event.remove('supplementaries:candle_holder_magenta');
	event.remove('supplementaries:candle_holder_pink');
})
