// priority: 0
const $CustomPortalBuilder = Java.loadClass('net.kyrptonaught.customportalapi.api.CustomPortalBuilder')
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
const $Items = Java.loadClass('net.minecraft.world.item.Items')
const $Item = Java.loadClass('net.minecraft.world.item.Item')
const $Block = Java.loadClass('net.minecraft.world.level.block.Block')

StartupEvents.postInit(event => {
    function customPortal(frameBlockId, lightItemId, dimDestination, dimReturn) {
        
        const frameBlock = $ForgeRegistries.BLOCKS.getValue(new $ResourceLocation(frameBlockId))
        const lightItem = $ForgeRegistries.ITEMS.getValue(new $ResourceLocation(lightItemId))

        if (!frameBlock || !lightItem) {
            console.error("Frame block or light item not found!")
            return
        }

        const builder = $CustomPortalBuilder.beginPortal()

        // Force correct overloads
        builder.getClass().getMethod("frameBlock", $Block).invoke(builder, frameBlock)
        builder.getClass().getMethod("lightWithItem", $Item).invoke(builder, lightItem)
        
        builder
            .destDimID(new $ResourceLocation(dimDestination))
            .returnDim(new $ResourceLocation(dimReturn), true)
            .tintColor(255, 200, 0)
            .onlyLightInOverworld()
            .registerPortal()

        console.log("Custom portal registered using custom item to light it.")
    }
    
    customPortal(
        "create:industrial_iron_block",
        "cgm:basic_bullet",
        "genesis:warzone",
        "minecraft:overworld"
    )
})