# Desc: Applies silence, custom name and glowing effect
#
# Called by: silence_mobs:second

data merge entity @s {CustomName:'{"text":"silenced"}',Silent:1b}
effect give @s minecraft:glowing 3 0 true
execute at @s run playsound minecraft:block.amethyst_block.resonate ambient @a[distance=..6] ~ ~ ~ .8 2
