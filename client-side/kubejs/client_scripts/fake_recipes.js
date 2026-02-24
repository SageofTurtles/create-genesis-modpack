JEIAddedEvents.registerCategories((event) => {
  const guiHelper = event.JEI_HELPERS.guiHelper

  // Fluid Interaction category builder
  event.custom("genesis:fluid_interaction", (category) => {
    category
      .title("Fluid Interaction")
      .icon(guiHelper.createDrawableItemStack(Item.of("minecraft:lava_bucket")))
      // Draw blank canvas 128 x 24 px
      .background(guiHelper.createBlankDrawable(128, 24))
      // Check if recipe is valid for category
      .isRecipeHandled((recipe) => {
        return (!!recipe.data.input1.fluid && !!recipe.data.input2.fluid && !!recipe.data.output.item)
      })
      .setWidth(128)
      .setHeight(24)
      // Define the inputs/output for looking up recipes by item
      .handleLookup((builder, recipe, focuses) => {
        builder.addSlot("INPUT", 4, 4).addFluidStack(recipe.data.input1.fluid, 1000).setSlotName("input1")
        builder.addSlot("INPUT", 56, 4).addFluidStack(recipe.data.input2.fluid, 1000).setSlotName("input2")
        builder.addSlot("OUTPUT", 108, 4).addItemStack(recipe.data.output).setSlotName("output")
      })
      // Draw elements on canvas
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
        // <image location>, <int x>, <int y>, <int blitOffset>, <float uOffset>, <float vOffset>, <int uWidth>, <int vHeight>, <int textureWidth>, <int textureHeight>
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 3, 3, 0, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 55, 3, 0, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 107, 3, 0, 0, 0, 18, 18, 18, 18)

        guiGraphics.blit("kubejs:textures/gui/plus.png", 30, 4, 4, 0, 0, 16, 16, 16, 16)
        guiGraphics.blit("kubejs:textures/gui/arrow.png", 82, 4, 4, 0, 0, 16, 16, 16, 16)
      })
  })

  // Molten Vents category builder
  event.custom("genesis:molten_vents", (category) => {
    category
      .title("Molten Vents")
      .icon(guiHelper.createDrawableItemStack(Item.of("molten_vents:active_molten_veridium")))
      .background(guiHelper.createBlankDrawable(136, 94))
      .setWidth(136)
      .setHeight(94)
      .handleLookup((builder, recipe, focuses) => {
        builder.addSlot("INPUT", 20, 20).addItemStack(recipe.data.vent).setSlotName("vent")
        builder.addSlot("INPUT", 20, 2).addFluidStack("minecraft:lava", 1000).setSlotName("fluid0")
        builder.addSlot("INPUT", 2, 20).addFluidStack("minecraft:lava", 1000).setSlotName("fluid1")
        builder.addSlot("INPUT", 38, 20).addFluidStack("minecraft:lava", 1000).setSlotName("fluid2")
        builder.addSlot("INPUT", 20, 38).addFluidStack("minecraft:lava", 1000).setSlotName("fluid3")

        builder.addSlot("OUTPUT", 100, 20).addItemStack(recipe.data.vent).setSlotName("vent")
        builder.addSlot("OUTPUT", 100, 2).addItemStack(recipe.data.output).setSlotName("output0")
        builder.addSlot("OUTPUT", 82, 20).addItemStack(recipe.data.output).setSlotName("output1")
        builder.addSlot("OUTPUT", 118, 20).addItemStack(recipe.data.output).setSlotName("output2")
        builder.addSlot("OUTPUT", 100, 38).addItemStack(recipe.data.output).setSlotName("output3")
      })
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 19, 19, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 19, 1, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 1, 19, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 37, 19, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 19, 37, 0, 0, 18, 18, 18, 18)

        guiGraphics.blit("kubejs:textures/gui/arrow.png", 60, 20, 0, 0, 0, 16, 16, 16, 16)

        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 99, 19, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 99, 1, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 81, 19, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 117, 19, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 99, 37, 0, 0, 18, 18, 18, 18)

        guiGraphics.drawWordWrap(Client.font, Text.of(recipe.data.description), 2, 58, 134, 60)
      })
  })

  // Item Block Interaction category builder
  event.custom("genesis:item_block_interaction", (category) => {
    category
      .title("Item Block Interaction")
      .icon(guiHelper.createDrawableItemStack(Item.of("minecraft:iron_hoe")))
      .background(guiHelper.createBlankDrawable(128, 24))
      .setWidth(128)
      .setHeight(24)
      .handleLookup((builder, recipe, focuses) => {
        if (recipe.data.input.item.item) {
          builder.addSlot("INPUT", 4, 4).addItemStack(recipe.data.input.item).setSlotName("input1")
        } else if (recipe.data.input.item.tag) {
          builder.addSlot("INPUT", 4, 4).addIngredients([Ingredient.of(recipe.data.input.item.tag)]).setSlotName("input1")
        }

        if (recipe.data.input.block.item) {
          builder.addSlot("INPUT", 56, 4).addItemStack(recipe.data.input.block).setSlotName("input2")
        } else if (recipe.data.input.block.tag) {
          builder.addSlot("INPUT", 56, 4).addIngredients([Ingredient.of(recipe.data.input.block.tag)]).setSlotName("input2")
        }

        builder.addSlot("OUTPUT", 108, 4).addItemStack(recipe.data.output).setSlotName("output")
      })
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 3, 3, 0, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 55, 3, 0, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 107, 3, 0, 0, 0, 18, 18, 18, 18)

        if (recipe.data.type == "rclick") {
          guiGraphics.blit("kubejs:textures/gui/rclick.png", 30, 4, 4, 0, 0, 16, 16, 16, 16)
        } else if (recipe.data.type == "lclick") {
          guiGraphics.blit("kubejs:textures/gui/lclick.png", 30, 4, 4, 0, 0, 16, 16, 16, 16)
        }

        guiGraphics.blit("kubejs:textures/gui/arrow.png", 82, 4, 4, 0, 0, 16, 16, 16, 16)
      })
  })

  // Item Entity Interaction category builder
  event.custom("genesis:item_entity_interaction", (category) => {
    category
      .title("Item Entity Interaction")
      .icon(guiHelper.createDrawableItemStack(Item.of("minecraft:shears")))
      .background(guiHelper.createBlankDrawable(128, 24))
      .setWidth(128)
      .setHeight(24)
      .handleLookup((builder, recipe, focuses) => {
        if (recipe.data.input.item) {
          builder.addSlot("INPUT", 4, 4).addItemStack(recipe.data.input).setSlotName("input")
        } else if (recipe.data.input.tag) {
          builder.addSlot("INPUT", 4, 4).addIngredients([Ingredient.of(recipe.data.input.tag)]).setSlotName("input")
        }

        builder.addSlot("OUTPUT", 108, 4).addItemStack(recipe.data.output).setSlotName("output")
      })
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 3, 3, 0, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 107, 3, 0, 0, 0, 18, 18, 18, 18)

        guiGraphics.blit("kubejs:textures/gui/rclick.png", 30, 4, 4, 0, 0, 16, 16, 16, 16)
        guiGraphics.blit("kubejs:textures/gui/arrow.png", 82, 4, 4, 0, 0, 16, 16, 16, 16)

        if (recipe.data.entity?.texture) {
          guiGraphics.blit(recipe.data.entity.texture, 55, 3, 0, 0, 0, 18, 18, 18, 18)
        }
      })
  })

  // Item Interaction category builder
  event.custom("genesis:item_interaction", (category) => {
    category
      .title("Item Interaction")
      .icon(guiHelper.createDrawableItemStack(Item.of("minecraft:potion")))
      .background(guiHelper.createBlankDrawable(80, 24))
      .setWidth(80)
      .setHeight(24)
      .handleLookup((builder, recipe, focuses) => {
        if (recipe.data.input.item) {
          builder.addSlot("INPUT", 4, 4).addItemStack(recipe.data.input.item).setSlotName("input")
        } else if (recipe.data.input.tag) {
          builder.addSlot("INPUT", 4, 4).addIngredients([Ingredient.of(recipe.data.input.tag)]).setSlotName("input")
        }

        if (recipe.data.output.item) {
          builder.addSlot("OUTPUT", 60, 4).addItemStack(recipe.data.output.item).setSlotName("output")
        } else if (recipe.data.output.tag) {
          builder.addSlot("OUTPUT", 60, 4).addIngredients([Ingredient.of(recipe.data.output.item)]).setSlotName("output")
        }
      })
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 3, 3, 0, 0, 0, 18, 18, 18, 18)
        guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 59, 3, 0, 0, 0, 18, 18, 18, 18)

        guiGraphics.blit("kubejs:textures/gui/rclick.png", 24, 4, 4, 0, 0, 16, 16, 16, 16)
        guiGraphics.blit("kubejs:textures/gui/arrow.png", 40, 4, 4, 0, 0, 16, 16, 16, 16)
      })
  })

  // Trading category builder
  event.custom("genesis:trade", (category) => {
    category
      .title("Trading")
      .icon(guiHelper.createDrawableItemStack(Item.of("minecraft:emerald")))
      .background(guiHelper.createBlankDrawable(160, 30))
      .setWidth(160)
      .setHeight(30)
      .handleLookup((builder, recipe, focuses) => {
        if (recipe.data.input1.item) {
          builder.addSlot("INPUT", 41, 11).addItemStack(Item.of(recipe.data.input1)).setSlotName("input1")
        } else if (recipe.data.input1.tag) {
          builder.addSlot("INPUT", 41, 11).addIngredients([Ingredient.of(recipe.data.input1.tag)]).setSlotName("input1")
        }

        if (recipe.data.input2.item) {
          builder.addSlot("INPUT", 72, 11).addItemStack(Item.of(recipe.data.input2)).setSlotName("input2")
        } else if (recipe.data.input2.tag) {
          builder.addSlot("INPUT", 72, 11).addIngredients([Ingredient.of(recipe.data.input2.tag)]).setSlotName("input2")
        }

        if (recipe.data.output.item) {
          builder.addSlot("OUTPUT", 103, 11).addItemStack(Item.of(recipe.data.output)).setSlotName("output")
        } else if (recipe.data.output.tag) {
          builder.addSlot("OUTPUT", 103, 11).addIngredients([Ingredient.of(recipe.data.output.tag)]).setSlotName("output")
        }
      })
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
        guiGraphics.blit("kubejs:textures/gui/trade_button.png", 36, 10, 0, 0, 0, 88, 20, 88, 20)

        const profession = Text.translate(recipe.data.profession).append(Text.of(" - ")).append(Text.translate(recipe.data.level))
        const professionWidth = Client.font.width(profession.toString())
        guiGraphics.drawWordWrap(Client.font, profession, 0 /*44 - professionWidth / 2*/, 0, professionWidth, 0x000008)
      })
  })

  // Variable Crafting category builder
  event.custom("genesis:variable_crafting", (category) => {
    category
      .title("Variable Crafting")
      .icon(guiHelper.createDrawableItemStack(Item.of("minecraft:crafting_table")))
      .background(guiHelper.createBlankDrawable(136, 110))
      .setWidth(136)
      .setHeight(110)
      .handleLookup((builder, recipe, focuses) => {
        let top = 1
        if (!recipe.data.description) {
          top += 28
        }

        if (recipe.data.type === "shapeless") {
          for (let i = 0; i < recipe.data.inputs.length; i++) {
            let input = recipe.data.inputs.get(i)

            if (input.item) {
              builder.addSlot("INPUT", 11 + i % 3 * 18, top + Math.floor(i / 3) * 18).addItemStack(input.item).setSlotName("input" + i)
            } else if (input.tag) {
              builder.addSlot("INPUT", 11 + i % 3 * 18, top + Math.floor(i / 3) * 18).addIngredients([Ingredient.of(input.tag)]).setSlotName("input" + i)
            }
          }
        } else if (recipe.data.type === "shaped") {
          for (let i = 0; i < recipe.data.pattern.length; i++) {
            let row = recipe.data.pattern.get(i)

            for (let j = 0; j < row.length(); j++) {
              let input = recipe.data.key[row.split("")[j]]

              if (input) {
                if (input.item) {
                  builder.addSlot("INPUT", 11 + j * 18, top + i * 18).addItemStack(input.item).setSlotName("input" + i + j)
                } else if (input.tag) {
                  builder.addSlot("INPUT", 11 + j * 18, top + i * 18).addIngredients([Ingredient.of(input.tag)]).setSlotName("input" + i + j)
                }
              }
            }
          }
        }

        if (recipe.data.output.item) {
          builder.addSlot("OUTPUT", 105, top + 18).addItemStack(recipe.data.output).setSlotName("output")
        } else if (recipe.data.output.tag) {
          builder.addSlot("OUTPUT", 105, top + 18).addIngredients([Ingredient.of(recipe.data.output)]).setSlotName("output")
        }
      })
      .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
        let top = 0
        if (recipe.data.description) {
          guiGraphics.drawWordWrap(Client.font, Text.of(recipe.data.description), 2, 56, 132, 0x000000)
        } else {
          top += 28
        }

        for (let i = 0; i < 9; i++) {
          guiGraphics.blit("jei:textures/jei/atlas/gui/slot.png", 10 + i % 3 * 18, top + Math.floor(i / 3) * 18, 0, 0, 0, 18, 18, 18, 18)
        }

        guiGraphics.blit("jei:textures/jei/atlas/gui/recipe_arrow.png", 71, top + 19, 0, 0, 0, 22, 16, 22, 16)
        guiGraphics.blit("jei:textures/jei/atlas/gui/output_slot.png", 100, top + 14, 0, 0, 0, 26, 26, 26, 26)

        if (recipe.data.type === "shapeless") {
          guiGraphics.blit("jei:textures/jei/atlas/gui/icons/shapeless_icon.png", 117, top, 0, 0, 0, 9, 9, 9, 9)
        }
      })
  })
})

// Register custom recipes from JSON files
JEIAddedEvents.registerRecipes((event) => {
  event.custom("genesis:fluid_interaction")
    .addAll(JsonIO.read("kubejs/config/recipes/fluid_interactions.json").recipes)

  event.custom("genesis:molten_vents")
    .addAll(JsonIO.read("kubejs/config/recipes/molten_vents.json").recipes)

  event.custom("genesis:item_block_interaction")
    .addAll(JsonIO.read("kubejs/config/recipes/item_block_interactions.json").recipes)

  event.custom("genesis:item_entity_interaction")
    .addAll(JsonIO.read("kubejs/config/recipes/item_entity_interactions.json").recipes)

  /*
  Item Interaction - disabled (no recipes currently)
  event.custom("genesis:item_interaction")
    .addAll(JsonIO.read("kubejs/config/recipes/item_interactions.json").recipes)
  */

  event.custom("genesis:trade")
    .addAll(JsonIO.read("kubejs/config/recipes/trades.json").recipes)

  event.custom("genesis:variable_crafting")
    .addAll(JsonIO.read("kubejs/config/recipes/variable_crafting.json").recipes)
})