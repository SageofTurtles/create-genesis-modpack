execute as @e[type=glow_item_frame,nbt={Item:{id:"minecraft:glass_pane"}}] run data merge entity @s {Invisible:1b}

schedule function minecraft:invglowitemframe 1t